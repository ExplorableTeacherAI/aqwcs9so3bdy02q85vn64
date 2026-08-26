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
                line. Read each table from the top; the stages are meant to be carried
                out in order, with nothing skipped.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-perpendiculars-viewer" maxWidth="xl">
        <Block id="perpendiculars-viewer" padding="sm">
            <VisualOptionCards
                blockId="perpendiculars-viewer"
                intro="Pick how your students will watch these four constructions being built."
                cards={[
                    {
                        id: "step-through-builder",
                        title: "A step-through builder that draws one arc at a time for each of the four constructions",
                        looks: "A clean drawing area showing the starting figure, with the four constructions listed as tabs and a caption naming the current stage.",
                        manipulate: "Students press Next to add the next arc or line, and Back to undo it, moving through the same stages as the table beside it.",
                        reveals: "The order the arcs go on the page, and that the crossing points appear only after both arcs of a pair are drawn.",
                        recommended: true,
                    },
                    {
                        id: "draggable-segment",
                        title: "A segment students can drag, with its perpendicular bisector following live",
                        looks: "A lettered segment with two ends that can be moved, its arcs and bisector redrawn continuously, and the two equal halves marked.",
                        manipulate: "Students drag either endpoint anywhere on the page and watch the bisector and the midpoint follow.",
                        reveals: "The bisector always cuts the segment in half at a right angle, whatever the segment's length or slope.",
                    },
                    {
                        id: "compass-width-test",
                        title: "The perpendicular bisector attempted with different compass settings",
                        looks: "A segment with arcs swung from both ends, and a control for the compass opening.",
                        manipulate: "Students narrow the opening below half the segment and watch the arcs fail to meet, then change the width between the two arcs and see the crossing points slide off centre.",
                        reveals: "Why the opening must be more than half the segment and must not be touched once set.",
                        targetsMisconception: "Students change the compass width midway through a construction, and draw arcs too short to cross",
                    },
                ]}
            />
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
];
