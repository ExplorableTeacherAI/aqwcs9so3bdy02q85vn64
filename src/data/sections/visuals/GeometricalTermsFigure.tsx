import { useState } from "react";
import { Button } from "@/components/atoms";

type PartKey =
    | "segment"
    | "perpendicularBisector"
    | "rightAngleMark"
    | "midpoint"
    | "equalLengthTicks"
    | "rayVD"
    | "armVE"
    | "angleBisector"
    | "equalAngleArcs"
    | "lineOne"
    | "lineTwo"
    | "parallelMarks";

interface TermDefinition {
    id: string;
    label: string;
    parts: PartKey[];
    reading: string;
}

const TERMS: TermDefinition[] = [
    {
        id: "line",
        label: "Line",
        parts: ["lineOne"],
        reading: "A line has arrowheads at both ends: it carries on for ever in both directions.",
    },
    {
        id: "line-segment",
        label: "Line segment",
        parts: ["segment"],
        reading: "A line segment stops at two endpoints, A and B, so it has a definite length.",
    },
    {
        id: "ray",
        label: "Ray",
        parts: ["rayVD"],
        reading: "A ray starts at V and goes on for ever one way. The arms of an angle are rays.",
    },
    {
        id: "midpoint",
        label: "Midpoint",
        parts: ["segment", "midpoint", "equalLengthTicks"],
        reading: "M is the midpoint of AB: the single tick on each half means AM and MB are equal.",
    },
    {
        id: "perpendicular-lines",
        label: "Perpendicular lines",
        parts: ["segment", "perpendicularBisector", "rightAngleMark"],
        reading: "Perpendicular lines meet at a right angle, shown by the small square at M.",
    },
    {
        id: "parallel-lines",
        label: "Parallel lines",
        parts: ["lineOne", "lineTwo", "parallelMarks"],
        reading: "The matching arrowheads mark the two lines as parallel: they never meet, however far they run.",
    },
    {
        id: "bisect",
        label: "Bisect",
        parts: ["midpoint", "equalLengthTicks", "angleBisector", "equalAngleArcs"],
        reading: "To bisect is to cut into two equal parts. A length is cut at M; an angle is cut by VF.",
    },
    {
        id: "angle-bisector",
        label: "Angle bisector",
        parts: ["rayVD", "armVE", "angleBisector", "equalAngleArcs"],
        reading: "VF is the angle bisector: the two marked angles at V are equal.",
    },
    {
        id: "perpendicular-bisector",
        label: "Perpendicular bisector",
        parts: [
            "segment",
            "perpendicularBisector",
            "rightAngleMark",
            "midpoint",
            "equalLengthTicks",
        ],
        reading: "PQ does both jobs at once: it passes through the midpoint M and meets AB at a right angle.",
    },
];

const ACCENT = "#4f46e5";
const NEUTRAL = "#64748b";
const DIM_OPACITY = 0.1;

