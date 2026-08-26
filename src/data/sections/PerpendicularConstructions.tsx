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
import { CompassWidthTest } from "./visuals/CompassWidthTest";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

const stageColumns = [
    { header: "Stage", align: "left" as const, width: 150 },
    { header: "What to do", align: "left" as const },
];

export const perpendicularConstructionsBlocks: ReactElement[] = [
    <StackLayout key="layout-perpendiculars-title" maxWidth="xl">
        <Block id="perpendiculars-title" padding="md">
            <EditableH2 id="h2-perpendiculars-title" blockId="perpendiculars-title">
                Perpendiculars and Midpoints
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-introduction" maxWidth="xl">
        <Block id="perpendiculars-introduction" padding="sm">
            <EditableParagraph
                id="para-perpendiculars-introduction"
                blockId="perpendiculars-introduction"
            >
                Every construction in this section rests on one idea: a point the same
                distance from <InlineFormula latex="A" /> as from{" "}
                <InlineFormula latex="B" /> must lie on the perpendicular bisector of{" "}
                <InlineFormula latex="AB" />. Two such points are enough to fix the whole
                line. Before working through the tables, try the two openings below on an{" "}
                <InlineFormula latex="8\text{ cm}" /> segment and find out how much the
                compasses are allowed to get away with.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-viewer" maxWidth="xl">
        <Block id="perpendiculars-viewer" padding="sm" hasVisualization>
            <CompassWidthTest />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendicular-bisector-heading" maxWidth="xl">
        <Block id="perpendicular-bisector-heading" padding="sm">
            <EditableH3
                id="h3-perpendicular-bisector-heading"
                blockId="perpendicular-bisector-heading"
            >
                1. Constructing the Perpendicular Bisector of a Line Segment
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendicular-bisector-steps" maxWidth="xl">
        <Block id="perpendicular-bisector-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To construct the line that cuts a given line segment into two equal parts at right angles.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line segment <InlineFormula latex="AB" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Draw <InlineFormula latex="AB" /> with the straightedge
                                and letter the two ends.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Open the compasses to any width greater than half of{" "}
                                <InlineFormula latex="AB" />. Tighten the hinge.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Put the compass point on <InlineFormula latex="A" /> and
                                draw one arc above the segment and one below it.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Without altering the width, put the point on{" "}
                                <InlineFormula latex="B" /> and draw two more arcs so that
                                they cross the first pair. Letter the crossings{" "}
                                <InlineFormula latex="P" /> and{" "}
                                <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 5",
                            <span>
                                Join <InlineFormula latex="P" /> to{" "}
                                <InlineFormula latex="Q" /> with the straightedge and
                                extend the line a little past both arcs. Letter the point
                                where it meets <InlineFormula latex="AB" /> as{" "}
                                <InlineFormula latex="M" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="PQ" /> is the perpendicular bisector
                                of <InlineFormula latex="AB" />, so{" "}
                                <InlineFormula latex="AM = MB" /> and{" "}
                                <InlineFormula latex="\angle AMP = 90^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                If the opening is less than half of{" "}
                                <InlineFormula latex="AB" /> the arcs can never meet.
                                Because <InlineFormula latex="AP = BP" /> and{" "}
                                <InlineFormula latex="AQ = BQ" />, the two points{" "}
                                <InlineFormula latex="P" /> and{" "}
                                <InlineFormula latex="Q" /> are each equally far from{" "}
                                <InlineFormula latex="A" /> and{" "}
                                <InlineFormula latex="B" /> — that is why the line through
                                them is the bisector. Leave all four arcs on the page.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 1 — Perpendicular bisector of a line segment"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-midpoint-heading" maxWidth="xl">
        <Block id="midpoint-heading" padding="sm">
            <EditableH3 id="h3-midpoint-heading" blockId="midpoint-heading">
                2. Finding the Midpoint of a Line Segment
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-midpoint-steps" maxWidth="xl">
        <Block id="midpoint-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To find the exact centre of a given line segment without measuring it.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line segment <InlineFormula latex="AB" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            "Carry out Construction 1 in full, from the first arc to the joining line.",
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Mark the point where the bisector crosses{" "}
                                <InlineFormula latex="AB" /> and letter it{" "}
                                <InlineFormula latex="M" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="M" /> is the midpoint, so{" "}
                                <InlineFormula latex="AM = MB = \tfrac{1}{2}AB" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            "There is no separate midpoint construction to learn: the midpoint is a by-product of the perpendicular bisector. Halving the length with a ruler is a measurement, not a construction, and earns no method marks.",
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 2 — Midpoint of a line segment"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendicular-at-point-heading" maxWidth="xl">
        <Block id="perpendicular-at-point-heading" padding="sm">
            <EditableH3
                id="h3-perpendicular-at-point-heading"
                blockId="perpendicular-at-point-heading"
            >
                3. Constructing a Perpendicular at a Point on a Line
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendicular-at-point-steps" maxWidth="xl">
        <Block id="perpendicular-at-point-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To raise a line at right angles to a given line, through a point that lies on that line.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A line <InlineFormula latex="\ell" /> and a point{" "}
                                <InlineFormula latex="P" /> on it.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Check that the line runs well past{" "}
                                <InlineFormula latex="P" /> on both sides. If not, extend
                                it first.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the compass point on <InlineFormula latex="P" /> and
                                any convenient radius, draw arcs cutting the line on both
                                sides. Letter them <InlineFormula latex="X" /> and{" "}
                                <InlineFormula latex="Y" />, so that{" "}
                                <InlineFormula latex="PX = PY" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Open the compasses wider than{" "}
                                <InlineFormula latex="PX" />. With the point on{" "}
                                <InlineFormula latex="X" />, draw an arc above the line.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Keeping that same width, put the point on{" "}
                                <InlineFormula latex="Y" /> and draw an arc crossing the
                                previous one. Letter the crossing{" "}
                                <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 5",
                            <span>
                                Join <InlineFormula latex="P" /> to{" "}
                                <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="PQ \perp \ell" /> at{" "}
                                <InlineFormula latex="P" />, so{" "}
                                <InlineFormula latex="\angle QPX = \angle QPY = 90^\circ" />
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
                                Steps 3 and 4 are simply Construction 1 applied to the
                                segment <InlineFormula latex="XY" />, whose midpoint is
                                already <InlineFormula latex="P" />. This is the standard
                                way to construct a{" "}
                                <InlineFormula latex="90^\circ" /> angle. A set square
                                gives the same picture but is not a construction.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 3 — Perpendicular at a point on a line"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendicular-from-external-heading" maxWidth="xl">
        <Block id="perpendicular-from-external-heading" padding="sm">
            <EditableH3
                id="h3-perpendicular-from-external-heading"
                blockId="perpendicular-from-external-heading"
            >
                4. Constructing a Perpendicular from an External Point to a Line
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendicular-from-external-steps" maxWidth="xl">
        <Block id="perpendicular-from-external-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To drop a line at right angles from a point down onto a line that does not pass through it.",
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
                                With the point on <InlineFormula latex="P" />, open the
                                compasses wide enough to reach across the line, and draw
                                an arc cutting <InlineFormula latex="\ell" /> twice.
                                Letter the cuts <InlineFormula latex="X" /> and{" "}
                                <InlineFormula latex="Y" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Open the compasses to more than half of{" "}
                                <InlineFormula latex="XY" />. With the point on{" "}
                                <InlineFormula latex="X" />, draw an arc on the far side
                                of the line from <InlineFormula latex="P" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Keeping that width, put the point on{" "}
                                <InlineFormula latex="Y" /> and draw an arc crossing it.
                                Letter the crossing <InlineFormula latex="Q" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="P" /> to{" "}
                                <InlineFormula latex="Q" /> and letter the point where the
                                join crosses <InlineFormula latex="\ell" /> as{" "}
                                <InlineFormula latex="F" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="PF \perp \ell" />, and{" "}
                                <InlineFormula latex="PF" /> is the shortest distance from{" "}
                                <InlineFormula latex="P" /> to the line.{" "}
                                <InlineFormula latex="F" /> is called the foot of the
                                perpendicular.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                If the first arc touches the line at only one point the
                                radius is too small — widen it and try again. Drawing the
                                second pair of arcs on the same side as{" "}
                                <InlineFormula latex="P" /> also works, but the crossing
                                is cramped and harder to letter accurately.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 4 — Perpendicular from an external point"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-practice-heading" maxWidth="xl">
        <Block id="perpendiculars-practice-heading" padding="sm">
            <EditableH3
                id="h3-perpendiculars-practice-heading"
                blockId="perpendiculars-practice-heading"
            >
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-practice-opening" maxWidth="xl">
        <Block id="perpendiculars-practice-opening" padding="sm">
            <MultipleChoiceQuestion
                blockId="perpendiculars-practice-opening"
                questionId="para-perpendiculars-practice-opening"
                question="You are constructing the perpendicular bisector of a segment CD that is 10 cm long. Which compass opening will give you a proper pair of crossing points above and below CD?"
                options={[
                    {
                        id: "four-cm",
                        label: "4 cm from each end",
                        feedback: "Two arcs of 4 cm reach 8 cm in total, which is short of the 10 cm gap.",
                    },
                    {
                        id: "five-cm",
                        label: "5 cm from each end",
                        feedback: "Very close, but at exactly 5 cm the arcs only just touch at a single point on CD itself — there is no pair of crossings to join.",
                    },
                    {
                        id: "six-cm",
                        label: "6 cm from each end",
                        correct: true,
                    },
                    {
                        id: "any-equal",
                        label: "Any opening at all, as long as it is the same from both ends",
                        feedback: "Equal openings are necessary but not sufficient — a small enough pair of equal arcs will never reach each other.",
                    },
                ]}
                correctFeedback="Correct. Six is more than half of ten, so each arc reaches past the midpoint and the two pairs cross well clear of CD, giving crossings that are easy to letter."
                hints={[
                    "Set both sliders above to the same value and drag them down until the arcs stop meeting. Watch the number where it happens.",
                    "The segment above is 8 cm and the arcs fail below 4 cm each. Work out the matching number for a 10 cm segment.",
                    "The opening has to be more than half the segment, so more than 5 cm for CD — and it needs to be comfortably more, not exactly 5.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-practice-unequal" maxWidth="xl">
        <Block id="perpendiculars-practice-unequal" padding="sm">
            <MultipleChoiceQuestion
                blockId="perpendiculars-practice-unequal"
                questionId="para-perpendiculars-practice-unequal"
                question="On a 10 cm segment CD, Rhea swings arcs of 6 cm from C, then nudges the hinge and swings 7 cm from D. The arcs cross, she joins the crossings, and the line she draws really does meet CD at a right angle. Why is it still not the perpendicular bisector of CD?"
                options={[
                    {
                        id: "not-perpendicular",
                        label: "It only looks perpendicular; it is really about 85 degrees.",
                        feedback: "The right angle is genuine — that part of her figure is fine. Look at where the line crosses instead.",
                    },
                    {
                        id: "crosses-off-centre",
                        label: "It crosses CD nearer to C than the midpoint, so it cuts CD at a right angle without halving it.",
                        correct: true,
                    },
                    {
                        id: "arcs-too-small",
                        label: "6 cm and 7 cm are too small on a 10 cm segment.",
                        feedback: "6 and 7 together reach 13 cm, comfortably more than 10, so the arcs meet without trouble.",
                    },
                    {
                        id: "needs-four-arcs",
                        label: "She only drew two arcs instead of four.",
                        feedback: "She drew a crossing above and below, which is all the line needs. The problem is where those crossings sit.",
                    },
                ]}
                correctFeedback="Exactly. Unequal openings still give a perpendicular, because the crossings sit one above the other — but they sit off centre, so the line halves nothing. This is why a slipped hinge is so dangerous: the figure looks right."
                hints={[
                    "Turn off the hinge switch above, set the two openings to different values, and read the line under the figure.",
                    "Compare where the red line crosses with the dashed M mark. Is the crossing pulled towards the bigger opening or the smaller one?",
                    "The crossings always sit closer to the end with the smaller opening, so Rhea's line meets CD nearer C — a right angle in the wrong place.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-practice-fence" maxWidth="xl">
        <Block id="perpendiculars-practice-fence" padding="sm">
            <MultipleChoiceQuestion
                blockId="perpendiculars-practice-fence"
                questionId="para-perpendiculars-practice-fence"
                question="A straight fence runs across a field, and two trees, S and T, stand away from it. A gate must be put in the fence at the spot that is exactly the same distance from S as from T. Which construction finds that spot?"
                options={[
                    {
                        id: "perp-bisector-st",
                        label: "Construct the perpendicular bisector of ST; the gate goes where it crosses the fence.",
                        correct: true,
                    },
                    {
                        id: "perp-from-s",
                        label: "Drop a perpendicular from S to the fence.",
                        feedback: "That finds the point of the fence closest to S, which takes no notice of T at all.",
                    },
                    {
                        id: "midpoint-fence",
                        label: "Find the midpoint of the fence.",
                        feedback: "The midpoint of the fence has nothing to do with where the trees happen to stand.",
                    },
                    {
                        id: "midpoint-st",
                        label: "Find the midpoint of ST and put the gate there.",
                        feedback: "The midpoint of ST is equally far from both trees, but it will almost never land on the fence.",
                    },
                ]}
                correctFeedback="Yes. Every point on the perpendicular bisector of ST is equally far from S and from T, so the one place on the fence with that property is where the bisector cuts it."
                hints={[
                    "Reread the note under Construction 1 about what is true of P and of Q.",
                    "You need points that are the same distance from two fixed points. Which construction is built entirely out of that idea?",
                    "The perpendicular bisector of ST is the set of all points equally far from S and T, so where it meets the fence is the only spot that works.",
                ]}
            />
        </Block>
    </StackLayout>,
];
