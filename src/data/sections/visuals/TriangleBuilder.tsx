import { useState } from "react";
import { Button, Slider } from "@/components/atoms";
import { useSetVar, useVar } from "@/stores";

const VIEWBOX_WIDTH = 700;
const VIEWBOX_HEIGHT = 440;
const PAD_LEFT = 70;
const PAD_RIGHT = 70;
const PAD_TOP = 50;
const PAD_BOTTOM = 70;
const DEGREES = Math.PI / 180;

const CASES = [
    "Three sides",
    "Two sides and the included angle",
    "One side and two angles",
] as const;

const CASE_LABELS: Record<string, string> = {
    "Three sides": "Three sides (SSS)",
    "Two sides and the included angle": "Two sides and the angle between (SAS)",
    "One side and two angles": "One side and two angles (ASA)",
};

interface ModelPoint {
    x: number;
    y: number;
}

interface Model {
    /** Left-hand end of the base, right-hand end of the base, and the apex. */
    left: ModelPoint;
    right: ModelPoint;
    apex: ModelPoint | null;
    leftLabel: string;
    rightLabel: string;
    apexLabel: string;
    baseLabel: string;
    problem: string | null;
    steps: string[];
}

const buildThreeSides = (base: number, fromLeft: number, fromRight: number): Model => {
    const x = (fromLeft * fromLeft - fromRight * fromRight + base * base) / (2 * base);
    const heightSquared = fromLeft * fromLeft - x * x;
    const possible = fromLeft + fromRight > base && heightSquared > 0;
    return {
        left: { x: 0, y: 0 },
        right: { x: base, y: 0 },
        apex: possible ? { x, y: Math.sqrt(heightSquared) } : null,
        leftLabel: "A",
        rightLabel: "B",
        apexLabel: "C",
        baseLabel: `AB = ${base} cm`,
        problem: possible
            ? null
            : `AC and BC together come to ${(fromLeft + fromRight).toFixed(
                  1,
              )} cm, which cannot bridge a base of ${base} cm. The arcs fall short of each other and no triangle exists.`,
        steps: [
            `Draw the longest side as the base and letter it: AB = ${base} cm.`,
            `Open the compasses to ${fromLeft} cm. With the point on A, draw an arc above the base.`,
            `Reset to ${fromRight} cm. With the point on B, draw an arc crossing the first at C.`,
            "Join AC and BC. The triangle has exactly the three given lengths.",
        ],
    };
};

const buildIncludedAngle = (base: number, angle: number, second: number): Model => ({
    left: { x: 0, y: 0 },
    right: { x: base, y: 0 },
    apex: { x: second * Math.cos(angle * DEGREES), y: second * Math.sin(angle * DEGREES) },
    leftLabel: "A",
    rightLabel: "B",
    apexLabel: "C",
    baseLabel: `AB = ${base} cm`,
    problem: null,
    steps: [
        `Draw AB = ${base} cm and letter both ends.`,
        `At A, construct an angle of ${angle} degrees with arcs and draw the ray well past the length you need.`,
        `Open the compasses to ${second} cm and cut the ray at C.`,
        "Join C to B. The two given sides now hold the given angle between them.",
    ],
});

const buildTwoAngles = (base: number, atLeft: number, atRight: number): Model => {
    const apexAngle = 180 - atLeft - atRight;
    const possible = apexAngle > 5;
    const sideFromLeft = possible
        ? (base * Math.sin(atRight * DEGREES)) / Math.sin(apexAngle * DEGREES)
        : 0;
    return {
        left: { x: 0, y: 0 },
        right: { x: base, y: 0 },
        apex: possible
            ? {
                  x: sideFromLeft * Math.cos(atLeft * DEGREES),
                  y: sideFromLeft * Math.sin(atLeft * DEGREES),
              }
            : null,
        leftLabel: "B",
        rightLabel: "C",
        apexLabel: "A",
        baseLabel: `BC = ${base} cm`,
        problem: possible
            ? null
            : `Angle B and angle C come to ${
                  atLeft + atRight
              } degrees, leaving almost nothing for angle A. The two rays run nearly parallel and never meet.`,
        steps: [
            `Draw BC = ${base} cm and letter both ends.`,
            `At B, construct an angle of ${atLeft} degrees and draw a long ray upwards.`,
            `At C, construct an angle of ${atRight} degrees on the same side of the base, and draw a long ray upwards.`,
            `Extend both rays until they meet, and letter the meeting point A. Angle A is ${apexAngle} degrees.`,
        ],
    };
};

