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
import { ExternalTangentBuilder } from "./visuals/ExternalTangentBuilder";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

const stageColumns = [
    { header: "Stage", align: "left" as const, width: 150 },
    { header: "What to do", align: "left" as const },
];

export const tangentConstructionsBlocks: ReactElement[] = [
    <StackLayout key="layout-tangents-title" maxWidth="xl">
        <Block id="tangents-title" padding="md">
            <EditableH2 id="h2-tangents-title" blockId="tangents-title">
                Tangents to a Circle
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-introduction" maxWidth="xl">
        <Block id="tangents-introduction" padding="sm">
            <EditableParagraph
                id="para-tangents-introduction"
                blockId="tangents-introduction"
            >
                A tangent is a line that touches a circle at exactly one point. Two
                circle facts turn that into a construction: a tangent is perpendicular to
                the radius at the point where it touches, and an angle drawn in a
                semicircle is a right angle. Step through the builder below to see the
                second fact at work, then move P and watch the touch points slide round.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-viewer" maxWidth="xl">
        <Block id="tangents-viewer" padding="sm" hasVisualization>
            <ExternalTangentBuilder />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangent-at-point-heading" maxWidth="xl">
        <Block id="tangent-at-point-heading" padding="sm">
            <EditableH3
                id="h3-tangent-at-point-heading"
                blockId="tangent-at-point-heading"
            >
                14. Constructing a Tangent at a Point on a Circle
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangent-at-point-steps" maxWidth="xl">
        <Block id="tangent-at-point-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To construct the tangent that touches a circle at a given point on the circle.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A circle with centre <InlineFormula latex="O" /> and a
                                point <InlineFormula latex="T" /> on the circle.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Join <InlineFormula latex="O" /> to{" "}
                                <InlineFormula latex="T" /> and extend the line a little
                                way beyond <InlineFormula latex="T" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                With the point on <InlineFormula latex="T" /> and a small
                                convenient radius, draw arcs cutting that line on both
                                sides of <InlineFormula latex="T" />. Letter them{" "}
                                <InlineFormula latex="X" /> and{" "}
                                <InlineFormula latex="Y" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                Open the compasses wider than{" "}
                                <InlineFormula latex="TX" />. Draw an arc from{" "}
                                <InlineFormula latex="X" /> and, at the same width, one
                                from <InlineFormula latex="Y" />, crossing at{" "}
                                <InlineFormula latex="Z" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Join <InlineFormula latex="T" /> to{" "}
                                <InlineFormula latex="Z" /> and extend the line both ways
                                past the circle.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="TZ" /> is the tangent at{" "}
                                <InlineFormula latex="T" />, and{" "}
                                <InlineFormula latex="\angle OTZ = 90^\circ" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                The whole construction is Construction 3 carried out on
                                the radius <InlineFormula latex="OT" /> at the point{" "}
                                <InlineFormula latex="T" />. Extending{" "}
                                <InlineFormula latex="OT" /> past{" "}
                                <InlineFormula latex="T" /> in Step 1 is essential —
                                without it there is nowhere to place{" "}
                                <InlineFormula latex="Y" />. A correct tangent touches the
                                circle once and crosses it nowhere.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 14 — Tangent at a point on a circle"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangent-from-external-heading" maxWidth="xl">
        <Block id="tangent-from-external-heading" padding="sm">
            <EditableH3
                id="h3-tangent-from-external-heading"
                blockId="tangent-from-external-heading"
            >
                15. Constructing Tangents to a Circle from an External Point
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangent-from-external-steps" maxWidth="xl">
        <Block id="tangent-from-external-steps" padding="sm">
            <Table
                columns={stageColumns}
                rows={[
                    {
                        cells: [
                            "Aim",
                            "To construct the two tangents drawn to a circle from a point outside it.",
                        ],
                    },
                    {
                        cells: [
                            "Given",
                            <span>
                                A circle with centre <InlineFormula latex="O" /> and a
                                point <InlineFormula latex="P" /> outside the circle.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 1",
                            <span>
                                Join <InlineFormula latex="O" /> to{" "}
                                <InlineFormula latex="P" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 2",
                            <span>
                                Construct the perpendicular bisector of{" "}
                                <InlineFormula latex="OP" /> (Construction 1) and letter
                                its midpoint <InlineFormula latex="M" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 3",
                            <span>
                                With the point on <InlineFormula latex="M" /> and radius{" "}
                                <InlineFormula latex="MO" />, draw a full circle. It will
                                pass through <InlineFormula latex="P" /> as well.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 4",
                            <span>
                                Letter the two points where this new circle cuts the
                                original circle as <InlineFormula latex="A" /> and{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Step 5",
                            <span>
                                Join <InlineFormula latex="P" /> to{" "}
                                <InlineFormula latex="A" /> and{" "}
                                <InlineFormula latex="P" /> to{" "}
                                <InlineFormula latex="B" />.
                            </span>,
                        ],
                    },
                    {
                        cells: [
                            "Result",
                            <span>
                                <InlineFormula latex="PA" /> and{" "}
                                <InlineFormula latex="PB" /> are the two tangents from{" "}
                                <InlineFormula latex="P" />, touching at{" "}
                                <InlineFormula latex="A" /> and{" "}
                                <InlineFormula latex="B" />, and{" "}
                                <InlineFormula latex="PA = PB" />.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#10b981",
                    },
                    {
                        cells: [
                            "Important notes",
                            <span>
                                Because <InlineFormula latex="OP" /> is a diameter of the
                                helper circle, the angle{" "}
                                <InlineFormula latex="\angle OAP" /> is an angle in a
                                semicircle and therefore{" "}
                                <InlineFormula latex="90^\circ" /> — so{" "}
                                <InlineFormula latex="PA" /> is perpendicular to the
                                radius <InlineFormula latex="OA" /> and must be a tangent.
                                There are always exactly two tangents from an outside
                                point. If <InlineFormula latex="P" /> is inside the circle
                                there are none, and the helper circle will not cut the
                                original at all.
                            </span>,
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                ]}
                color="#6366f1"
                caption="Construction 15 — Tangents from an external point"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-practice-heading" maxWidth="xl">
        <Block id="tangents-practice-heading" padding="sm">
            <EditableH3 id="h3-tangents-practice-heading" blockId="tangents-practice-heading">
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-practice-helper-circle" maxWidth="xl">
        <Block id="tangents-practice-helper-circle" padding="sm">
            <MultipleChoiceQuestion
                blockId="tangents-practice-helper-circle"
                questionId="para-tangents-practice-helper-circle"
                question="The helper circle drawn on OP seems to know exactly where the tangents will touch. What makes it land on the right two points?"
                options={[
                    {
                        id: "same-size",
                        label: "It happens to be the same size as the original circle.",
                        feedback: "The two circles are almost never the same size — move P above and watch the helper circle grow while the original stays put.",
                    },
                    {
                        id: "semicircle-right-angle",
                        label: "OP is a diameter of it, so every point on it sees OP at a right angle — and a right angle at the circle is exactly what a tangent needs.",
                        correct: true,
                    },
                    {
                        id: "passes-through-p",
                        label: "It passes through P, and any circle through P would do the same job.",
                        feedback: "Countless circles pass through P. Only the one with OP as its diameter guarantees the right angle at the touch point.",
                    },
                    {
                        id: "centre-m",
                        label: "Its centre M is the midpoint of OP, and midpoints always give tangents.",
                        feedback: "The midpoint matters only because it makes OP a diameter. Ask what a diameter does to every angle drawn on the circle.",
                    },
                ]}
                correctFeedback="Exactly. Angle OAP sits in a semicircle, so it must be 90 degrees — which means PA is perpendicular to the radius OA, and a line perpendicular to a radius at the circle is a tangent."
                hints={[
                    "Step the builder above to the stage where the helper circle appears, and look at what OP is to that circle.",
                    "Recall the circle fact about an angle drawn in a semicircle, then look at the angle at A.",
                    "OP is a diameter of the helper circle, so angle OAP is 90 degrees — and a right angle between the line and the radius is precisely the test for a tangent.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-practice-length" maxWidth="xl">
        <Block id="tangents-practice-length" padding="sm">
            <MultipleChoiceQuestion
                blockId="tangents-practice-length"
                questionId="para-tangents-practice-length"
                question="A circular pond has radius 8 m and a post stands 17 m from its centre. A straight rope is pulled from the post so that it just grazes the edge of the pond. How long is the rope from the post to the grazing point?"
                options={[
                    {
                        id: "nine",
                        label: "9 m",
                        feedback: "That is 17 take away 8, which measures along the line through the centre — but the rope does not run through the centre.",
                    },
                    {
                        id: "fifteen",
                        label: "15 m",
                        correct: true,
                    },
                    {
                        id: "twenty-five",
                        label: "25 m",
                        feedback: "That adds the radius to the distance instead of using the right-angled triangle the tangent creates.",
                    },
                    {
                        id: "cannot-tell",
                        label: "It cannot be worked out without measuring.",
                        feedback: "There is a right angle where the rope touches the pond, and a right angle is all Pythagoras needs.",
                    },
                ]}
                correctFeedback="Yes. The radius, the rope and the line to the post form a right-angled triangle with the 17 m as the hypotenuse, so the rope is the square root of 17 squared take away 8 squared, which is 15 m."
                hints={[
                    "Step the builder above to the last stage and look at the shape made by O, the touch point and P.",
                    "That shape is a right-angled triangle: the radius is one short side, the tangent is the other, and OP is the hypotenuse.",
                    "So the tangent squared equals 17 squared take away 8 squared, which is 289 take away 64.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-practice-one-tangent" maxWidth="xl">
        <Block id="tangents-practice-one-tangent" padding="sm">
            <MultipleChoiceQuestion
                blockId="tangents-practice-one-tangent"
                questionId="para-tangents-practice-one-tangent"
                question="From a point outside a circle you can always draw two tangents. Where must a point be if exactly one tangent can be drawn through it?"
                options={[
                    {
                        id: "very-far",
                        label: "Very far away from the circle.",
                        feedback: "Push P as far out as the slider goes above and count the tangents. Distance never reduces them to one.",
                    },
                    {
                        id: "on-the-circle",
                        label: "On the circle itself.",
                        correct: true,
                    },
                    {
                        id: "inside",
                        label: "Anywhere inside the circle.",
                        feedback: "From inside, every straight line through the point cuts the circle twice, so there are no tangents at all.",
                    },
                    {
                        id: "at-centre",
                        label: "At the centre.",
                        feedback: "The centre is inside the circle, and from inside no line can touch the circle just once.",
                    },
                ]}
                correctFeedback="Right. A point on the circle has exactly one tangent, the one built in Construction 14; outside gives two; inside gives none. The two touch points slide closer together as P comes in, and merge into one just as P reaches the circle."
                hints={[
                    "Drag P inwards with the slider above and watch what the two touch points A and B do as P gets closer.",
                    "The touch points slide towards each other. Imagine continuing until P actually reaches the circle — where would A and B be then?",
                    "They meet at P itself, leaving a single tangent, so a point on the circle is the answer.",
                ]}
            />
        </Block>
    </StackLayout>,
];
