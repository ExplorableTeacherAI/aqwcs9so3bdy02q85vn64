import { Button, Slider, Switch } from "@/components/atoms";
import { useSetVar, useVar } from "@/stores";

const VERTEX_X = 320;
const VERTEX_Y = 385;
const ARM_LENGTH = 300;
const ARC_RADIUS = 130;
const DEGREES = Math.PI / 180;

const polar = (radius: number, degrees: number): [number, number] => [
    VERTEX_X + radius * Math.cos(degrees * DEGREES),
    VERTEX_Y - radius * Math.sin(degrees * DEGREES),
];

/** Arc drawn anticlockwise on screen, from startDegrees to endDegrees. */
const arcPath = (
    centreX: number,
    centreY: number,
    radius: number,
    startDegrees: number,
    endDegrees: number,
) => {
    const start = [
        centreX + radius * Math.cos(startDegrees * DEGREES),
        centreY - radius * Math.sin(startDegrees * DEGREES),
    ];
    const end = [
        centreX + radius * Math.cos(endDegrees * DEGREES),
        centreY - radius * Math.sin(endDegrees * DEGREES),
    ];
    const largeArc = Math.abs(endDegrees - startDegrees) > 180 ? 1 : 0;
    return `M ${start[0]} ${start[1]} A ${radius} ${radius} 0 ${largeArc} 0 ${end[0]} ${end[1]}`;
};

