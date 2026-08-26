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
import { GeometricalTermsFigure } from "./visuals/GeometricalTermsFigure";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

export const geometricalTermsBlocks: ReactElement[] = [
    <StackLayout key="layout-terms-title" maxWidth="xl">
        <Block id="terms-title" padding="md">
            <EditableH2 id="h2-terms-title" blockId="terms-title">
                The Words You Need
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-introduction" maxWidth="xl">
        <Block id="terms-introduction" padding="sm">
            <EditableParagraph
                id="para-terms-introduction"
                blockId="terms-introduction"
            >
                Construction questions are written in a fixed vocabulary. Read the words
                carefully: <InlineFormula latex="AB" /> as a line, a line segment and a
                ray are three different things, and bisecting a segment is not the same
                job as bisecting an angle. The table names all nine terms, and the figure
                below it holds all nine at once — press a term and watch which part of
                the figure it belongs to.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-table" maxWidth="xl">
        <Block id="terms-table" padding="sm">
            <Table
                columns={[
                    { header: "Term", align: "left", width: 190 },
                    { header: "Meaning", align: "left" },
                    { header: "Written as", align: "center", width: 110 },
                ]}
                rows={[
                    {
                        cells: [
                            "Line",
                            "A straight path with no end in either direction. On paper we draw part of it and put arrows on both ends.",
                            <InlineFormula latex="\overleftrightarrow{AB}" />,
                        ],
                    },
                    {
                        cells: [
                            "Line segment",
                            "The part of a line between two endpoints. It has a definite length, so it can be measured.",
                            <InlineFormula latex="\overline{AB}" />,
                        ],
                    },
                    {
                        cells: [
                            "Ray",
                            "A straight path that starts at one point and goes on forever in one direction. The arms of an angle are rays.",
                            <InlineFormula latex="\overrightarrow{AB}" />,
                        ],
                    },
                    {
                        cells: [
                            "Midpoint",
                            "The point on a segment that divides it into two equal parts.",
                            <InlineFormula latex="AM = MB" />,
                        ],
                    },
                    {
                        cells: [
                            "Perpendicular lines",
                            "Two lines that meet at a right angle.",
                            <InlineFormula latex="AB \perp CD" />,
                        ],
                    },
                    {
                        cells: [
                            "Parallel lines",
                            "Two lines in the same plane that never meet, however far they are extended. They stay the same distance apart.",
                            <InlineFormula latex="AB \parallel CD" />,
                        ],
                    },
                    {
                        cells: [
                            "Bisect",
                            "To cut into two equal parts. What is cut may be a segment or an angle.",
                            "—",
                        ],
                    },
                    {
                        cells: [
                            "Angle bisector",
                            "A ray from the vertex that splits an angle into two equal angles.",
                            <InlineFormula latex="\angle ABD = \angle DBC" />,
                        ],
                        highlight: true,
                        highlightColor: "#6366f1",
                    },
                    {
                        cells: [
                            "Perpendicular bisector",
                            "A line that passes through the midpoint of a segment and is perpendicular to it. It does two jobs at once.",
                            <InlineFormula latex="AM = MB,\ \ell \perp AB" />,
                        ],
                        highlight: true,
                        highlightColor: "#6366f1",
                    },
                ]}
                color="#6366f1"
                caption="Table 4 — The nine terms used in every construction question"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-diagram" maxWidth="xl">
        <Block id="terms-diagram" padding="sm" hasVisualization>
            <GeometricalTermsFigure />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-practice-heading" maxWidth="xl">
        <Block id="terms-practice-heading" padding="sm">
            <EditableH3 id="h3-terms-practice-heading" blockId="terms-practice-heading">
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-practice-two-bisectors" maxWidth="xl">
        <Block id="terms-practice-two-bisectors" padding="sm">
            <MultipleChoiceQuestion
                blockId="terms-practice-two-bisectors"
                questionId="para-terms-practice-two-bisectors"
                question="One exam question asks for the perpendicular bisector of RS. The next asks for the bisector of angle RST. Leo says these are the same instruction written two ways. What has he missed?"
                options={[
                    {
                        id: "same-thing",
                        label: "Nothing — both mean cut RS in half.",
                        feedback: "Look at what follows the word bisector in each question: one names a segment, the other names an angle.",
                    },
                    {
                        id: "length-versus-angle",
                        label: "The first cuts a length in half and crosses it at a right angle; the second cuts an angle in half and need not be perpendicular to anything.",
                        correct: true,
                    },
                    {
                        id: "order-only",
                        label: "They are the same construction, just started from a different end of RS.",
                        feedback: "Starting point is not the issue — the two questions are asking you to halve two different kinds of thing.",
                    },
                    {
                        id: "one-is-a-ray",
                        label: "The only difference is that one answer is a ray and the other is a line.",
                        feedback: "That is a real difference, but it is not the main one. Ask what each construction actually cuts in half.",
                    },
                ]}
                correctFeedback="Exactly. The word after bisector tells you what is being halved — a length or an angle — and only the perpendicular bisector also promises a right angle."
                hints={[
                    "Press Bisect in the figure above and watch how many places light up.",
                    "Now press Perpendicular bisector, then Angle bisector, and compare what each one highlights.",
                    "One highlights the halves of AB and the right angle at M; the other highlights the two equal angles at V. Halving a length and halving an angle are different jobs.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-practice-length" maxWidth="xl">
        <Block id="terms-practice-length" padding="sm">
            <MultipleChoiceQuestion
                blockId="terms-practice-length"
                questionId="para-terms-practice-length"
                question="A worksheet asks for the length of XY. Why does this instruction only make sense if XY is a line segment, and not if XY is a line or a ray?"
                options={[
                    {
                        id: "too-long-to-measure",
                        label: "A line is simply too long to fit on a ruler.",
                        feedback: "It is not about the ruler being too short — think about whether the line stops anywhere at all.",
                    },
                    {
                        id: "no-endpoints",
                        label: "A line has no endpoints and a ray has only one, so neither has a length to measure; a segment stops at both ends.",
                        correct: true,
                    },
                    {
                        id: "lines-are-imaginary",
                        label: "Lines are imaginary and cannot be drawn at all.",
                        feedback: "Lines are drawn all the time — the arrowheads are there to tell you something about their ends.",
                    },
                    {
                        id: "rays-are-curved",
                        label: "A ray curves away, so its length keeps changing.",
                        feedback: "A ray is perfectly straight. Look again at how many ends it has.",
                    },
                ]}
                correctFeedback="Right. The arrowheads are the whole message: an arrowhead means no end, and something with no end cannot be given a length."
                hints={[
                    "Press Line, then Ray, then Line segment above and count the arrowheads on each.",
                    "Two arrowheads means no ends at all; one arrowhead means one end; no arrowheads means two ends.",
                    "Only the segment stops at both ends, so only the segment has a measurable distance from one end to the other.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-terms-practice-forty-degrees" maxWidth="xl">
        <Block id="terms-practice-forty-degrees" padding="sm">
            <MultipleChoiceQuestion
                blockId="terms-practice-forty-degrees"
                questionId="para-terms-practice-forty-degrees"
                question="Amara draws a line through the midpoint of CD. It cuts CD into two equal halves, but it meets CD at an angle of 40 degrees. Has she drawn the perpendicular bisector of CD?"
                options={[
                    {
                        id: "yes-halved",
                        label: "Yes — it passes through the midpoint, which is what a bisector does.",
                        feedback: "It certainly bisects CD. But the name of what she was asked for has two words in it, not one.",
                    },
                    {
                        id: "no-needs-right-angle",
                        label: "No — it bisects CD but is not perpendicular to it, and the perpendicular bisector must do both.",
                        correct: true,
                    },
                    {
                        id: "no-wrong-midpoint",
                        label: "No — the midpoint must be wrong, because a correct midpoint always gives a right angle.",
                        feedback: "Her midpoint is fine. Any number of lines can pass through it at any angle you like.",
                    },
                    {
                        id: "yes-close-enough",
                        label: "Yes — 40 degrees is close enough for a hand-drawn figure.",
                        feedback: "40 degrees is nowhere near 90 degrees, and a construction is never judged by whether it is close enough.",
                    },
                ]}
                correctFeedback="Yes. Countless lines pass through the midpoint; exactly one of them also meets CD at a right angle, and only that one is the perpendicular bisector."
                hints={[
                    "Press Perpendicular bisector in the figure above and note every mark that lights up.",
                    "Two things light up at M: the equal-length ticks and the small right-angle square. Amara's line only earns one of them.",
                    "Her line gives equal halves but no right angle, so it is a bisector of CD and nothing more.",
                ]}
            />
        </Block>
    </StackLayout>,
];
