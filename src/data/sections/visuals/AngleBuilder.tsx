import { useState } from "react";
import { Button, Switch } from "@/components/atoms";
import { useSetVar, useVar } from "@/stores";

const VERTEX_X = 165;
const VERTEX_Y = 370;
const ARC_RADIUS = 160;
const RAY_LENGTH = 260;
const DEGREES = Math.PI / 180;

const polar = (radius: number, degrees: number): [number, number] => [
    VERTEX_X + radius * Math.cos(degrees * DEGREES),
    VERTEX_Y - radius * Math.sin(degrees * DEGREES),
];

const arcPath = (
    centreX: number,
    centreY: number,
    radius: number,
    startDegrees: number,
    endDegrees: number,
) => {
    const sx = centreX + radius * Math.cos(startDegrees * DEGREES);
    const sy = centreY - radius * Math.sin(startDegrees * DEGREES);
    const ex = centreX + radius * Math.cos(endDegrees * DEGREES);
    const ey = centreY - radius * Math.sin(endDegrees * DEGREES);
    const largeArc = Math.abs(endDegrees - startDegrees) > 180 ? 1 : 0;
    return `M ${sx} ${sy} A ${radius} ${radius} 0 ${largeArc} 0 ${ex} ${ey}`;
};

interface BuildStep {
    caption: string;
    elements: string[];
}

const build = (steps: [string, string[]][]): BuildStep[] => {
    const cumulative: string[] = [];
    return steps.map(([caption, added]) => {
        cumulative.push(...added);
        return { caption, elements: [...cumulative] };
    });
};

const OPENING: [string, string[]][] = [
    ["Draw the base line and mark the vertex B on it.", ["base"]],
    [
        "With the compass point on B and any convenient radius, draw a long arc cutting the line at P.",
        ["mainArc"],
    ],
    [
        "Keeping exactly the same radius, put the point on P and cut the arc at Q.",
        ["toQ"],
    ],
];

const THIRD_MARK: [string, string[]] = [
    "Still at the same radius, put the point on Q and cut the arc again at R.",
    ["toR"],
];

const BUILDS: Record<string, BuildStep[]> = {
    "60": build([
        ...OPENING,
        ["Join B to Q and extend the ray. Angle QBP is 60 degrees.", ["ray:60"]],
    ]),
    "120": build([
        ...OPENING,
        THIRD_MARK,
        ["Join B to R and extend the ray. Angle RBP is 120 degrees.", ["ray:120"]],
    ]),
    "30": build([
        ...OPENING,
        [
            "Open the compasses to more than half of PQ and draw an arc from P and one from Q. They cross halfway between the arms.",
            ["bisect:0-60"],
        ],
        ["Join B through the crossing. The angle is 30 degrees.", ["ray:30"]],
    ]),
    "90": build([
        ...OPENING,
        THIRD_MARK,
        [
            "Now bisect between Q and R: an arc from each, at the same width, crossing above the arc.",
            ["bisect:60-120"],
        ],
        ["Join B through the crossing. The angle is 90 degrees.", ["ray:90"]],
    ]),
    "45": build([
        ...OPENING,
        THIRD_MARK,
        ["Bisect between Q and R to reach the 90 degree position.", ["bisect:60-120"]],
        ["Join B through that crossing to draw the 90 degree ray.", ["ray:90"]],
        [
            "Mark the same radius on the base and on the new ray, then bisect between those two marks.",
            ["bisect:0-90"],
        ],
        ["Join B through the second crossing. The angle is 45 degrees.", ["ray:45"]],
    ]),
    "75": build([
        ...OPENING,
        THIRD_MARK,
        ["Bisect between Q and R to reach the 90 degree position.", ["bisect:60-120"]],
        ["Join B through that crossing to draw the 90 degree ray.", ["ray:90"]],
        [
            "Mark the same radius on the 60 degree ray and on the 90 degree ray, then bisect between those two marks.",
            ["bisect:60-90"],
        ],
        ["Join B through the second crossing. The angle is 75 degrees.", ["ray:75"]],
    ]),
};

const TARGETS = ["30", "45", "60", "75", "90", "120"];

const RAY_COLOURS: Record<string, string> = {
    "30": "#dc2626",
    "45": "#dc2626",
    "60": "#2563eb",
    "75": "#dc2626",
    "90": "#7c3aed",
    "120": "#2563eb",
};

