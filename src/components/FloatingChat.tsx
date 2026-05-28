"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/hooks/useLanguageStore";

interface Message {
  id: number;
  text: string;
  type: "bot" | "user";
}

const BOT_FIRST = "chat.bot.welcome";
const BOT_CONTACT = "chat.bot.contact";
const BOT_CONTACT_INVALID = "chat.bot.contact.invalid";
const BOT_QS = ["chat.bot.q1", "chat.bot.q2", "chat.bot.q3", "chat.bot.q4"];
const BOT_DONE = "chat.bot.done";

function hasNameAndPhone(text: string): boolean {
  const hasLetters = /[a-zA-Zа-яА-Я]{2,}/.test(text);
  const hasDigits = /\d{5,}/.test(text);
  return hasLetters && hasDigits;
}

export default function FloatingChat() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(-2);
  const [collected, setCollected] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialLangRef = useRef("");

  // Listen for open-chat event
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Start chat when opening
  useEffect(() => {
    if (open && messages.length === 0) {
      startChat();
    }
  }, [open]);

  const startChat = () => {
    idRef.current = 0;
    initialLangRef.current = document.documentElement.lang || "ru";

    // First message: just a greeting
    const welcomeMsg: Message = {
      id: idRef.current++,
      text: t(BOT_FIRST),
      type: "bot",
    };
    // Second message: ask for contact
    const contactMsg: Message = {
      id: idRef.current++,
      text: t(BOT_CONTACT),
      type: "bot",
    };

    setMessages([welcomeMsg, contactMsg]);
    setStep(0);
    setDone(false);
    setCollected({});
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || done) return;
    const userText = input.trim();

    // Add user message
    const userMsg: Message = { id: idRef.current++, text: userText, type: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Step 0: contact info — validate name + phone
    if (step === 0) {
      if (!hasNameAndPhone(userText)) {
        // Invalid — ask again, DON'T advance step
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { id: idRef.current++, text: t(BOT_CONTACT_INVALID), type: "bot" },
          ]);
        }, 600);
        return;
      }

      // Valid contact — save and proceed to first project question
      const updated = { ...collected, contact: userText };
      setCollected(updated);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: idRef.current++, text: t(BOT_QS[0]), type: "bot" },
        ]);
        setStep(1);
      }, 600);
      return;
    }

    // Steps 1-4: project questions
    const qIndex = step - 1;
    const qKeys = ["siteType", "features", "design", "deadline"];
    const updated = { ...collected, [qKeys[qIndex]]: userText };
    setCollected(updated);

    const nextStep = step + 1;
    if (nextStep <= 4) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: idRef.current++, text: t(BOT_QS[nextStep - 1]), type: "bot" },
        ]);
        setStep(nextStep);
      }, 600);
    } else {
      setDone(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: idRef.current++, text: t(BOT_DONE), type: "bot" },
        ]);
        console.log("📋 Project info collected:", updated);
      }, 600);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setMessages([]);
      setStep(-2);
      setCollected({});
      setDone(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="relative w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Open chat"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
            {/* Chat icon */}
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-10rem)] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Telegram-style Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#3390EC] text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                  L
                </div>
                <div>
                  <p className="text-sm font-semibold">Левон</p>
                  <p className="text-[11px] text-white/80">был(а) недавно</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 bg-[#E8ECEF] dark:bg-[#1C1C1E]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[82%] px-3.5 py-2 text-sm leading-relaxed whitespace-pre-line ${
                    msg.type === "user"
                      ? "bg-[#3390EC] text-white rounded-[18px] rounded-br-[6px]"
                      : "bg-white dark:bg-[#2C2C2E] text-foreground rounded-[18px] rounded-bl-[6px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-t border-border bg-card shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={t("chat.placeholder")}
                className="flex-1 bg-muted dark:bg-[#2C2C2E] rounded-full px-4 py-2 text-sm outline-none placeholder:text-muted-foreground/60"
                disabled={done}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || done}
                className="w-9 h-9 rounded-full bg-[#3390EC] text-white disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0 flex items-center justify-center cursor-pointer"
              >
                <svg
                  className="w-4 h-4 rotate-45 ml-0.5 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
