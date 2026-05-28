"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  type: "bot" | "user";
}

const questions = [
  {
    key: "siteType",
    question:
      "👋 Привет! Я помогу собрать информацию для вашего проекта.\n\nРасскажите, какой сайт вы хотите создать?",
  },
  {
    key: "features",
    question:
      "Отлично! Какой функционал должен быть на сайте?\n(блог, магазин, портфолио, лендинг, CRM...)",
  },
  {
    key: "design",
    question:
      "Есть ли примеры сайтов, которые нравятся? Или особые пожелания по дизайну/цветам?",
  },
  {
    key: "deadline",
    question: "Какой у вас бюджет и дедлайн по проекту?",
  },
  {
    key: "contact",
    question:
      "Как с вами связаться? Оставьте email, Telegram или телефон 📱",
  },
];

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(-1);
  const [collected, setCollected] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  // Listen for open-chat event from Hero "Связаться" button
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  // Start chat when opening
  useEffect(() => {
    if (open && messages.length === 0) {
      startChat();
    }
  }, [open]);

  const startChat = () => {
    idRef.current = 0;
    setStep(0);
    setDone(false);
    setMessages([
      {
        id: idRef.current++,
        text: questions[0].question,
        type: "bot",
      },
    ]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || done) return;
    const userText = input.trim();

    setMessages((prev) => [
      ...prev,
      { id: idRef.current++, text: userText, type: "user" },
    ]);
    setInput("");

    const updatedCollected = {
      ...collected,
      [questions[step].key]: userText,
    };
    setCollected(updatedCollected);

    const nextStep = step + 1;
    if (nextStep < questions.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: idRef.current++,
            text: questions[nextStep].question,
            type: "bot",
          },
        ]);
        setStep(nextStep);
      }, 600);
    } else {
      setDone(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: idRef.current++,
            text: "Спасибо! Я получил всю информацию. Скоро свяжусь с вами для уточнения деталей 🚀\n\nХорошего дня! 😊",
            type: "bot",
          },
        ]);
        console.log("📋 Project info collected:", updatedCollected);
      }, 600);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setMessages([]);
      setStep(-1);
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
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm" />
                <div>
                  <p className="text-sm font-medium">Чат с Левоном</p>
                  <p className="text-[10px] text-white/70">Online</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
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

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scroll">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.type === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-border shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Напишите сообщение..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                disabled={done}
                autoFocus
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || done}
                className="p-2 rounded-lg bg-primary text-white disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
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
