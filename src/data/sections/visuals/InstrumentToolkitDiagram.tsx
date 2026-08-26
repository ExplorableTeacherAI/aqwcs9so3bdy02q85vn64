import { type ReactElement, useState } from "react";

type InstrumentKey = "straightedge" | "compasses" | "pencil" | "protractor";

interface InstrumentDetail {
    key: InstrumentKey;
    name: string;
    centreX: number;
    accent: string;
    allowed: string[];
    notAllowed: string[];
}

const INSTRUMENTS: InstrumentDetail[] = [
    {
        key: "straightedge",
        name: "Straightedge",
        centreX: 95,
        accent: "#2563eb",
        allowed: [
            "Joining two points that a construction has already fixed",
            "Extending a line or a ray so later arcs have room to cut it",
            "Drawing a base line of a given length in triangle work",
        ],
        notAllowed: [
            "Reading its scale to place a point that should come from crossing arcs",
            "Halving a length by eye or by measurement",
        ],
    },
    {
        key: "compasses",
        name: "Pair of compasses",
        centreX: 285,
        accent: "#7c3aed",
        allowed: [
            "Drawing arcs and circles of a set radius",
            "Carrying a distance from one part of the figure to another",
            "Every step that fixes a point, because points are fixed where arcs cross",
        ],
        notAllowed: [
            "Being reopened part-way through a step that says to keep the width",
            "Drawing short, timid arcs that do not reach far enough to cross",
        ],
    },
    {
        key: "pencil",
        name: "Pencil",
        centreX: 475,
        accent: "#d97706",
        allowed: [
            "Making every line and arc on the page",
            "Lettering the points as soon as each one appears",
        ],
        notAllowed: [
            "Rubbing out the construction arcs once the figure looks finished",
            "Working blunt, which thickens every line and blurs the crossings",
        ],
    },
    {
        key: "protractor",
        name: "Protractor",
        centreX: 665,
        accent: "#dc2626",
        allowed: [
            "Checking a finished angle to confirm the construction worked",
            "Setting an angle that the question gives as a measurement, in triangle work",
        ],
        notAllowed: [
            "Producing any angle the question asks you to construct",
            "Standing in for the bisector, the right angle or the 60 degree arc",
        ],
    },
];

const VIEWBOX_WIDTH = 760;
const VIEWBOX_HEIGHT = 300;

const Straightedge = () => (
    <g transform="translate(95, 130)">
        <rect
            x={-78}
            y={-14}
            width={156}
            height={28}
            rx={3}
            fill="#e2e8f0"
            stroke="#475569"
            strokeWidth={2}
        />
        {Array.from({ length: 16 }, (_, index) => {
            const x = -72 + index * 9.6;
            const long = index % 5 === 0;
            return (
                <line
                    key={`tick-${index}`}
                    x1={x}
                    y1={14}
                    x2={x}
                    y2={long ? 2 : 7}
                    stroke="#475569"
                    strokeWidth={1}
                />
            );
        })}
        <line x1={-78} y1={-14} x2={78} y2={-14} stroke="#2563eb" strokeWidth={4} />
        <line x1={0} y1={-46} x2={0} y2={-20} stroke="#94a3b8" strokeWidth={1} />
        <text x={0} y={-52} textAnchor="middle" fontSize={11} fill="#334155">
            drawing edge
        </text>
        <line x1={-40} y1={40} x2={-40} y2={20} stroke="#94a3b8" strokeWidth={1} />
        <text x={-40} y={54} textAnchor="middle" fontSize={11} fill="#334155">
            scale not used
        </text>
    </g>
);

const Compasses = () => (
    <g transform="translate(285, 130)">
        <path
            d="M -34 56 A 70 70 0 0 1 34 56"
            fill="none"
            stroke="#7c3aed"
            strokeWidth={1.5}
            strokeDasharray="5 4"
        />
        <line x1={0} y1={-84} x2={0} y2={-70} stroke="#475569" strokeWidth={4} />
        <circle cx={0} cy={-88} r={6} fill="#475569" />
        <line x1={0} y1={-70} x2={-34} y2={52} stroke="#475569" strokeWidth={5} strokeLinecap="round" />
        <line x1={0} y1={-70} x2={34} y2={52} stroke="#475569" strokeWidth={5} strokeLinecap="round" />
        <circle cx={0} cy={-70} r={7} fill="#cbd5e1" stroke="#334155" strokeWidth={2} />
        <polygon points="-38,52 -30,52 -34,68" fill="#1f2937" />
        <rect x={30} y={50} width={9} height={12} fill="#fbbf24" stroke="#b45309" strokeWidth={1} />
        <polygon points="30,62 39,62 34.5,70" fill="#1f2937" />
        <line x1={22} y1={-70} x2={44} y2={-78} stroke="#94a3b8" strokeWidth={1} />
        <text x={46} y={-80} textAnchor="start" fontSize={11} fill="#334155">
            hinge
        </text>
        <text x={-34} y={84} textAnchor="middle" fontSize={11} fill="#334155">
            steel point
        </text>
        <text x={38} y={84} textAnchor="middle" fontSize={11} fill="#334155">
            pencil arm
        </text>
    </g>
);

