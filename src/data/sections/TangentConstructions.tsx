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
                semicircle is a right angle. The first fact handles a point on the
                circle, the second handles a point outside it.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tangents-viewer" maxWidth="xl">
        <Block id="tangents-viewer" padding="sm">
            <VisualOptionCards
                blockId="tangents-viewer"
                intro="Pick how your students will explore tangents."
                cards={[
                    {
                        id: "tangent-touch-test",
                        title: "A line pivoting at a point on a circle until it just touches",
                        looks: "A circle with its centre and one marked point, a radius drawn to that point, and a line through it that can be swung round.",
                        manipulate: "Students swing the line and watch how many times it crosses the circle, stopping when it touches only once, and read the angle it makes with the radius.",
                        reveals: "The touching position is exactly where the line sits at right angles to the radius, which is why a tangent is a perpendicular construction.",
                        recommended: true,
                    },
                    {
                        id: "external-tangent-builder",
                        title: "The two tangents from an outside point built stage by stage",
                        looks: "A circle, a point outside it, the joining line, its midpoint, the helper circle drawn on that line, and the two touch points where the circles cross.",
                        manipulate: "Students step through the stages, then drag the outside point nearer and further and watch the two touch points move.",
                        reveals: "That the helper circle finds the touch points automatically, and the two tangent lengths stay equal wherever the point sits.",
                    },
                    {
                        id: "semicircle-right-angle",
                        title: "The right angle in a semicircle, shown as the reason the helper circle works",
                        looks: "The helper circle drawn on the joining line as diameter, with the touch point on it and the right angle at that point marked.",
                        manipulate: "Students drag the touch point around the helper circle and watch the angle stay at 90 degrees.",
                        reveals: "Why any point on the helper circle sees the joining line at a right angle, so the crossing points must be the touch points.",
                    },
                ]}
            />
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
];
