import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    Table,
} from "@/components/atoms";
import { InstrumentToolkitDiagram } from "./visuals/InstrumentToolkitDiagram";
import { MultipleChoiceQuestion } from "./practice/MultipleChoiceQuestion";

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
                narrow. Click each instrument in the picture below to see exactly where
                it is allowed and where it is not — that line is what separates a
                construction earning full marks from one that earns none.
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
        <Block id="instruments-diagram" padding="sm" hasVisualization>
            <InstrumentToolkitDiagram />
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

    <StackLayout key="layout-instruments-practice-heading" maxWidth="xl">
        <Block id="instruments-practice-heading" padding="sm">
            <EditableH3
                id="h3-instruments-practice-heading"
                blockId="instruments-practice-heading"
            >
                Check Your Understanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-practice-protractor" maxWidth="xl">
        <Block id="instruments-practice-protractor" padding="sm">
            <MultipleChoiceQuestion
                blockId="instruments-practice-protractor"
                questionId="para-instruments-practice-protractor"
                question="A question says: Construct an angle of 60 degrees at the point B. Nadia sets her protractor on the line and draws the angle. It measures 60 degrees exactly, and her line is beautifully neat. Her teacher gives her no marks. Why?"
                options={[
                    {
                        id: "not-accurate",
                        label: "Her angle is not really 60 degrees, because protractors are inaccurate.",
                        feedback: "Her angle is genuinely 60 degrees — accuracy is not the problem here.",
                    },
                    {
                        id: "no-construction",
                        label: "The word construct means arcs only, so she has produced a drawing rather than a construction.",
                        correct: true,
                    },
                    {
                        id: "wrong-side",
                        label: "She should have drawn the angle below the line rather than above it.",
                        feedback: "Either side of the line is acceptable; the side is not what cost her the marks.",
                    },
                    {
                        id: "no-labels",
                        label: "She forgot to label the vertex B.",
                        feedback: "Labelling matters, but it is not the reason a whole answer scores nothing.",
                    },
                ]}
                correctFeedback="Exactly right. Construct is an instruction about method, not about the finished picture: the marks are for the arcs that prove the angle was built, and a protractor leaves none behind."
                hints={[
                    "Look again at the protractor card in the picture above and read what it may never be used for.",
                    "Click the protractor, then the compasses. One of them is allowed to produce an angle a question asks you to construct; the other is only allowed to check one afterwards.",
                    "The protractor panel says it may never produce an angle the question asks you to construct — so nothing on Nadia's page shows a construction happened.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-practice-slipped-hinge" maxWidth="xl">
        <Block id="instruments-practice-slipped-hinge" padding="sm">
            <MultipleChoiceQuestion
                blockId="instruments-practice-slipped-hinge"
                questionId="para-instruments-practice-slipped-hinge"
                question="Halfway through a construction, Sam's compass hinge slips and opens about 2 mm wider. He carries on, his arcs still cross, and he draws a clean line through the crossings. What is true of his answer?"
                options={[
                    {
                        id: "fine-because-crossed",
                        label: "It is fine, because the arcs still crossed and he could draw the line.",
                        feedback: "Crossing is not enough on its own — the crossings have to be in the right place.",
                    },
                    {
                        id: "wrong-but-looks-right",
                        label: "The crossings are no longer equally far from both ends, so the line is wrong even though it looks convincing.",
                        correct: true,
                    },
                    {
                        id: "only-2mm",
                        label: "A 2 mm slip is smaller than the pencil line, so it cannot change anything.",
                        feedback: "The slip is small, but it moves both crossing points the same way, which tilts the whole line.",
                    },
                    {
                        id: "fixable-by-measuring",
                        label: "He can fix it by measuring the line with a ruler at the end.",
                        feedback: "Measuring afterwards would only tell him it is wrong; it would not make the construction valid.",
                    },
                ]}
                correctFeedback="Yes. These constructions work because two distances are exactly equal, so a width that changes mid-step breaks the very thing that makes the answer correct — and nothing on the page shows it."
                hints={[
                    "Click the compasses in the picture above and read the second line under never use it for.",
                    "Ask what job the fixed width is doing. It is what makes the two arcs from each end reach the same distance.",
                    "Once one width is wider, the crossing points are no longer the same distance from both ends, so the line through them is not the true bisector — however tidy it looks.",
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-instruments-practice-rubbed-arcs" maxWidth="xl">
        <Block id="instruments-practice-rubbed-arcs" padding="sm">
            <MultipleChoiceQuestion
                blockId="instruments-practice-rubbed-arcs"
                questionId="para-instruments-practice-rubbed-arcs"
                question="Two students hand in identical-looking figures. Priya leaves her faint arcs showing; Tom rubs his out so the page looks tidy. Priya scores full marks and Tom loses most of his. What does that tell you about what the arcs are for?"
                options={[
                    {
                        id: "neatness-penalty",
                        label: "Tidy work is penalised, so it is better to leave the page messy.",
                        feedback: "Neatness is never penalised — something else is being rewarded here.",
                    },
                    {
                        id: "arcs-are-working",
                        label: "The arcs are the working: they are the only evidence on the page that the figure was constructed rather than measured.",
                        correct: true,
                    },
                    {
                        id: "arcs-decorative",
                        label: "The arcs are decoration that examiners happen to like.",
                        feedback: "They are not decoration — think about what a marker can and cannot tell from a finished line alone.",
                    },
                    {
                        id: "tom-was-wrong",
                        label: "Tom's figure must have been inaccurate somewhere.",
                        feedback: "The question says the two figures look identical, so accuracy is not what separates them.",
                    },
                ]}
                correctFeedback="That is the heart of it. A bare line could have come from a ruler, a set square or a lucky guess; the arcs are what show the method, exactly like working shown in an algebra answer."
                hints={[
                    "Click the pencil in the picture above and read what it must never be used for.",
                    "Imagine you are the marker looking only at Tom's finished line. Can you tell how he produced it?",
                    "Without the arcs there is no way to tell a construction from a measurement, so the method marks have nothing to attach to.",
                ]}
            />
        </Block>
    </StackLayout>,
];
