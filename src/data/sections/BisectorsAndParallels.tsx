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
import { AdjustableAngleBisector } from "./visuals/AdjustableAngleBisector";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

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
                parallel. Swing the arms below through every angle you like, sharp or
                obtuse, and watch the same four arcs keep the two halves equal.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-bisectors-viewer" maxWidth="xl">
        <Block id="bisectors-viewer" padding="sm" hasVisualization>
            <AdjustableAngleBisector />
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

    <StackLayout key="layout-bisectors-practice-heading" maxWidth="xl">
        <Block id="bisectors-practice-heading" padding="sm">
            <EditableH3
                id="h3-bisectors-practice-heading"
                blockId="bisectors-practice-heading"
            >
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-bisectors-practice-chaining" maxWidth="xl">
        <Block id="bisectors-practice-chaining" padding="sm">
            <MultipleChoiceQuestion
                blockId="bisectors-practice-chaining"
                questionId="para-bisectors-practice-chaining"
                question="A design needs an angle of 22 and a half degrees, and only a straightedge and compasses may be used. Which route gets there?"
                options={[
                    {
                        id: "protractor-quarter",
                        label: "Draw 90 degrees with a protractor and mark a quarter of it by measuring.",
                        feedback: "Measuring is not allowed here, and it also throws away the accuracy the arcs would have given you.",
                    },
                    {
                        id: "double-bisect",
                        label: "Construct a right angle, bisect it to get 45 degrees, then bisect that.",
                        correct: true,
                    },
                    {
                        id: "bisect-sixty",
                        label: "Construct 60 degrees and bisect it twice.",
                        feedback: "Bisecting 60 twice lands on 15 degrees, not 22 and a half. Start from an angle that halves cleanly to 45.",
                    },
                    {
                        id: "impossible",
                        label: "It cannot be done with arcs, because 22 and a half is not a whole number.",
                        feedback: "Halving never cares whether the answer is a whole number — the arcs cut the angle exactly however it falls.",
                    },
                ]}
                correctFeedback="Exactly. Each bisection halves what you already have, so 90 becomes 45 and 45 becomes 22 and a half — three constructions chained together, with every set of arcs left on the page."
                hints={[
                    "Set the slider above to 90 and read the two half-angle labels. Then imagine feeding one of those halves back into the same construction.",
                    "Doubling 22 and a half gives 45; doubling again gives 90. Work the chain backwards from there.",
                    "Start with a right angle, bisect for 45, bisect once more for 22 and a half.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-bisectors-practice-parallel-radius" maxWidth="xl">
        <Block id="bisectors-practice-parallel-radius" padding="sm">
            <MultipleChoiceQuestion
                blockId="bisectors-practice-parallel-radius"
                questionId="para-bisectors-practice-parallel-radius"
                question="Constructing a parallel through P, Idris swings the arc from A, then resets his compasses to a new, larger radius before swinging the arc from P in Step 3. He finishes the rest correctly. What is wrong with his line?"
                options={[
                    {
                        id: "still-parallel",
                        label: "Nothing — the radius at P was never important.",
                        feedback: "That radius is doing a job. Ask yourself what the two arcs of equal radius are being used to carry across.",
                    },
                    {
                        id: "angle-not-copied",
                        label: "The angle at P is no longer equal to the angle at A, so the line he draws slants and is not parallel.",
                        correct: true,
                    },
                    {
                        id: "wrong-length",
                        label: "The line will be parallel but too short.",
                        feedback: "Length is never the issue with a parallel line — it can be extended as far as you like. The direction is what changed.",
                    },
                    {
                        id: "wrong-side",
                        label: "The line will be parallel but on the wrong side of P.",
                        feedback: "A line through P has no sides to get wrong. Think about the angle the construction is copying.",
                    },
                ]}
                correctFeedback="Right. The whole construction is a copied angle: the equal radius carries the shape of the angle from A to P, and the chord XY sets its opening. Change the radius and the copy is a different angle, so the lines are no longer parallel."
                hints={[
                    "Reread the note under Construction 6 about what the construction is really doing.",
                    "Equal corresponding angles are what make two lines parallel. Which parts of the construction guarantee the angles are equal?",
                    "The arc at P must have the same radius as the arc at A, or the chord XY no longer cuts off the same angle and the copy comes out different.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-bisectors-practice-drain" maxWidth="xl">
        <Block id="bisectors-practice-drain" padding="sm">
            <MultipleChoiceQuestion
                blockId="bisectors-practice-drain"
                questionId="para-bisectors-practice-drain"
                question="Two straight roads meet at a junction. A drainage channel has to run away from the junction so that it stays the same distance from both roads all the way along. Which construction gives its path?"
                options={[
                    {
                        id: "angle-bisector",
                        label: "The bisector of the angle between the two roads.",
                        correct: true,
                    },
                    {
                        id: "perp-bisector",
                        label: "The perpendicular bisector of the line joining two points on the roads.",
                        feedback: "That gives points equally far from two fixed points, but the channel must stay equally far from two whole roads.",
                    },
                    {
                        id: "parallel",
                        label: "A line parallel to one of the roads.",
                        feedback: "A parallel line keeps a fixed distance from one road, but its distance from the other road changes all the way along.",
                    },
                    {
                        id: "perpendicular",
                        label: "A perpendicular dropped from the junction to one road.",
                        feedback: "The junction is already on both roads, so there is nothing to drop a perpendicular from.",
                    },
                ]}
                correctFeedback="Yes. Every point on an angle bisector is the same distance from both arms, so the bisector of the junction angle is exactly the path the channel must follow."
                hints={[
                    "Look at the last line of the notes under Construction 5.",
                    "You need points that are equally far from two lines, not from two points. Which construction has that property built into it?",
                    "The angle bisector is the set of all points equally distant from both arms of the angle, which is precisely what the channel needs.",
                ]}
            />
        </Block>
    </StackLayout>,
];
