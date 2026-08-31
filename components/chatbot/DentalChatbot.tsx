"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  X, 
  RotateCcw, 
  Sparkles, 
  AlertCircle, 
  ShieldCheck, 
  ChevronDown,
  Minus
} from "lucide-react";
import { Message, INITIAL_WELCOME_MESSAGE } from "./chatbotData";
import { getBotResponse } from "./chatbotUtils";
import ChatMessage from "./ChatMessage";
import QuickQuestions from "./QuickQuestions";
import ChatInput from "./ChatInput";

export default function DentalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    launcherRef.current?.focus();
  };

  const handleClearChat = () => {
    setMessages([
      {
        ...INITIAL_WELCOME_MESSAGE,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setShowQuickQuestions(true);
    setIsTyping(false);
  };

  const handleSendMessage = (text: string) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append user message
    const userMsg: Message = {
      id: "user-" + Date.now(),
      sender: "user",
      text,
      timestamp: timeNow
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate typing delay (500ms - 800ms) for natural feel
    const delay = Math.floor(Math.random() * 300) + 500;

    setTimeout(() => {
      const match = getBotResponse(text);
      const botMsg: Message = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: match.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: match.actions
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, delay);
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group">
          {/* Tooltip */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Chat with BrightSmile Assistant
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
          </div>

          <button
            ref={launcherRef}
            onClick={handleOpen}
            aria-label="Open BrightSmile dental care chat assistant"
            className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-gradient-to-tr from-teal-700 via-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-teal-700/25 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/30"
          >
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-300 ring-2 ring-teal-700 animate-pulse" />
            </div>
          </button>
        </div>
      )}

      {/* Compact Chat Window Modal */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          role="dialog"
          aria-label="BrightSmile Dental Assistant Chat"
          aria-modal="true"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[540px] sm:h-[560px] max-h-[calc(100vh-32px)] bg-white rounded-3xl border border-slate-200/80 shadow-2xl flex flex-col overflow-hidden animate-fade-in"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white flex items-center gap-1.5">
                  <span>BrightSmile Assistant</span>
                </h3>
                <p className="text-[11px] text-teal-300/90 leading-tight">Dental care information</p>
              </div>
            </div>

            {/* Header action icons */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Clear Chat History"
                aria-label="Clear chat history"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={handleClose}
                title="Close Chat"
                aria-label="Close chat window"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                onActionClick={() => {
                  // Keep chat open so patient can continue navigating or close at will
                }}
              />
            ))}

            {/* Quick Suggestions block */}
            {showQuickQuestions && (
              <QuickQuestions
                onSelect={(q) => handleSendMessage(q)}
                disabled={isTyping}
              />
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-end justify-start animate-fade-in">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-100 border border-slate-200/80 rounded-2xl rounded-bl-xs px-3.5 py-2.5 flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="text-[11px]">Assistant is typing</span>
                  <span className="flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Medical Disclaimer Banner */}
          <div className="bg-slate-100/90 border-t border-slate-200/70 px-3 py-1.5 text-[10px] text-slate-500 text-center leading-tight">
            <span>General info only • Not formal medical advice • For urgent emergencies call 911.</span>
          </div>

          {/* Chat Input Bar */}
          <ChatInput
            isOpen={isOpen}
            onSend={handleSendMessage}
            disabled={isTyping}
          />
        </div>
      )}
    </>
  );
}