export const AdjustableAngleBisector = () => {
    const angle = useVar("angleToBisect", 74) as number;
    const showRhombus = useVar("showBisectorRhombus", false) as boolean;
    const setVar = useSetVar();

    const half = angle / 2;
    const leftArmDegrees = 90 + half;
    const rightArmDegrees = 90 - half;

    const [leftArmX, leftArmY] = polar(ARM_LENGTH, leftArmDegrees);
    const [rightArmX, rightArmY] = polar(ARM_LENGTH, rightArmDegrees);
    const [pointPx, pointPy] = polar(ARC_RADIUS, leftArmDegrees);
    const [pointQx, pointQy] = polar(ARC_RADIUS, rightArmDegrees);

    // R = P + Q - B, so BPRQ has four equal sides and BR runs straight up.
    const pointRx = pointPx + pointQx - VERTEX_X;
    const pointRy = pointPy + pointQy - VERTEX_Y;
    const bisectorLength = VERTEX_Y - pointRy;

    const directionFromP =
        (Math.atan2(-(pointRy - pointPy), pointRx - pointPx) * 180) / Math.PI;
    const directionFromQ =
        (Math.atan2(-(pointRy - pointQy), pointRx - pointQx) * 180) / Math.PI;

    const [leftLabelX, leftLabelY] = polar(86, 90 + half / 2);
    const [rightLabelX, rightLabelY] = polar(86, 90 - half / 2);

    const describe =
        angle < 90
            ? "a sharp angle"
            : angle === 90
              ? "a right angle"
              : "an obtuse angle";

    return (
        <div className="w-full">
            <svg
                width="100%"
                viewBox="0 0 640 440"
                role="img"
                aria-label="An angle with a movable arm and its constructed bisector"
                className="max-w-full"
            >
                <rect x={0} y={0} width={640} height={440} rx={10} fill="#f8fafc" />

                {showRhombus && (
                    <polygon
                        points={`${VERTEX_X},${VERTEX_Y} ${pointPx},${pointPy} ${pointRx},${pointRy} ${pointQx},${pointQy}`}
                        fill="#c7d2fe"
                        fillOpacity={0.45}
                        stroke="#4f46e5"
                        strokeWidth={2}
                    />
                )}

                {/* the two arms */}
                <line
                    x1={VERTEX_X}
                    y1={VERTEX_Y}
                    x2={leftArmX}
                    y2={leftArmY}
                    stroke="#334155"
                    strokeWidth={3}
                />
                <line
                    x1={VERTEX_X}
                    y1={VERTEX_Y}
                    x2={rightArmX}
                    y2={rightArmY}
                    stroke="#334155"
                    strokeWidth={3}
                />

                {/* Step 1 arc, cutting both arms */}
                <path
                    d={arcPath(VERTEX_X, VERTEX_Y, ARC_RADIUS, rightArmDegrees - 8, leftArmDegrees + 8)}
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    strokeDasharray="6 5"
                />

                {/* Steps 2 and 3 arcs, crossing at R */}
                <path
                    d={arcPath(pointPx, pointPy, ARC_RADIUS, directionFromP - 22, directionFromP + 22)}
                    fill="none"
                    stroke="#0891b2"
                    strokeWidth={2}
                    strokeDasharray="6 5"
                />
                <path
                    d={arcPath(pointQx, pointQy, ARC_RADIUS, directionFromQ - 22, directionFromQ + 22)}
                    fill="none"
                    stroke="#0891b2"
                    strokeWidth={2}
                    strokeDasharray="6 5"
                />

                {/* the bisector */}
                <line
                    x1={VERTEX_X}
                    y1={VERTEX_Y}
                    x2={VERTEX_X}
                    y2={VERTEX_Y - Math.max(bisectorLength + 60, 120)}
                    stroke="#dc2626"
                    strokeWidth={3}
                />

                {/* the two equal halves */}
                <path
                    d={arcPath(VERTEX_X, VERTEX_Y, 66, 90, leftArmDegrees)}
                    fill="none"
                    stroke="#0f766e"
                    strokeWidth={2.2}
                />
                <path
                    d={arcPath(VERTEX_X, VERTEX_Y, 66, rightArmDegrees, 90)}
                    fill="none"
                    stroke="#0f766e"
                    strokeWidth={2.2}
                />
                <text
                    x={leftLabelX}
                    y={leftLabelY}
                    textAnchor="middle"
                    fontSize={14}
                    fontWeight={600}
                    fill="#0f766e"
                >
                    {half.toFixed(1)}
                </text>
                <text
                    x={rightLabelX}
                    y={rightLabelY}
                    textAnchor="middle"
                    fontSize={14}
                    fontWeight={600}
                    fill="#0f766e"
                >
                    {half.toFixed(1)}
                </text>

                {/* lettering */}
                <circle cx={VERTEX_X} cy={VERTEX_Y} r={5} fill="#334155" />
                <text x={VERTEX_X - 6} y={VERTEX_Y + 26} fontSize={15} fill="#334155">
                    B
                </text>
                <circle cx={pointPx} cy={pointPy} r={5} fill="#7c3aed" />
                <text x={pointPx - 22} y={pointPy + 4} fontSize={15} fill="#7c3aed">
                    P
                </text>
                <circle cx={pointQx} cy={pointQy} r={5} fill="#7c3aed" />
                <text x={pointQx + 12} y={pointQy + 4} fontSize={15} fill="#7c3aed">
                    Q
                </text>
                <circle cx={pointRx} cy={pointRy} r={5} fill="#dc2626" />
                <text x={pointRx + 12} y={pointRy - 6} fontSize={15} fill="#dc2626">
                    R
                </text>
                <text x={leftArmX < 40 ? 42 : leftArmX} y={leftArmY - 12} textAnchor="middle" fontSize={15} fill="#334155">
                    A
                </text>
                <text x={rightArmX > 600 ? 598 : rightArmX} y={rightArmY - 12} textAnchor="middle" fontSize={15} fill="#334155">
                    C
                </text>
            </svg>

            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-1 flex items-baseline justify-between text-sm font-medium text-slate-700">
                    <span>Swing the arms apart</span>
                    <span className="font-mono text-slate-900">{angle} degrees</span>
                </div>
                <Slider
                    min={20}
                    max={150}
                    step={1}
                    value={[angle]}
                    onValueChange={([value]) => setVar("angleToBisect", value)}
                />
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                    <Switch
                        checked={showRhombus}
                        onCheckedChange={(checked) => setVar("showBisectorRhombus", checked)}
                    />
                    Shade the rhombus BPRQ
                </label>
                <Button variant="outline" size="sm" onClick={() => setVar("angleToBisect", 74)}>
                    Reset
                </Button>
            </div>

            <div className="mt-3 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-900">
                The arms are {angle} degrees apart — {describe}. The same four arcs split it
                into {half.toFixed(1)} and {half.toFixed(1)}, and the two halves stay equal
                wherever you put the arms. Nothing here was measured.
            </div>
        </div>
    );
};
