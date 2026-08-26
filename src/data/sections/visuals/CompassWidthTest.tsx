import { Button, Slider, Switch } from "@/components/atoms";
import { useSetVar, useVar } from "@/stores";

const SEGMENT_CM = 8;
const PIXELS_PER_CM = 22;
const AX = 232;
const AY = 250;
const BX = AX + SEGMENT_CM * PIXELS_PER_CM;

const format = (value: number) => value.toFixed(1);

export const CompassWidthTest = () => {
    const radiusFromA = useVar("compassOpeningFromA", 5) as number;
    const radiusFromB = useVar("compassOpeningFromB", 5) as number;
    const locked = useVar("compassWidthsLocked", true) as boolean;
    const setVar = useSetVar();

    const setA = (value: number) => {
        setVar("compassOpeningFromA", value);
        if (locked) setVar("compassOpeningFromB", value);
    };
    const setB = (value: number) => {
        setVar("compassOpeningFromB", value);
        if (locked) setVar("compassOpeningFromA", value);
    };

    const arcsMeet = radiusFromA + radiusFromB > SEGMENT_CM;
    const equalWidths = Math.abs(radiusFromA - radiusFromB) < 0.05;

    // Distance from A, along AB, to the point where the two arcs cross.
    const footFromA =
        (radiusFromA * radiusFromA - radiusFromB * radiusFromB + SEGMENT_CM * SEGMENT_CM) /
        (2 * SEGMENT_CM);
    const halfChordSquared = radiusFromA * radiusFromA - footFromA * footFromA;
    const halfChord = halfChordSquared > 0 ? Math.sqrt(halfChordSquared) : 0;

    const footX = AX + footFromA * PIXELS_PER_CM;
    const chordPixels = halfChord * PIXELS_PER_CM;
    const radiusAPixels = radiusFromA * PIXELS_PER_CM;
    const radiusBPixels = radiusFromB * PIXELS_PER_CM;
    const midpointX = AX + (SEGMENT_CM / 2) * PIXELS_PER_CM;

    const status = !arcsMeet
        ? {
              tone: "border-red-300 bg-red-50 text-red-900",
              title: "The arcs never meet",
              body: `An opening of ${format(radiusFromA)} cm from A and ${format(
                  radiusFromB,
              )} cm from B add up to ${format(
                  radiusFromA + radiusFromB,
              )} cm, which is less than the ${SEGMENT_CM} cm between the ends. There is no crossing point, so nothing can be marked and no line can be drawn.`,
          }
        : equalWidths
          ? {
                tone: "border-emerald-300 bg-emerald-50 text-emerald-900",
                title: "This is the perpendicular bisector",
                body: `Both openings are ${format(
                    radiusFromA,
                )} cm, more than half of AB, so P and Q are each the same distance from A as from B. PQ crosses AB at right angles exactly at the midpoint, 4.0 cm from A.`,
            }
          : {
                tone: "border-amber-300 bg-amber-50 text-amber-900",
                title: "Right angle, wrong place",
                body: `The openings differ, so PQ still meets AB at a right angle but it crosses at ${format(
                    footFromA,
                )} cm from A instead of at the midpoint, 4.0 cm from A. The line looks convincing and is not the bisector.`,
            };

    return (
        <div className="w-full">
            <svg
                width="100%"
                viewBox="0 0 640 480"
                role="img"
                aria-label="A perpendicular bisector attempted with different compass openings"
                className="max-w-full"
            >
                <rect x={0} y={0} width={640} height={480} rx={10} fill="#f8fafc" />

                {/* arcs swung from A (right-hand half) and from B (left-hand half) */}
                <path
                    d={`M ${AX} ${AY - radiusAPixels} A ${radiusAPixels} ${radiusAPixels} 0 0 1 ${AX} ${AY + radiusAPixels}`}
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    strokeDasharray="6 5"
                />
                <path
                    d={`M ${BX} ${AY - radiusBPixels} A ${radiusBPixels} ${radiusBPixels} 0 0 0 ${BX} ${AY + radiusBPixels}`}
                    fill="none"
                    stroke="#0891b2"
                    strokeWidth={2}
                    strokeDasharray="6 5"
                />

                {/* the segment AB */}
                <line x1={AX} y1={AY} x2={BX} y2={AY} stroke="#334155" strokeWidth={3.5} />
                <circle cx={AX} cy={AY} r={5} fill="#334155" />
                <circle cx={BX} cy={AY} r={5} fill="#334155" />
                <text x={AX - 14} y={AY + 26} fontSize={15} fill="#334155">
                    A
                </text>
                <text x={BX + 6} y={AY + 26} fontSize={15} fill="#334155">
                    B
                </text>

                {/* the true midpoint, always shown for comparison */}
                <line
                    x1={midpointX}
                    y1={AY - 12}
                    x2={midpointX}
                    y2={AY + 12}
                    stroke="#0f766e"
                    strokeWidth={2}
                    strokeDasharray="3 3"
                />
                <text x={midpointX - 6} y={AY + 40} fontSize={13} fill="#0f766e">
                    M
                </text>

                {arcsMeet && (
                    <g>
                        <line
                            x1={footX}
                            y1={AY - chordPixels - 34}
                            x2={footX}
                            y2={AY + chordPixels + 34}
                            stroke="#dc2626"
                            strokeWidth={2.5}
                        />
                        <path
                            d={`M ${footX} ${AY - 16} L ${footX + 16} ${AY - 16} L ${footX + 16} ${AY}`}
                            fill="none"
                            stroke="#dc2626"
                            strokeWidth={1.8}
                        />
                        <circle cx={footX} cy={AY - chordPixels} r={5} fill="#dc2626" />
                        <circle cx={footX} cy={AY + chordPixels} r={5} fill="#dc2626" />
                        <text x={footX + 10} y={AY - chordPixels - 8} fontSize={14} fill="#dc2626">
                            P
                        </text>
                        <text x={footX + 10} y={AY + chordPixels + 20} fontSize={14} fill="#dc2626">
                            Q
                        </text>
                        {!equalWidths && (
                            <text
                                x={footX}
                                y={AY + chordPixels + 56}
                                textAnchor="middle"
                                fontSize={13}
                                fill="#b45309"
                            >
                                crosses {format(footFromA)} cm from A, not 4.0 cm
                            </text>
                        )}
                    </g>
                )}

                {!arcsMeet && (
                    <text x={320} y={110} textAnchor="middle" fontSize={15} fill="#b91c1c">
                        No crossing point — the two arcs fall short of each other
                    </text>
                )}
            </svg>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="mb-1 flex items-baseline justify-between text-sm font-medium text-slate-700">
                        <span>Opening used from A</span>
                        <span className="font-mono text-violet-700">{format(radiusFromA)} cm</span>
                    </div>
                    <Slider
                        min={2}
                        max={7}
                        step={0.1}
                        value={[radiusFromA]}
                        onValueChange={([value]) => setA(value)}
                    />
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="mb-1 flex items-baseline justify-between text-sm font-medium text-slate-700">
                        <span>Opening used from B</span>
                        <span className="font-mono text-cyan-700">{format(radiusFromB)} cm</span>
                    </div>
                    <Slider
                        min={2}
                        max={7}
                        step={0.1}
                        value={[radiusFromB]}
                        onValueChange={([value]) => setB(value)}
                    />
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                    <Switch
                        checked={locked}
                        onCheckedChange={(checked) => {
                            setVar("compassWidthsLocked", checked);
                            if (checked) setVar("compassOpeningFromB", radiusFromA);
                        }}
                    />
                    Hinge held tight (both openings equal)
                </label>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        setVar("compassOpeningFromA", 5);
                        setVar("compassOpeningFromB", 5);
                        setVar("compassWidthsLocked", true);
                    }}
                >
                    Reset
                </Button>
            </div>

            <div className={`mt-3 rounded-md border p-3 text-sm ${status.tone}`}>
                <div className="mb-1 font-semibold">{status.title}</div>
                <div>{status.body}</div>
            </div>
        </div>
    );
};
