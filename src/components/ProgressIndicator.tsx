import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: { label: string; description: string }[];
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  steps,
}: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted || isCurrent
                      ? "bg-[#030213] text-white"
                      : "bg-[#ececf0] text-[#717182]"
                  } ${isCurrent ? "shadow-[0px_0px_0px_4px_rgba(3,2,19,0.2)]" : ""}`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>
                <p
                  className={`text-sm transition-colors ${
                    isCurrent ? "text-[#030213]" : "text-[#717182]"
                  }`}
                >
                  {step.label}
                </p>
              </div>
              {stepNumber < totalSteps && (
                <div
                  className={`h-0.5 flex-1 mx-2 transition-all duration-300 ${
                    isCompleted ? "bg-[#030213]" : "bg-[#ececf0]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
