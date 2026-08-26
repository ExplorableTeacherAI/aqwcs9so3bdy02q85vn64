import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph } from "@/components/atoms";

export const wrappingUpBlocks: ReactElement[] = [
    <StackLayout key="layout-wrapping-up-title" maxWidth="xl">
        <Block id="wrapping-up-title" padding="md">
            <EditableH2 id="h2-wrapping-up-title" blockId="wrapping-up-title">
                Wrapping Up
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-summary" maxWidth="xl">
        <Block id="wrapping-up-summary" padding="sm">
            <EditableParagraph
                id="para-wrapping-up-summary"
                blockId="wrapping-up-summary"
            >
                Fifteen constructions, and underneath them only two moves: swing equal
                arcs from two points and join where they cross, or step one arc width
                around a bigger arc. The perpendicular bisector, the angle bisector, the
                60 degree angle and the right angle are the four you truly have to know;
                everything else in this note is one of those repeated, halved, or applied
                to a radius.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-next" maxWidth="xl">
        <Block id="wrapping-up-next" padding="sm">
            <EditableParagraph id="para-wrapping-up-next" blockId="wrapping-up-next">
                So keep the arcs on the page. They are not mess to be tidied away — they
                are the argument that your figure is right, and the marker reads them the
                way a reader reads working in algebra. That same reasoning carries
                straight on into loci and scale drawing, where a shape is fixed not by
                what you measure, but by the conditions every point on it must satisfy.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
