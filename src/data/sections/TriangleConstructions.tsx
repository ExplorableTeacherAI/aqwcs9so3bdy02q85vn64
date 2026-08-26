import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    InlineFormula,
    Table,
} from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

const stageColumns = [
    { header: "Stage", align: "left" as const, width: 150 },
    { header: "What to do", align: "left" as const },
];

export const triangleConstructionsBlocks: ReactElement[] = [
    <StackLayout key="layout-triangles-title" maxWidth="xl">
        <Block id="triangles-title" padding="md">
            <EditableH2 id="h2-triangles-title" blockId="triangles-title">
                Constructing Triangles
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangles-introduction" maxWidth="xl">
        <Block id="triangles-introduction" padding="sm">
            <EditableParagraph
                id="para-triangles-introduction"
                blockId="triangles-introduction"
            >
                A triangle has six measurements, three sides and three angles, but only
                three of them are ever needed to fix it. Each case below tells you which
                three, and the order in which to put them on the page. Always start with
                the side you are given and work outwards from it.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangles-cases-table" maxWidth="xl">
        <Block id="triangles-cases-table" padding="sm">
            <Table
                columns={[
                    { header: "Given", align: "left", width: 230 },
                    { header: "Short name", align: "center", width: 110 },
                    { header: "The tool that does the work", align: "left" },
                ]}
                rows={[
                    {
                        cells: [
                            "Three sides",
                            "SSS",
                            "Compasses only — two arcs meet at the third corner.",
                        ],
                    },
                    {
                        cells: [
                            "Two sides and the angle between them",
                            "SAS",
                            "One angle at the base, then one arc to cut the second side to length.",
                        ],
                    },
                    {
                        cells: [
                            "One side and the two angles at its ends",
                            "ASA",
                            "Two angles, one at each end, extended until the arms cross.",
                        ],
                    },
                ]}
                color="#6366f1"
                caption="Table 6 — The three standard triangle cases"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangles-viewer" maxWidth="xl">
        <Block id="triangles-viewer" padding="sm">
            <VisualOptionCards
                blockId="triangles-viewer"
                intro="Pick how your students will build the three triangle cases."
                cards={[
                    {
                        id: "three-case-builder",
                        title: "A builder that constructs each of the three cases stage by stage on a lettered base line",
                        looks: "A base line with its length marked, arcs or angle arms appearing above it, and the finished triangle with all given measurements labelled.",
                        manipulate: "Students choose a case, then step forwards and backwards through the stages, and change the given lengths or angles before rebuilding.",
                        reveals: "How each case pins down the third corner in a different way, and that the finished triangle is always the same shape for the same data.",
                        recommended: true,
                    },
                    {
                        id: "triangle-inequality-test",
                        title: "Three side lengths students set, with the arcs failing when a triangle is impossible",
                        looks: "A base line with two arcs swung from its ends, and controls for all three side lengths.",
                        manipulate: "Students shorten the two upper sides until the arcs no longer reach each other and no corner can be marked.",
                        reveals: "A triangle only exists when the two shorter sides together beat the longest one.",
                    },
                    {
                        id: "sas-versus-ssa",
                        title: "The same two sides with the angle placed between them and then not between them",
                        looks: "Two triangles side by side built from identical numbers, one with the angle at the corner between the given sides and one with it elsewhere.",
                        manipulate: "Students move the angle from between the sides to outside and watch the second version produce two different triangles.",
                        reveals: "Why the word 'included' matters: only the angle between the two sides fixes a single triangle.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangle-three-sides-heading" maxWidth="xl">
        <Block id="triangle-three-sides-heading" padding="sm">
            <EditableH3
                id="h3-triangle-three-sides-heading"
                blockId="triangle-three-sides-heading"
            >
                A. A Triangle When Three Sides Are Given
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangle-three-sides-steps" maxWidth="xl">
        <Block id="triangle-three-sides-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To construct a triangle when the lengths of all three sides are known.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                <InlineFormula latex="AB = 7\text{ cm}" />,{" "}
                                <InlineFormula latex="AC = 6\text{ cm}" />,{" "}
                                <InlineFormula latex="BC = 5\text{ cm}" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Draw the longest side as the base: mark{" "}
                                <InlineFormula latex="AB = 7\text{ cm}" /> with the ruler
                                and letter both ends.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Open the compasses against the ruler to{" "}
                                <InlineFormula latex="6\text{ cm}" />. With the point on{" "}
                                <InlineFormula latex="A" />, draw an arc above the base.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Reset the compasses to{" "}
                                <InlineFormula latex="5\text{ cm}" />. With the point on{" "}
                                <InlineFormula latex="B" />, draw an arc crossing the
                                first. Letter the crossing{" "}
                                <InlineFormula latex="C" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="AC" /> and{" "}
                                <InlineFormula latex="BC" /> with the straightedge.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                Triangle <InlineFormula latex="ABC" /> has exactly the
                                three given side lengths.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                The arcs will only cross if the two shorter sides together
                                are longer than the base:{" "}
                                <InlineFormula latex="6 + 5 > 7" />, so this triangle
                                exists. This is the one case where the compasses are reset
                                on purpose, once for each side. Starting with the longest
                                side keeps the crossing point well clear of the base and
                                easy to letter.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Triangle case A — Three sides given (SSS)"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangle-two-sides-angle-heading" maxWidth="xl">
        <Block id="triangle-two-sides-angle-heading" padding="sm">
            <EditableH3
                id="h3-triangle-two-sides-angle-heading"
                blockId="triangle-two-sides-angle-heading"
            >
                B. A Triangle When Two Sides and the Included Angle Are Given
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangle-two-sides-angle-steps" maxWidth="xl">
        <Block id="triangle-two-sides-angle-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To construct a triangle from two sides and the angle that sits between them.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                <InlineFormula latex="AB = 6\text{ cm}" />,{" "}
                                <InlineFormula latex="\angle A = 60^\circ" />,{" "}
                                <InlineFormula latex="AC = 4\text{ cm}" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Draw <InlineFormula latex="AB = 6\text{ cm}" /> and letter
                                both ends.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                At <InlineFormula latex="A" />, construct an angle of{" "}
                                <InlineFormula latex="60^\circ" /> with arcs (Construction
                                8) and draw the ray well past the length you will need.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Open the compasses to{" "}
                                <InlineFormula latex="4\text{ cm}" />. With the point on{" "}
                                <InlineFormula latex="A" />, cut the ray and letter the
                                cut <InlineFormula latex="C" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="C" /> to{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                Triangle <InlineFormula latex="ABC" /> has the two given
                                sides with the given angle between them.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                The angle must be the included one, at the corner where
                                the two given sides meet. If it is one of{" "}
                                <InlineFormula latex="30^\circ, 45^\circ, 60^\circ, 75^\circ, 90^\circ" />{" "}
                                or <InlineFormula latex="120^\circ" />, construct it with
                                arcs; for any other size a protractor is allowed, since
                                the angle is given as a measurement. Draw the ray longer
                                than the side you need — you can always cut it short, but
                                you cannot cut it long.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Triangle case B — Two sides and the included angle (SAS)"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangle-side-two-angles-heading" maxWidth="xl">
        <Block id="triangle-side-two-angles-heading" padding="sm">
            <EditableH3
                id="h3-triangle-side-two-angles-heading"
                blockId="triangle-side-two-angles-heading"
            >
                C. A Triangle When One Side and Two Angles Are Given
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangle-side-two-angles-steps" maxWidth="xl">
        <Block id="triangle-side-two-angles-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To construct a triangle from one side and the two angles at its ends.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                <InlineFormula latex="BC = 7\text{ cm}" />,{" "}
                                <InlineFormula latex="\angle B = 60^\circ" />,{" "}
                                <InlineFormula latex="\angle C = 45^\circ" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Draw <InlineFormula latex="BC = 7\text{ cm}" /> and letter
                                both ends.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                At <InlineFormula latex="B" />, construct{" "}
                                <InlineFormula latex="60^\circ" /> with arcs and draw a
                                long ray upwards.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                At <InlineFormula latex="C" />, construct{" "}
                                <InlineFormula latex="45^\circ" /> on the same side of the
                                base and draw a long ray upwards.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Extend both rays until they meet, and letter the meeting
                                point <InlineFormula latex="A" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                Triangle <InlineFormula latex="ABC" /> has the given side
                                with the two given angles at its ends, and{" "}
                                <InlineFormula latex="\angle A = 75^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                Both angles must be drawn on the same side of the base, or
                                the rays will never meet. The two given angles must add to
                                less than <InlineFormula latex="180^\circ" />; here{" "}
                                <InlineFormula latex="60^\circ + 45^\circ = 105^\circ" />,
                                so the third angle is{" "}
                                <InlineFormula latex="75^\circ" />. If the question gives
                                an angle that is not at an end of the given side, work the
                                missing one out from the angle sum first.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Triangle case C — One side and two angles (ASA)"
            />
        </Block>
    </StackLayout>,
];
