import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    Table,
} from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

export const constructionInstrumentsBlocks: ReactElement[] = [
    <StackLayout key="layout-instruments-title" maxWidth="xl">
        <Block id="instruments-title" padding="md">
            <EditableH2 id="h2-instruments-title" blockId="instruments-title">
                Your Construction Toolkit
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-introduction" maxWidth="xl">
        <Block id="instruments-introduction" padding="sm">
            <EditableParagraph
                id="para-instruments-introduction"
                blockId="instruments-introduction"
            >
                Three instruments do all the work: a straightedge, a pair of compasses
                and a sharp pencil. A protractor has its own place, but that place is
                narrow. Knowing exactly what each tool is for is what separates a
                construction that earns full marks from one that does not.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-table" maxWidth="xl">
        <Block id="instruments-table" padding="sm">
            <Table
                columns={[
                    { header: "Instrument", align: "left", width: 170 },
                    { header: "Purpose", align: "left" },
                    { header: "Correct use", align: "left" },
                ]}
                rows={[
                    {
                        cells: [
                            "Straightedge",
                            "Joins two points with a straight line. It is a ruler used without reading its scale.",
                            "Hold it still with the flat of your hand, draw once in a single stroke, and extend the line a little beyond both points.",
                        ],
                    },
                    {
                        cells: [
                            "Pair of compasses",
                            "Draws arcs and circles, and carries a fixed distance from one place to another.",
                            "Tighten the hinge so the width cannot slip, press the point in firmly, and turn the compasses by the handle, not by the pencil arm.",
                        ],
                    },
                    {
                        cells: [
                            "Pencil",
                            "Makes the marks. Its thickness is the whole of your error.",
                            "Use a hard pencil (2H or H) sharpened to a fine point, and keep a second sharp pencil in the compasses.",
                        ],
                    },
                    {
                        cells: [
                            "Protractor",
                            "Measures and draws angles by reading a scale.",
                            "Use it to check a finished angle, and to set a given angle in triangle work where the question allows measuring. Never use it inside a construction that asks for arcs.",
                        ],
                        highlight: true,
                        highlightColor: "#ef4444",
                    },
                ]}
                color="#6366f1"
                caption="Table 2 — What each instrument is for"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-diagram" maxWidth="xl">
        <Block id="instruments-diagram" padding="sm">
            <VisualOptionCards
                blockId="instruments-diagram"
                intro="Pick how your students will see the instruments and the habits that go with them."
                cards={[
                    {
                        id: "compass-in-use",
                        title: "A pair of compasses shown in use, with the four common mistakes acted out one at a time",
                        looks: "A large clear drawing of compasses standing on a line, with a labelled hinge, point and pencil arm. Beside it a small panel names one mistake at a time.",
                        manipulate: "Students step through the mistakes one by one: a slipping hinge, an arc drawn too short, arcs rubbed out, and a protractor used instead of arcs. The drawing changes to show what the page then looks like.",
                        reveals: "Each bad habit produces a figure that is visibly wrong or impossible to mark, so the rule is not just something to memorise.",
                        targetsMisconception: "Students change the compass width midway, draw arcs too short, rub out arcs, or measure instead of using arcs",
                        recommended: true,
                    },
                    {
                        id: "labelled-toolkit",
                        title: "A labelled picture of all four instruments side by side",
                        looks: "The straightedge, compasses, pencil and protractor drawn next to each other, each with its parts labelled.",
                        manipulate: "Students click an instrument to see what it may and may not be used for in a construction.",
                        reveals: "Which tool is allowed at which moment, and why the protractor sits apart from the other three.",
                    },
                    {
                        id: "arc-length-slider",
                        title: "One construction repeated with arcs of different lengths",
                        looks: "A line segment with two arcs swung from its ends. A control makes the arcs longer or shorter.",
                        manipulate: "Students shorten the arcs until the pair no longer crosses, then lengthen them again.",
                        reveals: "The crossing point only exists when the arcs are drawn generously, which is why short arcs waste time.",
                        targetsMisconception: "Students draw arcs too short, so the arcs never cross",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-rules-heading" maxWidth="xl">
        <Block id="instruments-rules-heading" padding="sm">
            <EditableH3
                id="h3-instruments-rules-heading"
                blockId="instruments-rules-heading"
            >
                Four Rules That Keep a Construction Valid
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-rules-table" maxWidth="xl">
        <Block id="instruments-rules-table" padding="sm">
            <Table
                columns={[
                    { header: "Rule", align: "left", width: 260 },
                    { header: "Why it matters", align: "left" },
                ]}
                rows={[
                    {
                        cells: [
                            "Leave every arc on the page.",
                            "The arcs are the working. A finished figure with no arcs scores no method marks, because there is no evidence the figure was constructed rather than measured.",
                        ],
                    },
                    {
                        cells: [
                            "Do not change the compass width until the step tells you to.",
                            "Most constructions work because two distances are equal. Nudging the hinge between arcs destroys that equality, and the figure is wrong even though it looks fine.",
                        ],
                    },
                    {
                        cells: [
                            "Draw arcs long enough to cross well.",
                            "A crossing point can only be marked where two arcs actually meet. Short, timid arcs mean starting the step again.",
                        ],
                    },
                    {
                        cells: [
                            "Do not measure what you are asked to construct.",
                            "Setting an angle with a protractor when arcs were required is not a construction at all, however neat the result looks.",
                        ],
                    },
                ]}
                color="#ef4444"
                caption="Table 3 — The habits that decide the marks"
            />
        </Block>
    </StackLayout>,
];
