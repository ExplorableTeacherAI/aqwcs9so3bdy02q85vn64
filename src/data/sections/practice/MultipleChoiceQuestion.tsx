import { type ReactNode, useState } from "react";
import { EditableParagraph, Button, RadioGroup, RadioGroupItem } from "@/components/atoms";

export interface ChoiceOption {
    id: string;
    label: string;
    correct?: boolean;
    /** Shown when this particular wrong answer is chosen. */
    feedback?: string;
}

interface MultipleChoiceQuestionProps {
    /** Block id of the parent Block, so the question stem stays teacher-editable. */
    blockId: string;
    /** Unique id for the editable question stem. */
    questionId: string;
    question: ReactNode;
    options: ChoiceOption[];
    correctFeedback: string;
    /** Escalating help: a nudge, then a direction, then the way to see the answer. */
    hints: string[];
}

export const MultipleChoiceQuestion = ({
    blockId,
    questionId,
    question,
    options,
    correctFeedback,
    hints,
}: MultipleChoiceQuestionProps) => {
    const [choice, setChoice] = useState<string>("");
    const [attempts, setAttempts] = useState(0);
    const [checked, setChecked] = useState(false);

    const chosen = options.find((option) => option.id === choice);
    const isCorrect = checked && Boolean(chosen?.correct);
    const isWrong = checked && Boolean(chosen) && !chosen?.correct;
    const hint = hints[Math.min(Math.max(attempts - 1, 0), hints.length - 1)];

    const handleCheck = () => {
        if (!chosen) return;
        setChecked(true);
        if (!chosen.correct) setAttempts((previous) => previous + 1);
    };

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4">
            <EditableParagraph id={questionId} blockId={blockId}>
                {question}
            </EditableParagraph>

            <RadioGroup
                className="mt-3 space-y-2"
                value={choice}
                onValueChange={(value) => {
                    setChoice(value);
                    setChecked(false);
                }}
            >
                {options.map((option) => (
                    <label
                        key={option.id}
                        htmlFor={`${questionId}-${option.id}`}
                        className="flex cursor-pointer items-start gap-3 rounded-md border border-slate-200 p-3 text-sm text-slate-700 hover:bg-slate-50"
                    >
                        <RadioGroupItem
                            id={`${questionId}-${option.id}`}
                            value={option.id}
                            className="mt-0.5"
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </RadioGroup>

            <div className="mt-3 flex items-center gap-3">
                <Button onClick={handleCheck} disabled={!choice}>
                    Check my answer
                </Button>
                {attempts > 0 && !isCorrect && (
                    <span className="text-xs text-slate-500">
                        Attempt {attempts} — have another go
                    </span>
                )}
            </div>

            {isCorrect && (
                <div className="mt-3 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-900">
                    {correctFeedback}
                </div>
            )}

            {isWrong && (
                <div className="mt-3 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
                    {chosen?.feedback ? <span>{chosen.feedback} </span> : null}
                    <span>{hint}</span>
                </div>
            )}
        </div>
    );
};