export const GeometricalTermsFigure = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const active = TERMS.find((term) => term.id === selected) ?? null;

    const isLit = (key: PartKey) => active !== null && active.parts.includes(key);
    const fade = (key: PartKey) => (active === null || isLit(key) ? 1 : DIM_OPACITY);
    const stroke = (key: PartKey, base = NEUTRAL) => (isLit(key) ? ACCENT : base);
    const thick = (key: PartKey, base: number) => (isLit(key) ? base + 1.6 : base);
    const marker = (key: PartKey) => (isLit(key) ? "url(#arrowhead-lit)" : "url(#arrowhead-plain)");

    return (
        <div className="w-full">
            <div className="mb-3 flex flex-wrap gap-2">
                {TERMS.map((term) => (
                    <Button
                        key={term.id}
                        size="sm"
                        variant={selected === term.id ? "default" : "outline"}
                        onClick={() => setSelected(selected === term.id ? null : term.id)}
                    >
                        {term.label}
                    </Button>
                ))}
            </div>

            <svg
                width="100%"
                viewBox="0 0 780 450"
                role="img"
                aria-label="One figure showing all nine geometrical terms"
                className="max-w-full"
            >
                <defs>
                    <marker
                        id="arrowhead-plain"
                        markerWidth="9"
                        markerHeight="9"
                        refX="7"
                        refY="4.5"
                        orient="auto"
                    >
                        <path d="M 0 0 L 9 4.5 L 0 9 z" fill={NEUTRAL} />
                    </marker>
                    <marker
                        id="arrowhead-lit"
                        markerWidth="9"
                        markerHeight="9"
                        refX="7"
                        refY="4.5"
                        orient="auto"
                    >
                        <path d="M 0 0 L 9 4.5 L 0 9 z" fill={ACCENT} />
                    </marker>
                </defs>

                <rect x={0} y={0} width={780} height={450} rx={10} fill="#f8fafc" />

                {/* ---- Segment AB with its perpendicular bisector PQ ---- */}
                <g transform="translate(40, 20)">
                    <g opacity={fade("perpendicularBisector")}>
                        <line
                            x1={150}
                            y1={30}
                            x2={150}
                            y2={210}
                            stroke={stroke("perpendicularBisector")}
                            strokeWidth={thick("perpendicularBisector", 2.5)}
                            markerStart={marker("perpendicularBisector")}
                            markerEnd={marker("perpendicularBisector")}
                        />
                        <text x={160} y={34} fontSize={14} fill={stroke("perpendicularBisector", "#334155")}>
                            P
                        </text>
                        <text x={160} y={216} fontSize={14} fill={stroke("perpendicularBisector", "#334155")}>
                            Q
                        </text>
                    </g>

                    <g opacity={fade("segment")}>
                        <line
                            x1={20}
                            y1={120}
                            x2={280}
                            y2={120}
                            stroke={stroke("segment")}
                            strokeWidth={thick("segment", 3)}
                        />
                        <circle cx={20} cy={120} r={4.5} fill={stroke("segment", "#334155")} />
                        <circle cx={280} cy={120} r={4.5} fill={stroke("segment", "#334155")} />
                        <text x={12} y={144} fontSize={14} fill={stroke("segment", "#334155")}>
                            A
                        </text>
                        <text x={276} y={144} fontSize={14} fill={stroke("segment", "#334155")}>
                            B
                        </text>
                    </g>

                    <g opacity={fade("rightAngleMark")}>
                        <path
                            d="M 150 104 L 166 104 L 166 120"
                            fill="none"
                            stroke={stroke("rightAngleMark", "#94a3b8")}
                            strokeWidth={thick("rightAngleMark", 2)}
                        />
                    </g>

                    <g opacity={fade("equalLengthTicks")}>
                        <line
                            x1={81}
                            y1={112}
                            x2={89}
                            y2={128}
                            stroke={stroke("equalLengthTicks", "#0f766e")}
                            strokeWidth={thick("equalLengthTicks", 2.5)}
                        />
                        <line
                            x1={211}
                            y1={112}
                            x2={219}
                            y2={128}
                            stroke={stroke("equalLengthTicks", "#0f766e")}
                            strokeWidth={thick("equalLengthTicks", 2.5)}
                        />
                    </g>

                    <g opacity={fade("midpoint")}>
                        <circle cx={150} cy={120} r={5.5} fill={stroke("midpoint", "#0f766e")} />
                        <text x={140} y={146} fontSize={14} fill={stroke("midpoint", "#0f766e")}>
                            M
                        </text>
                    </g>
                </g>

                {/* ---- Angle DVE with its bisector VF ---- */}
                <g transform="translate(420, 20)">
                    <g opacity={fade("rayVD")}>
                        <line
                            x1={40}
                            y1={220}
                            x2={172}
                            y2={38}
                            stroke={stroke("rayVD")}
                            strokeWidth={thick("rayVD", 3)}
                            markerEnd={marker("rayVD")}
                        />
                        <text x={178} y={36} fontSize={14} fill={stroke("rayVD", "#334155")}>
                            D
                        </text>
                    </g>

                    <g opacity={fade("armVE")}>
                        <line
                            x1={40}
                            y1={220}
                            x2={300}
                            y2={220}
                            stroke={stroke("armVE")}
                            strokeWidth={thick("armVE", 3)}
                            markerEnd={marker("armVE")}
                        />
                        <text x={306} y={225} fontSize={14} fill={stroke("armVE", "#334155")}>
                            E
                        </text>
                    </g>

                    <g opacity={fade("angleBisector")}>
                        <line
                            x1={40}
                            y1={220}
                            x2={263}
                            y2={106}
                            stroke={stroke("angleBisector", "#b45309")}
                            strokeWidth={thick("angleBisector", 3)}
                            strokeDasharray="8 5"
                            markerEnd={marker("angleBisector")}
                        />
                        <text x={269} y={104} fontSize={14} fill={stroke("angleBisector", "#b45309")}>
                            F
                        </text>
                    </g>

                    <g opacity={fade("equalAngleArcs")}>
                        <path
                            d="M 100 220 A 60 60 0 0 0 93.4 192.7"
                            fill="none"
                            stroke={stroke("equalAngleArcs", "#0f766e")}
                            strokeWidth={thick("equalAngleArcs", 2.2)}
                        />
                        <path
                            d="M 93.4 192.7 A 60 60 0 0 0 75.2 171.4"
                            fill="none"
                            stroke={stroke("equalAngleArcs", "#0f766e")}
                            strokeWidth={thick("equalAngleArcs", 2.2)}
                        />
                        <line
                            x1={94}
                            y1={202}
                            x2={103}
                            y2={210}
                            stroke={stroke("equalAngleArcs", "#0f766e")}
                            strokeWidth={2}
                        />
                        <line
                            x1={81}
                            y1={177}
                            x2={90}
                            y2={185}
                            stroke={stroke("equalAngleArcs", "#0f766e")}
                            strokeWidth={2}
                        />
                    </g>

                    <circle cx={40} cy={220} r={5} fill="#334155" />
                    <text x={20} y={240} fontSize={14} fill="#334155">
                        V
                    </text>
                </g>

                {/* ---- Two parallel lines ---- */}
                <g transform="translate(40, 300)">
                    <g opacity={fade("lineOne")}>
                        <line
                            x1={20}
                            y1={40}
                            x2={670}
                            y2={40}
                            stroke={stroke("lineOne")}
                            strokeWidth={thick("lineOne", 2.5)}
                            markerStart={marker("lineOne")}
                            markerEnd={marker("lineOne")}
                        />
                    </g>
                    <g opacity={fade("lineTwo")}>
                        <line
                            x1={20}
                            y1={110}
                            x2={670}
                            y2={110}
                            stroke={stroke("lineTwo")}
                            strokeWidth={thick("lineTwo", 2.5)}
                            markerStart={marker("lineTwo")}
                            markerEnd={marker("lineTwo")}
                        />
                    </g>
                    <g opacity={fade("parallelMarks")}>
                        <path
                            d="M 330 32 L 342 40 L 330 48"
                            fill="none"
                            stroke={stroke("parallelMarks", "#0f766e")}
                            strokeWidth={thick("parallelMarks", 2.4)}
                        />
                        <path
                            d="M 330 102 L 342 110 L 330 118"
                            fill="none"
                            stroke={stroke("parallelMarks", "#0f766e")}
                            strokeWidth={thick("parallelMarks", 2.4)}
                        />
                    </g>
                    <text x={686} y={45} fontSize={14} fill="#334155">
                        l
                    </text>
                    <text x={694} y={49} fontSize={10} fill="#334155">
                        1
                    </text>
                    <text x={686} y={115} fontSize={14} fill="#334155">
                        l
                    </text>
                    <text x={694} y={119} fontSize={10} fill="#334155">
                        2
                    </text>
                </g>
            </svg>

            <div className="mt-3 rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700">
                {active
                    ? active.reading
                    : "Press a term above and that part of the figure lights up while the rest fades back. Press it again to bring the whole figure back."}
            </div>
        </div>
    );
};