export const TriangleBuilder = () => {
    const activeCase = String(useVar("triangleCase", "Three sides"));
    const sideAB = useVar("sideLengthAB", 7) as number;
    const sideAC = useVar("sideLengthAC", 6) as number;
    const sideBC = useVar("sideLengthBC", 5) as number;
    const sasBase = useVar("includedAngleBaseAB", 6) as number;
    const sasAngle = useVar("includedAngleAtA", 60) as number;
    const sasSide = useVar("includedAngleSideAC", 4) as number;
    const asaBase = useVar("twoAnglesBaseBC", 7) as number;
    const asaAngleB = useVar("twoAnglesAtB", 60) as number;
    const asaAngleC = useVar("twoAnglesAtC", 45) as number;
    const setVar = useSetVar();
    const [stepIndex, setStepIndex] = useState(0);

    const model =
        activeCase === "Three sides"
            ? buildThreeSides(sideAB, sideAC, sideBC)
            : activeCase === "Two sides and the included angle"
              ? buildIncludedAngle(sasBase, sasAngle, sasSide)
              : buildTwoAngles(asaBase, asaAngleB, asaAngleC);

    const safeStep = Math.min(stepIndex, model.steps.length - 1);
    const show = (from: number) => safeStep >= from;

    const points = [model.left, model.right, ...(model.apex ? [model.apex] : [])];
    const minX = Math.min(...points.map((point) => point.x));
    const maxX = Math.max(...points.map((point) => point.x));
    const maxY = Math.max(...points.map((point) => point.y), 1);
    const spanX = Math.max(maxX - minX, 1);
    const scale = Math.min(
        (VIEWBOX_WIDTH - PAD_LEFT - PAD_RIGHT) / spanX,
        (VIEWBOX_HEIGHT - PAD_TOP - PAD_BOTTOM) / maxY,
        40,
    );
    const originX = PAD_LEFT + ((VIEWBOX_WIDTH - PAD_LEFT - PAD_RIGHT) - spanX * scale) / 2;
    const baseY = VIEWBOX_HEIGHT - PAD_BOTTOM;

    const toScreen = (point: ModelPoint): [number, number] => [
        originX + (point.x - minX) * scale,
        baseY - point.y * scale,
    ];

    const [leftX, leftY] = toScreen(model.left);
    const [rightX, rightY] = toScreen(model.right);
    const apexScreen = model.apex ? toScreen(model.apex) : null;

    const angleAt = (
        vertex: [number, number],
        towardsA: [number, number],
        towardsB: [number, number],
        label: string,
        colour: string,
    ) => {
        const angle1 = Math.atan2(-(towardsA[1] - vertex[1]), towardsA[0] - vertex[0]);
        const angle2 = Math.atan2(-(towardsB[1] - vertex[1]), towardsB[0] - vertex[0]);
        const radius = 34;
        const start = [
            vertex[0] + radius * Math.cos(angle1),
            vertex[1] - radius * Math.sin(angle1),
        ];
        const end = [vertex[0] + radius * Math.cos(angle2), vertex[1] - radius * Math.sin(angle2)];
        const mid = (angle1 + angle2) / 2;
        return (
            <g>
                <path
                    d={`M ${start[0]} ${start[1]} A ${radius} ${radius} 0 0 ${
                        angle2 > angle1 ? 0 : 1
                    } ${end[0]} ${end[1]}`}
                    fill="none"
                    stroke={colour}
                    strokeWidth={2}
                />
                <text
                    x={vertex[0] + (radius + 22) * Math.cos(mid)}
                    y={vertex[1] - (radius + 22) * Math.sin(mid) + 5}
                    textAnchor="middle"
                    fontSize={13}
                    fontWeight={600}
                    fill={colour}
                >
                    {label}
                </text>
            </g>
        );
    };

    const arcTowards = (
        centre: [number, number],
        target: [number, number],
        radiusPx: number,
        spread = 26,
    ) => {
        const direction = (Math.atan2(-(target[1] - centre[1]), target[0] - centre[0]) * 180) / Math.PI;
        const from = (direction - spread) * DEGREES;
        const to = (direction + spread) * DEGREES;
        return `M ${centre[0] + radiusPx * Math.cos(from)} ${
            centre[1] - radiusPx * Math.sin(from)
        } A ${radiusPx} ${radiusPx} 0 0 0 ${centre[0] + radiusPx * Math.cos(to)} ${
            centre[1] - radiusPx * Math.sin(to)
        }`;
    };

    const chooseCase = (value: string) => {
        setVar("triangleCase", value);
        setStepIndex(0);
    };

    const rayEnd = (from: [number, number], towards: [number, number], factor = 1.18) => [
        from[0] + (towards[0] - from[0]) * factor,
        from[1] + (towards[1] - from[1]) * factor,
    ];

    return (
        <div className="w-full">
            <div className="mb-3 flex flex-wrap gap-2">
                {CASES.map((value) => (
                    <Button
                        key={value}
                        size="sm"
                        variant={activeCase === value ? "default" : "outline"}
                        onClick={() => chooseCase(value)}
                    >
                        {CASE_LABELS[value]}
                    </Button>
                ))}
            </div>

            <svg
                width="100%"
                viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                role="img"
                aria-label="A triangle constructed stage by stage from its given measurements"
                className="max-w-full"
            >
                <defs>
                    <clipPath id="triangle-plot-area">
                        <rect x={0} y={0} width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} rx={10} />
                    </clipPath>
                </defs>
                <rect x={0} y={0} width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} rx={10} fill="#f8fafc" />

                {/* arcs that fall short of each other, so no apex ever appears */}
                {activeCase === "Three sides" && !model.apex && (
                    <g clipPath="url(#triangle-plot-area)">
                        {show(1) && (
                            <path
                                d={`M ${leftX + sideAC * scale} ${leftY} A ${sideAC * scale} ${sideAC * scale} 0 0 0 ${leftX - sideAC * scale} ${leftY}`}
                                fill="none"
                                stroke="#7c3aed"
                                strokeWidth={2}
                                strokeDasharray="6 5"
                            />
                        )}
                        {show(2) && (
                            <path
                                d={`M ${rightX + sideBC * scale} ${rightY} A ${sideBC * scale} ${sideBC * scale} 0 0 0 ${rightX - sideBC * scale} ${rightY}`}
                                fill="none"
                                stroke="#0891b2"
                                strokeWidth={2}
                                strokeDasharray="6 5"
                            />
                        )}
                    </g>
                )}

                {/* the base, always the first stage */}
                <line x1={leftX} y1={leftY} x2={rightX} y2={rightY} stroke="#334155" strokeWidth={3.5} />
                <circle cx={leftX} cy={leftY} r={5} fill="#334155" />
                <circle cx={rightX} cy={rightY} r={5} fill="#334155" />
                <text x={leftX - 16} y={leftY + 26} fontSize={15} fill="#334155">
                    {model.leftLabel}
                </text>
                <text x={rightX + 8} y={rightY + 26} fontSize={15} fill="#334155">
                    {model.rightLabel}
                </text>
                <text
                    x={(leftX + rightX) / 2}
                    y={leftY + 30}
                    textAnchor="middle"
                    fontSize={13}
                    fill="#475569"
                >
                    {model.baseLabel}
                </text>

                {model.problem && (
                    <text x={VIEWBOX_WIDTH / 2} y={90} textAnchor="middle" fontSize={15} fill="#b91c1c">
                        No triangle can be built from these measurements
                    </text>
                )}

                {/* ---- three sides ---- */}
                {activeCase === "Three sides" && apexScreen && (
                    <g>
                        {show(1) && (
                            <path
                                d={arcTowards([leftX, leftY], apexScreen, sideAC * scale)}
                                fill="none"
                                stroke="#7c3aed"
                                strokeWidth={2}
                                strokeDasharray="6 5"
                            />
                        )}
                        {show(2) && (
                            <path
                                d={arcTowards([rightX, rightY], apexScreen, sideBC * scale)}
                                fill="none"
                                stroke="#0891b2"
                                strokeWidth={2}
                                strokeDasharray="6 5"
                            />
                        )}
                    </g>
                )}

                {/* ---- two sides and the included angle ---- */}
                {activeCase === "Two sides and the included angle" && apexScreen && (
                    <g>
                        {show(1) && (
                            <g>
                                <line
                                    x1={leftX}
                                    y1={leftY}
                                    x2={rayEnd([leftX, leftY], apexScreen, 1.35)[0]}
                                    y2={rayEnd([leftX, leftY], apexScreen, 1.35)[1]}
                                    stroke="#7c3aed"
                                    strokeWidth={2}
                                />
                                {angleAt([leftX, leftY], [rightX, rightY], apexScreen, `${sasAngle}`, "#7c3aed")}
                            </g>
                        )}
                        {show(2) && (
                            <path
                                d={arcTowards([leftX, leftY], apexScreen, sasSide * scale, 20)}
                                fill="none"
                                stroke="#0891b2"
                                strokeWidth={2}
                                strokeDasharray="6 5"
                            />
                        )}
                    </g>
                )}

                {/* ---- one side and two angles ---- */}
                {activeCase === "One side and two angles" && apexScreen && (
                    <g>
                        {show(1) && (
                            <g>
                                <line
                                    x1={leftX}
                                    y1={leftY}
                                    x2={rayEnd([leftX, leftY], apexScreen, 1.3)[0]}
                                    y2={rayEnd([leftX, leftY], apexScreen, 1.3)[1]}
                                    stroke="#7c3aed"
                                    strokeWidth={2}
                                />
                                {angleAt([leftX, leftY], [rightX, rightY], apexScreen, `${asaAngleB}`, "#7c3aed")}
                            </g>
                        )}
                        {show(2) && (
                            <g>
                                <line
                                    x1={rightX}
                                    y1={rightY}
                                    x2={rayEnd([rightX, rightY], apexScreen, 1.3)[0]}
                                    y2={rayEnd([rightX, rightY], apexScreen, 1.3)[1]}
                                    stroke="#0891b2"
                                    strokeWidth={2}
                                />
                                {angleAt([rightX, rightY], apexScreen, [leftX, leftY], `${asaAngleC}`, "#0891b2")}
                            </g>
                        )}
                    </g>
                )}

                {/* the finished triangle */}
                {show(3) && apexScreen && (
                    <g>
                        <line
                            x1={leftX}
                            y1={leftY}
                            x2={apexScreen[0]}
                            y2={apexScreen[1]}
                            stroke="#dc2626"
                            strokeWidth={3}
                        />
                        <line
                            x1={rightX}
                            y1={rightY}
                            x2={apexScreen[0]}
                            y2={apexScreen[1]}
                            stroke="#dc2626"
                            strokeWidth={3}
                        />
                    </g>
                )}

                {apexScreen && show(activeCase === "One side and two angles" ? 3 : 2) && (
                    <g>
                        <circle cx={apexScreen[0]} cy={apexScreen[1]} r={5.5} fill="#dc2626" />
                        <text x={apexScreen[0] - 6} y={apexScreen[1] - 14} fontSize={15} fill="#dc2626">
                            {model.apexLabel}
                        </text>
                    </g>
                )}
            </svg>

            <div className="mt-3 rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <span className="mr-2 font-semibold text-slate-900">
                    Step {safeStep + 1} of {model.steps.length}
                </span>
                {model.steps[safeStep]}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={safeStep === 0}
                    onClick={() => setStepIndex((previous) => Math.max(previous - 1, 0))}
                >
                    Back
                </Button>
                <Button
                    size="sm"
                    disabled={safeStep === model.steps.length - 1}
                    onClick={() =>
                        setStepIndex((previous) => Math.min(previous + 1, model.steps.length - 1))
                    }
                >
                    Next stage
                </Button>
                <Button variant="outline" size="sm" onClick={() => setStepIndex(0)}>
                    Start again
                </Button>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
                {activeCase === "Three sides" && (
                    <>
                        <SliderControl label="AB" unit="cm" value={sideAB} min={5} max={10} step={0.5} onChange={(value) => setVar("sideLengthAB", value)} />
                        <SliderControl label="AC" unit="cm" value={sideAC} min={3} max={9} step={0.5} onChange={(value) => setVar("sideLengthAC", value)} />
                        <SliderControl label="BC" unit="cm" value={sideBC} min={3} max={9} step={0.5} onChange={(value) => setVar("sideLengthBC", value)} />
                    </>
                )}
                {activeCase === "Two sides and the included angle" && (
                    <>
                        <SliderControl label="AB" unit="cm" value={sasBase} min={4} max={9} step={0.5} onChange={(value) => setVar("includedAngleBaseAB", value)} />
                        <SliderControl label="Angle A" unit="degrees" value={sasAngle} min={20} max={140} step={5} onChange={(value) => setVar("includedAngleAtA", value)} />
                        <SliderControl label="AC" unit="cm" value={sasSide} min={3} max={8} step={0.5} onChange={(value) => setVar("includedAngleSideAC", value)} />
                    </>
                )}
                {activeCase === "One side and two angles" && (
                    <>
                        <SliderControl label="BC" unit="cm" value={asaBase} min={5} max={10} step={0.5} onChange={(value) => setVar("twoAnglesBaseBC", value)} />
                        <SliderControl label="Angle B" unit="degrees" value={asaAngleB} min={20} max={120} step={5} onChange={(value) => setVar("twoAnglesAtB", value)} />
                        <SliderControl label="Angle C" unit="degrees" value={asaAngleC} min={20} max={120} step={5} onChange={(value) => setVar("twoAnglesAtC", value)} />
                    </>
                )}
            </div>

            {model.problem && (
                <div className="mt-3 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-900">
                    {model.problem}
                </div>
            )}
        </div>
    );
};

interface SliderControlProps {
    label: string;
    unit: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}

const SliderControl = ({ label, unit, value, min, max, step, onChange }: SliderControlProps) => (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
        <div className="mb-1 flex items-baseline justify-between text-sm font-medium text-slate-700">
            <span>{label}</span>
            <span className="font-mono text-slate-900">
                {value} {unit}
            </span>
        </div>
        <Slider min={min} max={max} step={step} value={[value]} onValueChange={([next]) => onChange(next)} />
    </div>
);
