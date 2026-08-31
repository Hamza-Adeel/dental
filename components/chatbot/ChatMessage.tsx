import React from "react";
import Link from "next/link";
import { Sparkles, User, ExternalLink, ArrowRight } from "lucide-react";
import { Message } from "./chatbotData";

interface ChatMessageProps {
  message: Message;
  onActionClick?: () => void;
}

export default function ChatMessage({ message, onActionClick }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <div className={`flex gap-2.5 items-end ${isBot ? "justify-start" : "justify-end"} animate-fade-in`}>
      {/* Bot Avatar */}
      {isBot && (
        <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      )}

      <div className={`max-w-[82%] space-y-2`}>
        {/* Bubble */}
        <div
          className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
            isBot
              ? "bg-slate-100/90 text-slate-800 rounded-bl-xs border border-slate-200/70 shadow-2xs"
              : "bg-teal-600 text-white rounded-br-xs shadow-md shadow-teal-600/15"
          }`}
        >
          <p className="whitespace-pre-wrap">{message.text}</p>
        </div>

        {/* Action CTAs (if attached to bot reply) */}
        {isBot && message.actions && message.actions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {message.actions.map((act, idx) => {
              if (act.isExternal) {
                return (
                  <a
                    key={idx}
                    href={act.href}
                    onClick={onActionClick}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white border border-teal-200 text-teal-800 hover:bg-teal-50 px-2.5 py-1 rounded-lg transition-colors shadow-2xs"
                  >
                    <span>{act.label}</span>
                    <ExternalLink className="w-3 h-3 text-teal-600" />
                  </a>
                );
              }

              return (
                <Link
                  key={idx}
                  href={act.href}
                  onClick={onActionClick}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white border border-teal-200 text-teal-800 hover:bg-teal-50 px-2.5 py-1 rounded-lg transition-colors shadow-2xs"
                >
                  <span>{act.label}</span>
                  <ArrowRight className="w-3 h-3 text-teal-600" />
                </Link>
              );
            })}
          </div>
        )}

        {/* Timestamp */}
        <div className={`text-[10px] text-slate-400 px-1 ${isBot ? "text-left" : "text-right"}`}>
          {message.timestamp}
        </div>
      </div>

      {/* User Avatar */}
      {!isBot && (
        <div className="w-7 h-7 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center shrink-0 mb-1 shadow-xs">
          <User className="w-3.5 h-3.5" />
        </div>
      )}
    </div>
  );
}