const bisectGeometry = (from: number, to: number) => {
    const mid = (from + to) / 2;
    const halfGap = (to - from) / 2;
    const distance = 2 * ARC_RADIUS * Math.cos(halfGap * DEGREES);
    const [gx, gy] = polar(ARC_RADIUS, from);
    const [hx, hy] = polar(ARC_RADIUS, to);
    const [cx, cy] = polar(distance, mid);
    const dirFromG = (Math.atan2(-(cy - gy), cx - gx) * 180) / Math.PI;
    const dirFromH = (Math.atan2(-(cy - hy), cx - hx) * 180) / Math.PI;
    return { gx, gy, hx, hy, cx, cy, dirFromG, dirFromH, distance, mid };
};

export const AngleBuilder = () => {
    const target = String(useVar("targetConstructedAngle", "60"));
    const showProtractor = useVar("showProtractorOverlay", false) as boolean;
    const setVar = useSetVar();
    const [stepIndex, setStepIndex] = useState(0);

    const steps = BUILDS[target] ?? BUILDS["60"];
    const safeIndex = Math.min(stepIndex, steps.length - 1);
    const current = steps[safeIndex];
    const shown = new Set(current.elements);
    const finished = safeIndex === steps.length - 1;

    const chooseTarget = (value: string) => {
        setVar("targetConstructedAngle", value);
        setStepIndex(0);
    };

    const [pointPx, pointPy] = polar(ARC_RADIUS, 0);
    const [pointQx, pointQy] = polar(ARC_RADIUS, 60);
    const [pointRx, pointRy] = polar(ARC_RADIUS, 120);

    const bisections = [...shown]
        .filter((key) => key.startsWith("bisect:"))
        .map((key) => {
            const [from, to] = key.slice(7).split("-").map(Number);
            return { key, ...bisectGeometry(from, to) };
        });

    const rays = [...shown]
        .filter((key) => key.startsWith("ray:"))
        .map((key) => Number(key.slice(4)));

    return (
        <div className="w-full">
            <div className="mb-3 flex flex-wrap gap-2">
                {TARGETS.map((value) => (
                    <Button
                        key={value}
                        size="sm"
                        variant={target === value ? "default" : "outline"}
                        onClick={() => chooseTarget(value)}
                    >
                        {value} degrees
                    </Button>
                ))}
            </div>

            <svg
                width="100%"
                viewBox="0 0 700 460"
                role="img"
                aria-label="An angle being constructed one arc at a time"
                className="max-w-full"
            >
                <rect x={0} y={0} width={700} height={460} rx={10} fill="#f8fafc" />

                {showProtractor && (
                    <g opacity={0.85}>
                        <path
                            d={`M ${VERTEX_X - 150} ${VERTEX_Y} A 150 150 0 0 1 ${VERTEX_X + 150} ${VERTEX_Y} Z`}
                            fill="#dbeafe"
                            fillOpacity={0.5}
                            stroke="#2563eb"
                            strokeWidth={1.5}
                        />
                        {Array.from({ length: 19 }, (_, index) => {
                            const degrees = index * 10;
                            const [ox, oy] = polar(150, degrees);
                            const [ix, iy] = polar(degrees % 30 === 0 ? 130 : 139, degrees);
                            return (
                                <g key={`protractor-${degrees}`}>
                                    <line x1={ox} y1={oy} x2={ix} y2={iy} stroke="#1d4ed8" strokeWidth={1} />
                                    {degrees % 30 === 0 && (
                                        <text
                                            x={polar(118, degrees)[0]}
                                            y={polar(118, degrees)[1] + 4}
                                            textAnchor="middle"
                                            fontSize={10}
                                            fill="#1d4ed8"
                                        >
                                            {degrees}
                                        </text>
                                    )}
                                </g>
                            );
                        })}
                    </g>
                )}

                {shown.has("base") && (
                    <g>
                        <line
                            x1={VERTEX_X}
                            y1={VERTEX_Y}
                            x2={660}
                            y2={VERTEX_Y}
                            stroke="#334155"
                            strokeWidth={3}
                        />
                        <circle cx={VERTEX_X} cy={VERTEX_Y} r={5} fill="#334155" />
                        <text x={VERTEX_X - 8} y={VERTEX_Y + 26} fontSize={15} fill="#334155">
                            B
                        </text>
                    </g>
                )}

                {shown.has("mainArc") && (
                    <g>
                        <path
                            d={arcPath(VERTEX_X, VERTEX_Y, ARC_RADIUS, -6, 136)}
                            fill="none"
                            stroke="#7c3aed"
                            strokeWidth={2}
                            strokeDasharray="6 5"
                        />
                        <circle cx={pointPx} cy={pointPy} r={5} fill="#7c3aed" />
                        <text x={pointPx - 4} y={pointPy + 26} fontSize={14} fill="#7c3aed">
                            P
                        </text>
                    </g>
                )}

                {shown.has("toQ") && (
                    <g>
                        <path
                            d={arcPath(pointPx, pointPy, ARC_RADIUS, 95, 145)}
                            fill="none"
                            stroke="#0891b2"
                            strokeWidth={2}
                            strokeDasharray="6 5"
                        />
                        <circle cx={pointQx} cy={pointQy} r={5} fill="#0891b2" />
                        <text x={pointQx + 10} y={pointQy - 8} fontSize={14} fill="#0891b2">
                            Q
                        </text>
                    </g>
                )}

                {shown.has("toR") && (
                    <g>
                        <path
                            d={arcPath(pointQx, pointQy, ARC_RADIUS, 155, 205)}
                            fill="none"
                            stroke="#0891b2"
                            strokeWidth={2}
                            strokeDasharray="6 5"
                        />
                        <circle cx={pointRx} cy={pointRy} r={5} fill="#0891b2" />
                        <text x={pointRx - 20} y={pointRy - 8} fontSize={14} fill="#0891b2">
                            R
                        </text>
                    </g>
                )}

                {bisections.map((bisection) => (
                    <g key={bisection.key}>
                        <circle cx={bisection.gx} cy={bisection.gy} r={4} fill="#0f766e" />
                        <circle cx={bisection.hx} cy={bisection.hy} r={4} fill="#0f766e" />
                        <path
                            d={arcPath(
                                bisection.gx,
                                bisection.gy,
                                ARC_RADIUS,
                                bisection.dirFromG - 20,
                                bisection.dirFromG + 20,
                            )}
                            fill="none"
                            stroke="#0f766e"
                            strokeWidth={2}
                            strokeDasharray="5 4"
                        />
                        <path
                            d={arcPath(
                                bisection.hx,
                                bisection.hy,
                                ARC_RADIUS,
                                bisection.dirFromH - 20,
                                bisection.dirFromH + 20,
                            )}
                            fill="none"
                            stroke="#0f766e"
                            strokeWidth={2}
                            strokeDasharray="5 4"
                        />
                        <circle cx={bisection.cx} cy={bisection.cy} r={5} fill="#0f766e" />
                    </g>
                ))}

                {rays.map((degrees) => {
                    const length =
                        degrees === 75 || degrees === 30 || degrees === 90
                            ? Math.max(RAY_LENGTH, 2 * ARC_RADIUS * Math.cos(15 * DEGREES) + 30)
                            : RAY_LENGTH;
                    const [endX, endY] = polar(Math.min(length, 340), degrees);
                    const [labelX, labelY] = polar(Math.min(length, 340) + 22, degrees);
                    return (
                        <g key={`ray-${degrees}`}>
                            <line
                                x1={VERTEX_X}
                                y1={VERTEX_Y}
                                x2={endX}
                                y2={endY}
                                stroke={RAY_COLOURS[String(degrees)] ?? "#dc2626"}
                                strokeWidth={3}
                            />
                            <text
                                x={Math.min(Math.max(labelX, 26), 674)}
                                y={Math.max(labelY, 20)}
                                textAnchor="middle"
                                fontSize={14}
                                fontWeight={600}
                                fill={RAY_COLOURS[String(degrees)] ?? "#dc2626"}
                            >
                                {degrees}
                            </text>
                        </g>
                    );
                })}
            </svg>

            <div className="mt-3 rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <span className="mr-2 font-semibold text-slate-900">
                    Step {safeIndex + 1} of {steps.length}
                </span>
                {current.caption}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={safeIndex === 0}
                    onClick={() => setStepIndex((previous) => Math.max(previous - 1, 0))}
                >
                    Back
                </Button>
                <Button
                    size="sm"
                    disabled={finished}
                    onClick={() => setStepIndex((previous) => Math.min(previous + 1, steps.length - 1))}
                >
                    Next arc
                </Button>
                <Button variant="outline" size="sm" onClick={() => setStepIndex(0)}>
                    Start again
                </Button>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                    <Switch
                        checked={showProtractor}
                        onCheckedChange={(checked) => setVar("showProtractorOverlay", checked)}
                    />
                    Lay a protractor over it
                </label>
            </div>

            {finished && (
                <div className="mt-3 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-900">
                    The {target} degree angle is complete, and every mark on it came from arcs.
                    Switch the protractor on to check it — it should read exactly {target}, which
                    is the point: the protractor confirms the construction, it does not perform it.
                </div>
            )}
        </div>
    );
};
