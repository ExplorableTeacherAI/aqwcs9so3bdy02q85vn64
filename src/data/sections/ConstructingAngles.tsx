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

export const constructingAnglesBlocks: ReactElement[] = [
    <StackLayout key="layout-angles-title" maxWidth="xl">
        <Block id="angles-title" padding="md">
            <EditableH2 id="h2-angles-title" blockId="angles-title">
                Angles Without a Protractor
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angles-introduction" maxWidth="xl">
        <Block id="angles-introduction" padding="sm">
            <EditableParagraph
                id="para-angles-introduction"
                blockId="angles-introduction"
            >
                Only one angle has to be built from nothing:{" "}
                <InlineFormula latex="60^\circ" />, which comes free with an equilateral
                triangle. Everything else in this section is that angle stepped around
                the arc or cut in half. Put the protractor away — here it is only for
                checking the finished work.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angles-family-table" maxWidth="xl">
        <Block id="angles-family-table" padding="sm">
            <Table
                columns={[
                    { header: "Angle", align: "center", width: 90 },
                    { header: "Built from", align: "left" },
                ]}
                rows={[
                    {
                        cells: [
                            <InlineFormula latex="60^\circ" />,
                            "One equal arc stepped once around the first arc (an equilateral triangle).",
                        ],
                    },
                    {
                        cells: [
                            <InlineFormula latex="120^\circ" />,
                            "The same arc stepped twice.",
                        ],
                    },
                    {
                        cells: [
                            <InlineFormula latex="90^\circ" />,
                            "Halfway between the 60 mark and the 120 mark.",
                        ],
                    },
                    {
                        cells: [
                            <InlineFormula latex="30^\circ" />,
                            "Half of 60.",
                        ],
                    },
                    {
                        cells: [
                            <InlineFormula latex="45^\circ" />,
                            "Half of 90.",
                        ],
                    },
                    {
                        cells: [
                            <InlineFormula latex="75^\circ" />,
                            "Halfway between 60 and 90.",
                        ],
                    },
                ]}
                color="#6366f1"
                caption="Table 5 — Every angle here comes from stepping or halving"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angles-viewer" maxWidth="xl">
        <Block id="angles-viewer" padding="sm">
            <VisualOptionCards
                blockId="angles-viewer"
                intro="Pick how your students will see these six angles being built from arcs."
                cards={[
                    {
                        id: "arc-stepping-wheel",
                        title: "One arc stepped around a half circle to mark 60, 120 and 180, then halved to reach the rest",
                        looks: "A base line with a large arc above it, and the compass width marked off along the arc so the 60 and 120 points appear.",
                        manipulate: "Students step the arc round one mark at a time, then press Halve to bisect between any two marks and see the new angle named.",
                        reveals: "That the whole family of constructible angles grows out of one repeated arc width plus halving.",
                        recommended: true,
                    },
                    {
                        id: "angle-builder-choice",
                        title: "An angle builder where students pick a target angle and follow the arcs",
                        looks: "A blank base line with a menu of the six angles, and the arcs drawn one at a time with the current stage named.",
                        manipulate: "Students choose an angle, step forwards and backwards through the arcs, and check the finished angle against a protractor overlay at the end.",
                        reveals: "The route to each angle, and that the constructed result matches the protractor exactly.",
                        targetsMisconception: "Students measure with a protractor instead of using arcs",
                    },
                    {
                        id: "equilateral-proof",
                        title: "The equilateral triangle hidden inside the 60 degree construction",
                        looks: "The two arcs of the 60 degree construction with the triangle they create shaded and its three equal sides marked.",
                        manipulate: "Students change the compass radius and watch the triangle change size while the angle stays at 60 degrees.",
                        reveals: "Why the starting radius never matters: any equilateral triangle has 60 degree corners.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-sixty-heading" maxWidth="xl">
        <Block id="angle-sixty-heading" padding="sm">
            <EditableH3 id="h3-angle-sixty-heading" blockId="angle-sixty-heading">
                8. Constructing an Angle of 60 Degrees
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-sixty-steps" maxWidth="xl">
        <Block id="angle-sixty-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            <span>
                                To construct an angle of{" "}
                                <InlineFormula latex="60^\circ" /> at a given point on a
                                line.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line with a marked vertex{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Draw the base line and mark{" "}
                                <InlineFormula latex="B" /> on it.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the point on <InlineFormula latex="B" /> and any
                                convenient radius, draw a large arc that cuts the line at{" "}
                                <InlineFormula latex="P" /> and carries on well above it.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Keeping exactly the same radius, put the point on{" "}
                                <InlineFormula latex="P" /> and draw an arc cutting the
                                first arc at <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="Q" /> and extend the ray.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle QBP = 60^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                <InlineFormula latex="BP = PQ = QB" />, so triangle{" "}
                                <InlineFormula latex="BPQ" /> is equilateral and each of
                                its angles is <InlineFormula latex="60^\circ" />. This is
                                why the radius may be any size, and why it must not change
                                between Step 2 and Step 3. Make the first arc long — every
                                later angle in this section is marked off on it.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 8 — An angle of 60 degrees"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-thirty-heading" maxWidth="xl">
        <Block id="angle-thirty-heading" padding="sm">
            <EditableH3 id="h3-angle-thirty-heading" blockId="angle-thirty-heading">
                9. Constructing an Angle of 30 Degrees
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-thirty-steps" maxWidth="xl">
        <Block id="angle-thirty-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            <span>
                                To construct an angle of{" "}
                                <InlineFormula latex="30^\circ" />.
                            </span>,
                        ],
                    },
                    {
                        cells: ["Given", "A line with a marked vertex."],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Construct <InlineFormula latex="\angle QBP = 60^\circ" />{" "}
                                exactly as in Construction 8, leaving the arcs in place.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Open the compasses to more than half of{" "}
                                <InlineFormula latex="PQ" />. With the point on{" "}
                                <InlineFormula latex="P" />, draw an arc inside the angle.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Keeping that width, put the point on{" "}
                                <InlineFormula latex="Q" /> and draw an arc crossing it at{" "}
                                <InlineFormula latex="R" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="R" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle RBP = 30^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                Steps 2 to 4 are simply Construction 5 applied to the{" "}
                                <InlineFormula latex="60^\circ" /> angle. Do not rub out
                                the <InlineFormula latex="60^\circ" /> arcs; they are part
                                of the working for the{" "}
                                <InlineFormula latex="30^\circ" /> answer. Halving again
                                would give <InlineFormula latex="15^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 9 — An angle of 30 degrees"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-ninety-heading" maxWidth="xl">
        <Block id="angle-ninety-heading" padding="sm">
            <EditableH3 id="h3-angle-ninety-heading" blockId="angle-ninety-heading">
                10. Constructing an Angle of 90 Degrees
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-ninety-steps" maxWidth="xl">
        <Block id="angle-ninety-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            <span>
                                To construct a right angle of{" "}
                                <InlineFormula latex="90^\circ" /> at a point on a line.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line with a marked vertex{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                With the point on <InlineFormula latex="B" /> and a
                                convenient radius, draw a long arc cutting the line at{" "}
                                <InlineFormula latex="P" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Keeping that radius, step from{" "}
                                <InlineFormula latex="P" /> along the arc to mark{" "}
                                <InlineFormula latex="Q" />, then from{" "}
                                <InlineFormula latex="Q" /> to mark{" "}
                                <InlineFormula latex="R" />. These are the{" "}
                                <InlineFormula latex="60^\circ" /> and{" "}
                                <InlineFormula latex="120^\circ" /> positions.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Open the compasses to more than half of{" "}
                                <InlineFormula latex="QR" />. Draw an arc from{" "}
                                <InlineFormula latex="Q" /> and, at the same width, one
                                from <InlineFormula latex="R" />. Letter the crossing{" "}
                                <InlineFormula latex="S" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="S" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle SBP = 90^\circ" />, so{" "}
                                <InlineFormula latex="BS" /> is perpendicular to the line.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                <InlineFormula latex="90^\circ" /> is the angle halfway
                                between the <InlineFormula latex="60^\circ" /> and{" "}
                                <InlineFormula latex="120^\circ" /> marks. If the vertex
                                lies part-way along a line with room on both sides,
                                Construction 3 reaches the same result in fewer arcs; use
                                whichever the question sets up. Keep{" "}
                                <InlineFormula latex="Q" /> and{" "}
                                <InlineFormula latex="R" /> on the page — they are needed
                                again for <InlineFormula latex="45^\circ" /> and{" "}
                                <InlineFormula latex="75^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 10 — An angle of 90 degrees"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-forty-five-heading" maxWidth="xl">
        <Block id="angle-forty-five-heading" padding="sm">
            <EditableH3
                id="h3-angle-forty-five-heading"
                blockId="angle-forty-five-heading"
            >
                11. Constructing an Angle of 45 Degrees
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-forty-five-steps" maxWidth="xl">
        <Block id="angle-forty-five-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            <span>
                                To construct an angle of{" "}
                                <InlineFormula latex="45^\circ" />.
                            </span>,
                        ],
                    },
                    {
                        cells: ["Given", "A line with a marked vertex."],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Construct <InlineFormula latex="\angle SBP = 90^\circ" />{" "}
                                as in Construction 10.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the point on <InlineFormula latex="B" /> and any
                                convenient radius, draw an arc cutting{" "}
                                <InlineFormula latex="BP" /> at{" "}
                                <InlineFormula latex="U" /> and{" "}
                                <InlineFormula latex="BS" /> at{" "}
                                <InlineFormula latex="V" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Open the compasses to more than half of{" "}
                                <InlineFormula latex="UV" /> and draw arcs from{" "}
                                <InlineFormula latex="U" /> and from{" "}
                                <InlineFormula latex="V" />, crossing at{" "}
                                <InlineFormula latex="W" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="W" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle WBP = 45^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                A <InlineFormula latex="45^\circ" /> angle is a bisected
                                right angle, so the right angle must be constructed first
                                — never assumed by eye. The page will now carry three sets
                                of arcs; that is expected, and all of them stay.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 11 — An angle of 45 degrees"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-one-twenty-heading" maxWidth="xl">
        <Block id="angle-one-twenty-heading" padding="sm">
            <EditableH3
                id="h3-angle-one-twenty-heading"
                blockId="angle-one-twenty-heading"
            >
                12. Constructing an Angle of 120 Degrees
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-one-twenty-steps" maxWidth="xl">
        <Block id="angle-one-twenty-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            <span>
                                To construct an obtuse angle of{" "}
                                <InlineFormula latex="120^\circ" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line with a marked vertex{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                With the point on <InlineFormula latex="B" /> and a
                                convenient radius, draw a long arc cutting the line at{" "}
                                <InlineFormula latex="P" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Keeping that radius, put the point on{" "}
                                <InlineFormula latex="P" /> and cut the arc at{" "}
                                <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Still at that radius, put the point on{" "}
                                <InlineFormula latex="Q" /> and cut the arc again at{" "}
                                <InlineFormula latex="R" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="R" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle RBP = 120^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                Each step along the arc adds{" "}
                                <InlineFormula latex="60^\circ" />, so two steps give{" "}
                                <InlineFormula latex="120^\circ" /> and a third would give{" "}
                                <InlineFormula latex="180^\circ" />. The radius must be
                                identical for all three arcs. Checking that{" "}
                                <InlineFormula latex="\angle RBP" /> and the{" "}
                                <InlineFormula latex="60^\circ" /> angle beside it add to{" "}
                                <InlineFormula latex="180^\circ" /> is a quick way to
                                confirm the work.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 12 — An angle of 120 degrees"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-seventy-five-heading" maxWidth="xl">
        <Block id="angle-seventy-five-heading" padding="sm">
            <EditableH3
                id="h3-angle-seventy-five-heading"
                blockId="angle-seventy-five-heading"
            >
                13. Constructing an Angle of 75 Degrees
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-seventy-five-steps" maxWidth="xl">
        <Block id="angle-seventy-five-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            <span>
                                To construct an angle of{" "}
                                <InlineFormula latex="75^\circ" />.
                            </span>,
                        ],
                    },
                    {
                        cells: ["Given", "A line with a marked vertex."],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Construct the <InlineFormula latex="60^\circ" /> ray{" "}
                                <InlineFormula latex="BQ" /> and, on the same arc, the{" "}
                                <InlineFormula latex="90^\circ" /> ray{" "}
                                <InlineFormula latex="BS" /> (Constructions 8 and 10).
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the point on <InlineFormula latex="B" /> and any
                                convenient radius, draw an arc cutting{" "}
                                <InlineFormula latex="BQ" /> at{" "}
                                <InlineFormula latex="G" /> and{" "}
                                <InlineFormula latex="BS" /> at{" "}
                                <InlineFormula latex="H" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Open the compasses to more than half of{" "}
                                <InlineFormula latex="GH" /> and draw arcs from{" "}
                                <InlineFormula latex="G" /> and from{" "}
                                <InlineFormula latex="H" />, crossing at{" "}
                                <InlineFormula latex="K" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="K" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle KBP = 75^\circ" />, because{" "}
                                <InlineFormula latex="60^\circ + \tfrac{1}{2}(90^\circ - 60^\circ) = 75^\circ" />
                                .
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                Both the <InlineFormula latex="60^\circ" /> and the{" "}
                                <InlineFormula latex="90^\circ" /> rays must be finished
                                before the bisecting starts, and the gap between them is{" "}
                                <InlineFormula latex="30^\circ" />. The same idea reaches{" "}
                                <InlineFormula latex="105^\circ" /> by bisecting between{" "}
                                <InlineFormula latex="90^\circ" /> and{" "}
                                <InlineFormula latex="120^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 13 — An angle of 75 degrees"
            />
        </Block>
    </StackLayout>,
];
