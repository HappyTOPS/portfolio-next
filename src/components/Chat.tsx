"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/hooks/useLanguageStore";

interface Message {
  id: number;
  text: string;
  type: "bot" | "user";
  time: string;
}

export default function Chat() {
  const { t, lang } = useLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [ready, setReady] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    setMessages([
      {
        id: idRef.current++,
        text: t("chat.bot.welcome"),
        type: "bot",
        time: new Date().toLocaleTimeString(),
      },
    ]);
    setReady(true);
  }, []);

  // Reset chat when language changes
  useEffect(() => {
    if (ready) {
      setMessages([
        {
          id: idRef.current++,
          text: t("chat.bot.welcome"),
          type: "bot",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }
  }, [lang]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: idRef.current++,
      text: input.trim(),
      type: "user",
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Auto-reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: idRef.current++,
          text: t("chat.bot.welcome"),
          type: "bot",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-muted/50">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-8">
            {t("chat.title")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Messages */}
            <div className="h-[300px] sm:h-[400px] overflow-y-auto p-4 space-y-3 chat-scroll">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.type === "user"
                        ? "bg-foreground text-background rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1 ${
                        msg.type === "user"
                          ? "text-background/60"
                          : "text-muted-foreground"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-border">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={t("chat.placeholder")}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="p-2 rounded-lg bg-primary text-white disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
