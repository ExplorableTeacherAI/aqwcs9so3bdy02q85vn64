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

export const bisectorsAndParallelsBlocks: ReactElement[] = [
    <StackLayout key="layout-bisectors-title" maxWidth="xl">
        <Block id="bisectors-title" padding="md">
            <EditableH2 id="h2-bisectors-title" blockId="bisectors-title">
                Bisecting Angles, Copying Angles and Parallels
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-bisectors-introduction" maxWidth="xl">
        <Block id="bisectors-introduction" padding="sm">
            <EditableParagraph
                id="para-bisectors-introduction"
                blockId="bisectors-introduction"
            >
                These three constructions all work by building a rhombus out of arcs of
                equal length. Because the sides of a rhombus are equal, its diagonal
                splits the corner angle exactly in half, and its opposite sides are
                parallel. The compasses do the reasoning; you only have to keep the width
                fixed where the steps say so.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-bisectors-viewer" maxWidth="xl">
        <Block id="bisectors-viewer" padding="sm">
            <VisualOptionCards
                blockId="bisectors-viewer"
                intro="Pick how your students will explore bisecting, copying and parallels."
                cards={[
                    {
                        id: "adjustable-angle-bisector",
                        title: "An angle whose arms students swing, with the bisector and its two equal halves shown",
                        looks: "A lettered angle with a movable arm, the arcs of the construction drawn in, and both halves labelled with their size.",
                        manipulate: "Students swing the arm from a very sharp angle to a very wide one and watch the bisector follow, keeping the two halves equal.",
                        reveals: "The construction works for any angle, sharp or obtuse, and the halves stay equal without anything being measured.",
                        recommended: true,
                    },
                    {
                        id: "copy-angle-transfer",
                        title: "An angle being lifted off one place on the page and rebuilt somewhere else",
                        looks: "An original lettered angle on the left and an empty ray on the right, with the transferred arc and chord shown as they are carried across.",
                        manipulate: "Students step through carrying the arc and then the chord, and can drag the original angle to a new size and repeat.",
                        reveals: "That an angle is copied by copying one arc and one chord length, never by reading a protractor.",
                        targetsMisconception: "Students measure with a protractor instead of using arcs",
                    },
                    {
                        id: "parallel-rhombus",
                        title: "A parallel line built through a point, with the rhombus that makes it work picked out",
                        looks: "A line, a point above it, a slanting line joining them, and the four equal arc lengths shaded to show the rhombus.",
                        manipulate: "Students drag the point up and down and watch the new line stay parallel, with the equal sides staying equal.",
                        reveals: "Why equal arcs force the new line to keep the same direction as the original.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-bisector-heading" maxWidth="xl">
        <Block id="angle-bisector-heading" padding="sm">
            <EditableH3 id="h3-angle-bisector-heading" blockId="angle-bisector-heading">
                5. Constructing the Bisector of an Angle
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angle-bisector-steps" maxWidth="xl">
        <Block id="angle-bisector-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To draw the ray that cuts a given angle into two equal angles.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                An angle <InlineFormula latex="\angle ABC" /> with vertex{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                With the compass point on the vertex{" "}
                                <InlineFormula latex="B" /> and any convenient radius,
                                draw an arc that cuts both arms. Letter the cuts{" "}
                                <InlineFormula latex="P" /> on{" "}
                                <InlineFormula latex="BA" /> and{" "}
                                <InlineFormula latex="Q" /> on{" "}
                                <InlineFormula latex="BC" />.
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
                                Without changing that width, put the point on{" "}
                                <InlineFormula latex="Q" /> and draw an arc crossing the
                                one from Step 2. Letter the crossing{" "}
                                <InlineFormula latex="R" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="B" /> to{" "}
                                <InlineFormula latex="R" /> and extend the ray beyond{" "}
                                <InlineFormula latex="R" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="BR" /> is the angle bisector, so{" "}
                                <InlineFormula latex="\angle ABR = \angle RBC = \tfrac{1}{2}\angle ABC" />
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
                                <InlineFormula latex="BPRQ" /> is a rhombus, and a
                                rhombus's diagonal always bisects its angle — that is the
                                proof. If the arms are short, extend them before Step 1 so
                                the first arc has something to cut. Every point on{" "}
                                <InlineFormula latex="BR" /> is the same distance from
                                both arms.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 5 — Bisector of an angle"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-parallel-line-heading" maxWidth="xl">
        <Block id="parallel-line-heading" padding="sm">
            <EditableH3 id="h3-parallel-line-heading" blockId="parallel-line-heading">
                6. Constructing a Parallel Line Through a Given Point
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-parallel-line-steps" maxWidth="xl">
        <Block id="parallel-line-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To draw a line through a given point that is parallel to a given line.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line <InlineFormula latex="\ell" /> and a point{" "}
                                <InlineFormula latex="P" /> not on it.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Mark any point <InlineFormula latex="A" /> on{" "}
                                <InlineFormula latex="\ell" /> and join{" "}
                                <InlineFormula latex="A" /> to{" "}
                                <InlineFormula latex="P" />, extending the line past{" "}
                                <InlineFormula latex="P" />. This slanting line is the
                                transversal.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the point on <InlineFormula latex="A" /> and any
                                convenient radius, draw an arc cutting{" "}
                                <InlineFormula latex="\ell" /> at{" "}
                                <InlineFormula latex="X" /> and the transversal at{" "}
                                <InlineFormula latex="Y" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Keeping exactly that radius, put the point on{" "}
                                <InlineFormula latex="P" /> and draw a long arc cutting
                                the transversal at <InlineFormula latex="M" />, on the
                                same side of <InlineFormula latex="P" /> as{" "}
                                <InlineFormula latex="A" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Now open the compasses to the exact distance{" "}
                                <InlineFormula latex="XY" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 5",
                            <span>
                                With the point on <InlineFormula latex="M" />, draw an arc
                                cutting the long arc from Step 3. Letter the crossing{" "}
                                <InlineFormula latex="N" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 6",
                            <span>
                                Join <InlineFormula latex="P" /> to{" "}
                                <InlineFormula latex="N" /> and extend the line in both
                                directions.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="PN \parallel \ell" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                What you have really done is copy the angle{" "}
                                <InlineFormula latex="\angle YAX" /> to the point{" "}
                                <InlineFormula latex="P" />. Equal corresponding angles
                                mean the lines are parallel. The compasses are reset only
                                once, at Step 4; everywhere else the width must hold.
                                Sliding a ruler along a set square gives a parallel line
                                but is not an acceptable construction.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 6 — Parallel line through a given point"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-copying-angle-heading" maxWidth="xl">
        <Block id="copying-angle-heading" padding="sm">
            <EditableH3 id="h3-copying-angle-heading" blockId="copying-angle-heading">
                7. Copying a Given Angle
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-copying-angle-steps" maxWidth="xl">
        <Block id="copying-angle-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To reproduce a given angle exactly at a new position, without measuring it.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                An angle <InlineFormula latex="\angle ABC" /> and a new
                                ray starting at <InlineFormula latex="B'" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Draw the new ray <InlineFormula latex="B'C'" /> where the
                                copy is to sit. This will be one arm of the copy.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the point on <InlineFormula latex="B" /> and any
                                convenient radius, draw an arc cutting the arms at{" "}
                                <InlineFormula latex="P" /> and{" "}
                                <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Keeping that same radius, put the point on{" "}
                                <InlineFormula latex="B'" /> and draw a long arc cutting
                                the new ray at <InlineFormula latex="Q'" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Open the compasses to the distance{" "}
                                <InlineFormula latex="PQ" /> — the straight gap between
                                the two cuts on the original.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 5",
                            <span>
                                With the point on <InlineFormula latex="Q'" />, draw an
                                arc cutting the long arc at{" "}
                                <InlineFormula latex="P'" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 6",
                            <span>
                                Join <InlineFormula latex="B'" /> to{" "}
                                <InlineFormula latex="P'" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="\angle P'B'Q' = \angle ABC" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                Two triangles with three equal sides must have equal
                                angles, and that is exactly what Steps 3 and 5 build. Take
                                the distance <InlineFormula latex="PQ" /> as a straight
                                span, not along the curve. The copy works for an obtuse
                                angle too, and the size of the first radius does not
                                matter as long as it is used for both arcs.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 7 — Copying a given angle"
            />
        </Block>
    </StackLayout>,
];
