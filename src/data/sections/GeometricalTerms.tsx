import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableParagraph,
    InlineFormula,
    Table,
} from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

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
                job as bisecting an angle. Learn these nine terms now and every
                instruction later in this note will tell you exactly what to draw.
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
        <Block id="terms-diagram" padding="sm">
            <VisualOptionCards
                blockId="terms-diagram"
                intro="Pick how your students will see these nine terms on a diagram."
                cards={[
                    {
                        id: "one-figure-highlight",
                        title: "One figure in which each term lights up as it is named",
                        looks: "A single diagram holding a line, a segment, a ray, two perpendicular lines, two parallel lines and a bisected angle, all drawn together and lettered.",
                        manipulate: "Students click a term from a list and that part of the figure is highlighted while the rest fades back.",
                        reveals: "How the terms relate to each other in one picture, and that a segment, a line and a ray differ only in where they stop.",
                        recommended: true,
                    },
                    {
                        id: "line-segment-ray-compare",
                        title: "Line, segment and ray shown side by side and stretched",
                        looks: "Three drawings through the same two lettered points, one with arrows at both ends, one with neither, one with a single arrow.",
                        manipulate: "Students drag an end outwards and watch which of the three keeps growing and which cannot.",
                        reveals: "The endpoints, not the direction of drawing, are what tells the three apart.",
                    },
                    {
                        id: "bisector-comparison",
                        title: "The two bisectors set against each other",
                        looks: "A segment with its perpendicular bisector on the left, an angle with its bisector on the right, with the equal parts marked.",
                        manipulate: "Students drag an endpoint or an arm and watch both bisectors move to stay correct.",
                        reveals: "Both cut something in half, but one cuts a length and the other cuts an angle.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