const Pencil = () => (
    <g transform="translate(475, 130)">
        <rect x={-11} y={-92} width={22} height={12} rx={2} fill="#94a3b8" stroke="#475569" strokeWidth={1} />
        <rect x={-11} y={-80} width={22} height={110} fill="#fbbf24" stroke="#b45309" strokeWidth={2} />
        <line x1={-3} y1={-80} x2={-3} y2={30} stroke="#b45309" strokeWidth={1} opacity={0.6} />
        <line x1={5} y1={-80} x2={5} y2={30} stroke="#b45309" strokeWidth={1} opacity={0.6} />
        <polygon points="-11,30 11,30 0,58" fill="#fde68a" stroke="#b45309" strokeWidth={2} />
        <polygon points="-4,47 4,47 0,58" fill="#1f2937" />
        <line x1={11} y1={-40} x2={40} y2={-40} stroke="#94a3b8" strokeWidth={1} />
        <text x={44} y={-36} textAnchor="start" fontSize={11} fill="#334155">
            H or 2H
        </text>
        <line x1={6} y1={54} x2={34} y2={62} stroke="#94a3b8" strokeWidth={1} />
        <text x={36} y={66} textAnchor="start" fontSize={11} fill="#334155">
            fine point
        </text>
    </g>
);

const Protractor = () => (
    <g transform="translate(665, 130)">
        <path
            d="M -76 40 A 76 76 0 0 1 76 40 Z"
            fill="#dbeafe"
            fillOpacity={0.75}
            stroke="#2563eb"
            strokeWidth={2}
        />
        <path d="M -24 40 A 24 24 0 0 1 24 40 Z" fill="#ffffff" stroke="#2563eb" strokeWidth={1.5} />
        {Array.from({ length: 19 }, (_, index) => {
            const angle = (index * 10 * Math.PI) / 180;
            const long = index % 3 === 0;
            const outer = 76;
            const inner = long ? 62 : 69;
            return (
                <line
                    key={`degree-${index}`}
                    x1={-Math.cos(angle) * outer}
                    y1={40 - Math.sin(angle) * outer}
                    x2={-Math.cos(angle) * inner}
                    y2={40 - Math.sin(angle) * inner}
                    stroke="#1d4ed8"
                    strokeWidth={1}
                />
            );
        })}
        <text x={-56} y={54} textAnchor="middle" fontSize={10} fill="#1d4ed8">
            0
        </text>
        <text x={0} y={-30} textAnchor="middle" fontSize={10} fill="#1d4ed8">
            90
        </text>
        <text x={56} y={54} textAnchor="middle" fontSize={10} fill="#1d4ed8">
            180
        </text>
        <line x1={-76} y1={40} x2={76} y2={40} stroke="#1d4ed8" strokeWidth={2.5} />
        <text x={0} y={58} textAnchor="middle" fontSize={11} fill="#334155">
            base line and centre
        </text>
    </g>
);

const DRAWINGS: Record<InstrumentKey, () => ReactElement> = {
    straightedge: Straightedge,
    compasses: Compasses,
    pencil: Pencil,
    protractor: Protractor,
};

export const InstrumentToolkitDiagram = () => {
    const [selected, setSelected] = useState<InstrumentKey>("compasses");
    const active = INSTRUMENTS.find((item) => item.key === selected) ?? INSTRUMENTS[1];

    return (
        <div className="w-full">
            <svg
                width="100%"
                viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                role="img"
                aria-label="The four instruments used in geometric construction"
                className="max-w-full"
            >
                <rect x={0} y={0} width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} fill="#f8fafc" rx={10} />
                {INSTRUMENTS.map((instrument) => {
                    const isActive = instrument.key === selected;
                    const Drawing = DRAWINGS[instrument.key];
                    return (
                        <g
                            key={instrument.key}
                            onClick={() => setSelected(instrument.key)}
                            style={{ cursor: "pointer" }}
                        >
                            <rect
                                x={instrument.centreX - 88}
                                y={16}
                                width={176}
                                height={252}
                                rx={12}
                                fill={isActive ? "#ffffff" : "transparent"}
                                stroke={isActive ? instrument.accent : "#cbd5e1"}
                                strokeWidth={isActive ? 3 : 1}
                            />
                            <Drawing />
                            <text
                                x={instrument.centreX}
                                y={252}
                                textAnchor="middle"
                                fontSize={14}
                                fontWeight={isActive ? 700 : 500}
                                fill={isActive ? instrument.accent : "#475569"}
                            >
                                {instrument.name}
                            </text>
                        </g>
                    );
                })}
                <text x={VIEWBOX_WIDTH / 2} y={288} textAnchor="middle" fontSize={12} fill="#64748b">
                    Click an instrument to see where it is allowed and where it is not
                </text>
            </svg>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div
                    className="rounded-lg border p-4"
                    style={{ borderColor: active.accent, backgroundColor: "#f0fdf4" }}
                >
                    <div className="mb-2 text-sm font-semibold text-emerald-800">
                        {active.name} — use it for
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                        {active.allowed.map((line) => (
                            <li key={line}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-lg border border-red-300 bg-red-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-red-800">
                        {active.name} — never use it for
                    </div>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                        {active.notAllowed.map((line) => (
                            <li key={line}>{line}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
