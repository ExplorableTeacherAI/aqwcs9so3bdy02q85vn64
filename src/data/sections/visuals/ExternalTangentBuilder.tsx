import { useState } from "react";
import { Button, Slider } from "@/components/atoms";
import { useSetVar, useVar } from "@/stores";

const CENTRE_X = 240;
const CENTRE_Y = 240;
const PIXELS_PER_CM = 22;
const RADIUS_CM = 5;
const RADIUS = RADIUS_CM * PIXELS_PER_CM;

const STEPS = [
    "The circle has centre O, and P is a point outside it. Nothing has been constructed yet.",
    "Join O to P with the straightedge.",
    "Construct the perpendicular bisector of OP (Construction 1) and letter its midpoint M.",
    "With the compass point on M and radius MO, draw a full circle. It passes through P as well.",
    "Letter the two points where this helper circle cuts the original circle as A and B.",
    "Join P to A and P to B. Both lines touch the circle once and meet the radius there at a right angle.",
];

export const ExternalTangentBuilder = () => {
    const distanceCm = useVar("tangentPointDistance", 11) as number;
    const setVar = useSetVar();
    const [stepIndex, setStepIndex] = useState(0);

    const distance = distanceCm * PIXELS_PER_CM;
    const pointPx = CENTRE_X + distance;
    const midX = CENTRE_X + distance / 2;
    const helperRadius = distance / 2;

    const alpha = Math.acos(RADIUS_CM / distanceCm);
    const touchAx = CENTRE_X + RADIUS * Math.cos(alpha);
    const touchAy = CENTRE_Y - RADIUS * Math.sin(alpha);
    const touchBx = touchAx;
    const touchBy = CENTRE_Y + RADIUS * Math.sin(alpha);
    const tangentLengthCm = Math.sqrt(distanceCm * distanceCm - RADIUS_CM * RADIUS_CM);

    const bisectorRadius = distance * 0.62;
    const bisectorHalfHeight = Math.sqrt(
        bisectorRadius * bisectorRadius - helperRadius * helperRadius,
    );

    const finished = stepIndex === STEPS.length - 1;
    const show = (from: number) => stepIndex >= from;

    const crossingAngle = (Math.acos(helperRadius / bisectorRadius) * 180) / Math.PI;

    /** The pair of construction arcs for the perpendicular bisector of OP. */
    const bisectorArc = (centreX: number, facing: number) => {
        const from = facing - crossingAngle - 10;
        const to = facing + crossingAngle + 10;
        const toRadians = Math.PI / 180;
        const sx = centreX + bisectorRadius * Math.cos(from * toRadians);
        const sy = CENTRE_Y - bisectorRadius * Math.sin(from * toRadians);
        const ex = centreX + bisectorRadius * Math.cos(to * toRadians);
        const ey = CENTRE_Y - bisectorRadius * Math.sin(to * toRadians);
        return `M ${sx} ${sy} A ${bisectorRadius} ${bisectorRadius} 0 0 0 ${ex} ${ey}`;
    };

    const rightAngleMark = (ax: number, ay: number) => {
        const toO = [CENTRE_X - ax, CENTRE_Y - ay];
        const toP = [pointPx - ax, CENTRE_Y - ay];
        const lengthO = Math.hypot(toO[0], toO[1]);
        const lengthP = Math.hypot(toP[0], toP[1]);
        const unitO = [(toO[0] / lengthO) * 15, (toO[1] / lengthO) * 15];
        const unitP = [(toP[0] / lengthP) * 15, (toP[1] / lengthP) * 15];
        return `M ${ax + unitO[0]} ${ay + unitO[1]} L ${ax + unitO[0] + unitP[0]} ${
            ay + unitO[1] + unitP[1]
        } L ${ax + unitP[0]} ${ay + unitP[1]}`;
    };

    return (
        <div className="w-full">
            <svg
                width="100%"
                viewBox="0 0 700 500"
                role="img"
                aria-label="The two tangents from an external point constructed stage by stage"
                className="max-w-full"
            >
                <rect x={0} y={0} width={700} height={500} rx={10} fill="#f8fafc" />

                {show(3) && (
                    <circle
                        cx={midX}
                        cy={CENTRE_Y}
                        r={helperRadius}
                        fill="none"
                        stroke="#0891b2"
                        strokeWidth={2}
                        strokeDasharray="7 5"
                    />
                )}

                {show(2) && (
                    <g>
                        <path
                            d={bisectorArc(CENTRE_X, 0)}
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth={1.6}
                            strokeDasharray="5 4"
                        />
                        <path
                            d={bisectorArc(pointPx, 180)}
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth={1.6}
                            strokeDasharray="5 4"
                        />
                        <line
                            x1={midX}
                            y1={CENTRE_Y - bisectorHalfHeight - 18}
                            x2={midX}
                            y2={CENTRE_Y + bisectorHalfHeight + 18}
                            stroke="#a855f7"
                            strokeWidth={2}
                        />
                        <circle cx={midX} cy={CENTRE_Y} r={5} fill="#a855f7" />
                        <text x={midX - 5} y={CENTRE_Y + 26} fontSize={14} fill="#a855f7">
                            M
                        </text>
                    </g>
                )}

                <circle
                    cx={CENTRE_X}
                    cy={CENTRE_Y}
                    r={RADIUS}
                    fill="none"
                    stroke="#334155"
                    strokeWidth={3}
                />
                <circle cx={CENTRE_X} cy={CENTRE_Y} r={5} fill="#334155" />
                <text x={CENTRE_X - 20} y={CENTRE_Y + 6} fontSize={15} fill="#334155">
                    O
                </text>

                {show(1) && (
                    <line
                        x1={CENTRE_X}
                        y1={CENTRE_Y}
                        x2={pointPx}
                        y2={CENTRE_Y}
                        stroke="#334155"
                        strokeWidth={2.5}
                    />
                )}

                <circle cx={pointPx} cy={CENTRE_Y} r={5} fill="#dc2626" />
                <text x={pointPx + 10} y={CENTRE_Y + 22} fontSize={15} fill="#dc2626">
                    P
                </text>

                {show(4) && (
                    <g>
                        <circle cx={touchAx} cy={touchAy} r={5.5} fill="#0f766e" />
                        <circle cx={touchBx} cy={touchBy} r={5.5} fill="#0f766e" />
                        <text x={touchAx - 6} y={touchAy - 12} fontSize={15} fill="#0f766e">
                            A
                        </text>
                        <text x={touchBx - 6} y={touchBy + 24} fontSize={15} fill="#0f766e">
                            B
                        </text>
                    </g>
                )}

                {show(5) && (
                    <g>
                        <line
                            x1={CENTRE_X}
                            y1={CENTRE_Y}
                            x2={touchAx}
                            y2={touchAy}
                            stroke="#94a3b8"
                            strokeWidth={2}
                        />
                        <line
                            x1={CENTRE_X}
                            y1={CENTRE_Y}
                            x2={touchBx}
                            y2={touchBy}
                            stroke="#94a3b8"
                            strokeWidth={2}
                        />
                        <line
                            x1={pointPx}
                            y1={CENTRE_Y}
                            x2={touchAx}
                            y2={touchAy}
                            stroke="#dc2626"
                            strokeWidth={3}
                        />
                        <line
                            x1={pointPx}
                            y1={CENTRE_Y}
                            x2={touchBx}
                            y2={touchBy}
                            stroke="#dc2626"
                            strokeWidth={3}
                        />
                        <path
                            d={rightAngleMark(touchAx, touchAy)}
                            fill="none"
                            stroke="#0f766e"
                            strokeWidth={2}
                        />
                        <path
                            d={rightAngleMark(touchBx, touchBy)}
                            fill="none"
                            stroke="#0f766e"
                            strokeWidth={2}
                        />
                    </g>
                )}
            </svg>

            <div className="mt-3 rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <span className="mr-2 font-semibold text-slate-900">
                    Step {stepIndex + 1} of {STEPS.length}
                </span>
                {STEPS[stepIndex]}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={stepIndex === 0}
                    onClick={() => setStepIndex((previous) => Math.max(previous - 1, 0))}
                >
                    Back
                </Button>
                <Button
                    size="sm"
                    disabled={finished}
                    onClick={() => setStepIndex((previous) => Math.min(previous + 1, STEPS.length - 1))}
                >
                    Next stage
                </Button>
                <Button variant="outline" size="sm" onClick={() => setStepIndex(0)}>
                    Start again
                </Button>
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-1 flex items-baseline justify-between text-sm font-medium text-slate-700">
                    <span>Move P further from the centre (the circle stays 5 cm)</span>
                    <span className="font-mono text-slate-900">OP = {distanceCm.toFixed(1)} cm</span>
                </div>
                <Slider
                    min={6.5}
                    max={17}
                    step={0.1}
                    value={[distanceCm]}
                    onValueChange={([value]) => setVar("tangentPointDistance", value)}
                />
            </div>

            {show(4) && (
                <div className="mt-3 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-900">
                    With P at {distanceCm.toFixed(1)} cm from O, the two touch points sit where
                    the helper circle cuts the original, and each tangent is{" "}
                    {tangentLengthCm.toFixed(1)} cm long. Move P and the touch points slide round
                    the circle, but the two tangents stay equal to each other every time.
                </div>
            )}
        </div>
    );
};
