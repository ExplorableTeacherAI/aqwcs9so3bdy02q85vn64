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
import { TriangleBuilder } from "./visuals/TriangleBuilder";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

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
                three, and the order in which to put them on the page. Choose a case in
                the builder, step through the stages, then change the given numbers and
                see which sets of measurements refuse to make a triangle at all.
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
        <Block id="triangles-viewer" padding="sm" hasVisualization>
            <TriangleBuilder />
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

    <StackLayout key="layout-triangles-practice-heading" maxWidth="xl">
        <Block id="triangles-practice-heading" padding="sm">
            <EditableH3
                id="h3-triangles-practice-heading"
                blockId="triangles-practice-heading"
            >
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangles-practice-impossible" maxWidth="xl">
        <Block id="triangles-practice-impossible" padding="sm">
            <MultipleChoiceQuestion
                blockId="triangles-practice-impossible"
                questionId="para-triangles-practice-impossible"
                question="Four sets of three lengths are handed out for construction. One of them is a trick, and the arcs for it will never cross. Which set is it?"
                options={[
                    {
                        id: "six-seven-eight",
                        label: "6 cm, 7 cm and 8 cm",
                        feedback: "6 and 7 together reach 13 cm, comfortably past the 8 cm base, so these arcs cross easily.",
                    },
                    {
                        id: "four-five-ten",
                        label: "4 cm, 5 cm and 10 cm",
                        correct: true,
                    },
                    {
                        id: "three-four-five",
                        label: "3 cm, 4 cm and 5 cm",
                        feedback: "3 and 4 together reach 7 cm, which is more than the 5 cm base. This is the familiar right-angled triangle.",
                    },
                    {
                        id: "five-five-nine",
                        label: "5 cm, 5 cm and 9 cm",
                        feedback: "5 and 5 reach 10 cm against a 9 cm base, so the arcs just manage to cross and make a long thin triangle.",
                    },
                ]}
                correctFeedback="Correct. 4 and 5 only reach 9 cm between them, which cannot bridge a 10 cm base, so the two arcs stop short of each other and no third corner ever appears."
                hints={[
                    "Set the builder above to the three-sides case and try each set of numbers on the sliders.",
                    "For each set, take the two shorter lengths and add them. Compare the total with the longest length.",
                    "The two shorter sides must add up to more than the longest side. Only one of these four sets fails that test.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangles-practice-included" maxWidth="xl">
        <Block id="triangles-practice-included" padding="sm">
            <MultipleChoiceQuestion
                blockId="triangles-practice-included"
                questionId="para-triangles-practice-included"
                question="A question gives PQ = 6 cm, QR = 5 cm and angle P = 40 degrees. Sami starts by drawing PQ and setting 40 degrees at P, then tries to cut off QR from there. Why does his method not work?"
                options={[
                    {
                        id: "angle-too-small",
                        label: "40 degrees is too small an angle to construct.",
                        feedback: "40 degrees is a perfectly ordinary angle to set with a protractor here. The problem is where the angle sits.",
                    },
                    {
                        id: "not-included",
                        label: "The two given sides meet at Q, not at P, so angle P is not the angle between them and the standard method does not apply.",
                        correct: true,
                    },
                    {
                        id: "wrong-order",
                        label: "He should have drawn QR first instead of PQ.",
                        feedback: "Either given side can be the base. Swapping them does not change which corner the given angle is at.",
                    },
                    {
                        id: "needs-three-sides",
                        label: "You always need three sides to construct a triangle.",
                        feedback: "Two sides and an angle are enough — but only when the angle is in the right place.",
                    },
                ]}
                correctFeedback="Exactly. QR runs from Q, not from P, so cutting 5 cm along the ray at P marks a point that has nothing to do with R. Angle Q would have been the included angle."
                hints={[
                    "Open the two-sides-and-the-included-angle case above and look at which corner the angle slider controls.",
                    "In the builder the given sides are AB and AC, and the angle sits at A — the corner they share. Now check which corner PQ and QR share.",
                    "PQ and QR both pass through Q, so Q is the included angle. The given angle at P is somewhere else entirely.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-triangles-practice-angle-sum" maxWidth="xl">
        <Block id="triangles-practice-angle-sum" padding="sm">
            <MultipleChoiceQuestion
                blockId="triangles-practice-angle-sum"
                questionId="para-triangles-practice-angle-sum"
                question="A worksheet asks for a triangle with BC = 8 cm, angle B = 110 degrees and angle C = 75 degrees. What will happen on the page?"
                options={[
                    {
                        id: "long-thin",
                        label: "A very long thin triangle will appear, running off the edge of the paper.",
                        feedback: "That is what happens when the two angles come to just under 180. Add these two and see whether they do.",
                    },
                    {
                        id: "rays-diverge",
                        label: "The two rays lean away from each other and never meet, because the given angles already come to more than 180 degrees.",
                        correct: true,
                    },
                    {
                        id: "third-angle-negative",
                        label: "The triangle works, but the third angle comes out as 5 degrees.",
                        feedback: "Check the arithmetic: 110 and 75 do not leave 5 degrees behind out of 180.",
                    },
                    {
                        id: "obtuse-fine",
                        label: "It works normally — a triangle is allowed to have an obtuse angle.",
                        feedback: "A triangle may certainly have one obtuse angle, but it cannot have two angles that together exceed the whole angle sum.",
                    },
                ]}
                correctFeedback="Yes. 110 and 75 add to 185, already past the 180 degrees a triangle has to share out, so the rays open away from each other and no third corner can exist."
                hints={[
                    "Set the one-side-and-two-angles case above to 110 and 75 and read what the builder says.",
                    "The three angles of a triangle add to 180. Work out what is left for angle A after 110 and 75 are taken.",
                    "There is nothing left — the two given angles have already used more than 180 degrees between them.",
                ]}
            />
        </Block>
    </StackLayout>,
];
