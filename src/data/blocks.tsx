import { type ReactElement } from "react";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

import { introductionToConstructionBlocks } from "./sections/IntroductionToConstruction";
import { constructionInstrumentsBlocks } from "./sections/ConstructionInstruments";
import { geometricalTermsBlocks } from "./sections/GeometricalTerms";
import { perpendicularConstructionsBlocks } from "./sections/PerpendicularConstructions";
import { bisectorsAndParallelsBlocks } from "./sections/BisectorsAndParallels";
import { constructingAnglesBlocks } from "./sections/ConstructingAngles";
import { tangentConstructionsBlocks } from "./sections/TangentConstructions";
import { triangleConstructionsBlocks } from "./sections/TriangleConstructions";
import { wrappingUpBlocks } from "./sections/WrappingUp";

export const blocks: ReactElement[] = [
    ...introductionToConstructionBlocks,
    ...constructionInstrumentsBlocks,
    ...geometricalTermsBlocks,
    ...perpendicularConstructionsBlocks,
    ...bisectorsAndParallelsBlocks,
    ...constructingAnglesBlocks,
    ...tangentConstructionsBlocks,
    ...triangleConstructionsBlocks,
    ...wrappingUpBlocks,
];
