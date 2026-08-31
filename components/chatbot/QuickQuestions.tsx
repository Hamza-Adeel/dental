import React from "react";
import { HelpCircle } from "lucide-react";
import { QUICK_QUESTIONS } from "./chatbotData";

interface QuickQuestionsProps {
  onSelect: (questionText: string) => void;
  disabled?: boolean;
}

export default function QuickQuestions({ onSelect, disabled }: QuickQuestionsProps) {
  return (
    <div className="space-y-2 pt-1">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-1">
        <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
        <span>Suggested Questions</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {QUICK_QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(q.text)}
            className="text-left text-xs font-medium bg-white hover:bg-teal-50/80 text-slate-700 hover:text-teal-900 border border-slate-200/80 hover:border-teal-300 px-3 py-1.5 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-98 disabled:opacity-60 disabled:pointer-events-none"
          >
            {q.label}
          </button>
        ))}
      </div>
    </div>
  );
}
