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
import { AngleBuilder } from "./visuals/AngleBuilder";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

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
                the arc or cut in half. Choose an angle in the builder below and press
                through it one arc at a time; the protractor comes on at the end only to
                confirm what the arcs already decided.
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
        <Block id="angles-viewer" padding="sm" hasVisualization>
            <AngleBuilder />
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

    <StackLayout key="layout-angles-practice-heading" maxWidth="xl">
        <Block id="angles-practice-heading" padding="sm">
            <EditableH3 id="h3-angles-practice-heading" blockId="angles-practice-heading">
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angles-practice-hundred-five" maxWidth="xl">
        <Block id="angles-practice-hundred-five" padding="sm">
            <MultipleChoiceQuestion
                blockId="angles-practice-hundred-five"
                questionId="para-angles-practice-hundred-five"
                question="A roof truss drawing calls for an angle of 105 degrees, constructed with arcs only. Which route reaches it?"
                options={[
                    {
                        id: "bisect-90-120",
                        label: "Construct the 90 degree ray and the 120 degree ray, then bisect between them.",
                        correct: true,
                    },
                    {
                        id: "bisect-60-120",
                        label: "Construct the 60 and 120 marks and bisect between them.",
                        feedback: "That lands halfway between 60 and 120, which is the 90 degree position — 15 degrees short.",
                    },
                    {
                        id: "step-again",
                        label: "Construct 120 degrees and step the same radius round the arc once more.",
                        feedback: "Each step adds a further 60 degrees, so that takes you to 180, not 105.",
                    },
                    {
                        id: "bisect-twice",
                        label: "Construct 120 degrees and bisect it twice.",
                        feedback: "Bisecting 120 gives 60, and bisecting again gives 30. Halving always makes the angle smaller.",
                    },
                ]}
                correctFeedback="Yes. 105 sits exactly halfway between 90 and 120, so once both of those rays are on the page one more bisection finishes the job."
                hints={[
                    "Build 90 and then 120 in the builder above and look at the gap left between the two rays.",
                    "The gap between the 90 and 120 rays is 30 degrees. Halving that gap adds 15 to the 90.",
                    "90 plus half of the 30 degree gap is 105, so bisect between the 90 and 120 rays.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angles-practice-not-constructible" maxWidth="xl">
        <Block id="angles-practice-not-constructible" padding="sm">
            <MultipleChoiceQuestion
                blockId="angles-practice-not-constructible"
                questionId="para-angles-practice-not-constructible"
                question="Every angle in this section came from stepping 60 degrees round an arc or halving a gap. Using only those two moves, which of these angles can you NOT reach?"
                options={[
                    {
                        id: "fifteen",
                        label: "15 degrees",
                        feedback: "60 halves to 30, and 30 halves to 15, so this one is reachable.",
                    },
                    {
                        id: "seventy",
                        label: "70 degrees",
                        correct: true,
                    },
                    {
                        id: "hundred-fifty",
                        label: "150 degrees",
                        feedback: "Three steps of 60 give 180, and halving the gap between 120 and 180 lands on 150.",
                    },
                    {
                        id: "twenty-two-half",
                        label: "22 and a half degrees",
                        feedback: "90 halves to 45 and 45 halves to 22 and a half, so this one is reachable.",
                    },
                ]}
                correctFeedback="Correct. Stepping gives multiples of 60 and halving keeps dividing by 2, so you can reach 60, 30, 15 and so on — but 70 would need the 60 degree angle split into three, and that cannot be done with arcs at all."
                hints={[
                    "Write down what stepping gives you: 60, 120, 180. Then keep halving each gap and list what appears.",
                    "Halving 60 repeatedly gives 30, 15, 7.5 — never 70 or anything that needs a third of an angle.",
                    "Three of these are built from stepping and halving. The odd one out would require cutting 60 into three equal parts, which arcs cannot do.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-angles-practice-radius-size" maxWidth="xl">
        <Block id="angles-practice-radius-size" padding="sm">
            <MultipleChoiceQuestion
                blockId="angles-practice-radius-size"
                questionId="para-angles-practice-radius-size"
                question="Ben constructs 60 degrees with his compasses opened to 3 cm. Zara constructs it with hers opened to 8 cm, so her arcs are far larger. Whose angle is bigger, and why?"
                options={[
                    {
                        id: "zara-bigger",
                        label: "Zara's, because a bigger radius sweeps out a bigger angle.",
                        feedback: "A bigger radius makes a longer arc, but the angle at the vertex is a different thing from the length of the arc.",
                    },
                    {
                        id: "ben-bigger",
                        label: "Ben's, because a tighter radius closes the arms up.",
                        feedback: "The radius does not pull the arms together — check what shape the two arcs actually create at the vertex.",
                    },
                    {
                        id: "equal-equilateral",
                        label: "Neither — both are exactly 60 degrees, because each construction builds an equilateral triangle and every equilateral triangle has 60 degree corners.",
                        correct: true,
                    },
                    {
                        id: "depends-line",
                        label: "It depends on how long they drew the base line.",
                        feedback: "The base line can be any length at all; extending it changes nothing about the angle at B.",
                    },
                ]}
                correctFeedback="Exactly. BP, PQ and QB are all the same length whatever that length is, so the triangle is equilateral either way — which is why the instruction says any convenient radius."
                hints={[
                    "Build 60 degrees in the builder above and look at the three lengths BP, PQ and QB.",
                    "All three of those lengths are the compass opening, so they are equal no matter which opening was chosen.",
                    "A triangle with three equal sides has three equal angles of 60 degrees, and that is true for a small triangle and a large one alike.",
                ]}
            />
        </Block>
    </StackLayout>,
];
