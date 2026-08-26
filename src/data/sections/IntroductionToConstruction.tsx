import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH1,
    EditableH3,
    EditableParagraph,
    Table,
} from "@/components/atoms";

export const introductionToConstructionBlocks: ReactElement[] = [
    <StackLayout key="layout-introduction-title" maxWidth="xl">
        <Block id="introduction-title" padding="md">
            <EditableH1 id="h1-introduction-title" blockId="introduction-title">
                Geometric Construction
            </EditableH1>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-overview" maxWidth="xl">
        <Block id="introduction-overview" padding="sm">
            <EditableParagraph
                id="para-introduction-overview"
                blockId="introduction-overview"
            >
                A carpenter marking the exact centre of a plank does not guess and does
                not read a tape measure twice. He swings two arcs and lets them cross.
                That crossing point is exact, and it can be repeated by anyone with the
                same two tools. This is what geometric construction does on paper. In
                this note you will learn to carry out the standard constructions
                accurately with only a straightedge and a pair of compasses. You already
                know how to draw a line of a given length, how to use a protractor, the
                basic angle facts, and how to draw an arc of a set radius. Everything
                here is built from those four skills.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-definition-heading" maxWidth="xl">
        <Block id="introduction-definition-heading" padding="sm">
            <EditableH3
                id="h3-introduction-definition-heading"
                blockId="introduction-definition-heading"
            >
                What Is Geometric Construction?
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-definition-explanation" maxWidth="xl">
        <Block id="introduction-definition-explanation" padding="sm">
            <EditableParagraph
                id="para-introduction-definition-explanation"
                blockId="introduction-definition-explanation"
            >
                Geometric construction is the drawing of an exact figure using only a
                straightedge and a pair of compasses. The straightedge draws straight
                lines; the compasses draw arcs and carry distances. Every point in the
                figure is fixed by lines and arcs crossing each other, never by a
                measurement read off a scale.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-purpose-heading" maxWidth="xl">
        <Block id="introduction-purpose-heading" padding="sm">
            <EditableH3
                id="h3-introduction-purpose-heading"
                blockId="introduction-purpose-heading"
            >
                Why Do We Use Construction?
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-purpose-explanation" maxWidth="xl">
        <Block id="introduction-purpose-explanation" padding="sm">
            <EditableParagraph
                id="para-introduction-purpose-explanation"
                blockId="introduction-purpose-explanation"
            >
                A ruler can only be read to about half a millimetre, and a protractor to
                about half a degree. A construction has no such limit: the point where
                two arcs cross is exact. Construction also proves the figure is correct,
                because each arc is justified by a property of circles or triangles.
                Engineers, architects and machinists rely on the same reasoning, which is
                why examinations ask for the arcs and not for the measurements.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-comparison-heading" maxWidth="xl">
        <Block id="introduction-comparison-heading" padding="sm">
            <EditableH3
                id="h3-introduction-comparison-heading"
                blockId="introduction-comparison-heading"
            >
                Ordinary Drawing or Geometrical Construction?
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-introduction-comparison-table" maxWidth="xl">
        <Block id="introduction-comparison-table" padding="sm">
            <Table
                columns={[
                    { header: "Ordinary drawing", align: "left" },
                    { header: "Geometrical construction", align: "left" },
                ]}
                rows={[
                    {
                        cells: [
                            "Any instrument may be used, including a set square or a protractor.",
                            "Only a straightedge and a pair of compasses are allowed.",
                        ],
                    },
                    {
                        cells: [
                            "Points are placed by measuring and reading a scale.",
                            "Points are fixed where lines and arcs cross.",
                        ],
                    },
                    {
                        cells: [
                            "Accuracy is limited by how well the scale can be read.",
                            "Accuracy is exact in principle; only the pencil adds error.",
                        ],
                    },
                    {
                        cells: [
                            "Working marks are usually rubbed out to tidy the drawing.",
                            "All arcs must be left on the page as evidence of the method.",
                        ],
                        highlight: true,
                        highlightColor: "#f59e0b",
                    },
                    {
                        cells: [
                            "The result looks right.",
                            "The result can be proved right.",
                        ],
                    },
                ]}
                color="#6366f1"
                caption="Table 1 — The two kinds of drawing compared"
            />
        </Block>
    </StackLayout>,
];
