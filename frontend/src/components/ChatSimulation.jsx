import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, CheckCheck, Clock } from "lucide-react";

const messages = [
  {
    id: 1,
    type: "incoming",
    sender: "Maria Silva",
    text: "Olá! Vi o apartamento de 3 quartos no Jardins. Ainda está disponível?",
    time: "10:32"
  },
  {
    id: 2,
    type: "ai",
    sender: "ImobFollow IA",
    text: "Olá Maria! Sim, o apartamento está disponível. Você prefere agendar uma visita presencial ou virtual?",
    time: "10:32",
    status: "sent"
  },
  {
    id: 3,
    type: "incoming",
    sender: "Maria Silva",
    text: "Presencial, por favor! Pode ser amanhã às 14h?",
    time: "10:33"
  }
];

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="flex items-center gap-2 px-4 py-2"
  >
    <div className="flex items-center gap-2 bg-slate-100 rounded-2xl px-4 py-3">
      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
        <Bot className="w-3.5 h-3.5 text-emerald-600" />
      </div>
      <span className="text-sm text-slate-600 font-medium">Digitando</span>
      <div className="flex gap-1">
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

const MessageBubble = ({ message, index }) => {
  const isIncoming = message.type === "incoming";
  const isAI = message.type === "ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.8 }}
      className={`flex gap-2 ${isIncoming ? "justify-start" : "justify-end"}`}
    >
      {isIncoming && (
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-slate-600" />
        </div>
      )}
      
      <div className={`max-w-[75%] ${isIncoming ? "" : "order-first"}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isIncoming
              ? "bg-white border border-slate-200 rounded-tl-sm"
              : isAI
              ? "bg-emerald-600 text-white rounded-tr-sm"
              : "bg-slate-900 text-white rounded-tr-sm"
          }`}
        >
          {isAI && (
            <div className="flex items-center gap-1.5 mb-1">
              <Bot className="w-3.5 h-3.5" />
              <span className="text-xs font-medium text-emerald-100">IA</span>
            </div>
          )}
          <p className={`text-sm leading-relaxed ${isIncoming ? "text-slate-700" : "text-white"}`}>
            {message.text}
          </p>
        </div>
        <div className={`flex items-center gap-1 mt-1 ${isIncoming ? "justify-start" : "justify-end"}`}>
          <span className="text-xs text-slate-400">{message.time}</span>
          {!isIncoming && message.status === "sent" && (
            <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />
          )}
        </div>
      </div>

      {isAI && (
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-emerald-600" />
        </div>
      )}
    </motion.div>
  );
};

export default function ChatSimulation() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= messages.length) {
      // Reset after all messages shown
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }

    const nextMessage = messages[currentIndex];
    
    // Show typing indicator before AI messages
    if (nextMessage.type === "ai" && currentIndex > 0) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, nextMessage]);
        setCurrentIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(typingTimer);
    }

    // Show message after delay
    const messageTimer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, nextMessage]);
      setCurrentIndex(prev => prev + 1);
    }, currentIndex === 0 ? 500 : 1500);

    return () => clearTimeout(messageTimer);
  }, [currentIndex]);

  return (
    <div className="relative" data-testid="chat-simulation">
      {/* Glow effect behind */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-2xl transform scale-95" />
      
      {/* Main card */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h3 className="text-white font-semibold text-sm">Inbox ImobFollow</h3>
                <p className="text-slate-400 text-xs">3 conversas ativas</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full flex items-center gap-1">
                <Bot className="w-3 h-3" />
                IA Ativa
              </span>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="p-4 space-y-4 min-h-[320px] max-h-[400px] overflow-y-auto bg-slate-50/50">
          <AnimatePresence>
            {visibleMessages.map((msg, idx) => (
              <MessageBubble key={msg.id} message={msg} index={idx} />
            ))}
          </AnimatePresence>
          
          <AnimatePresence>
            {isTyping && <TypingIndicator />}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Follow-up automático em 1 dia</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-slate-400/10 to-slate-600/10 rounded-full blur-xl"
      />
    </div>
  );
}
