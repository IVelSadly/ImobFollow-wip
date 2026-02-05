import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { Mail, ArrowRight, Sparkles, MessageCircle, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatSimulation from "@/components/ChatSimulation";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Por favor, insira seu e-mail");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${API}/waitlist`, { email });
      if (response.data.success) {
        toast.success(response.data.message);
        setIsSuccess(true);
        setEmail("");
      }
    } catch (error) {
      if (error.response?.status === 422) {
        toast.error("Por favor, insira um e-mail válido");
      } else {
        toast.error("Erro ao processar sua solicitação. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden grain">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Navbar */}
      <nav className="relative z-10 w-full py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>

            <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl tracking-tighter text-slate-950">
                Imob<span className="text-emerald-600">Follow</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-8">

              {/* Badge */}
              <motion.div variants={staggerItem}>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800 shadow-sm animate-pulse-soft"
                  data-testid="coming-soon-badge">

                  <Sparkles className="w-4 h-4" />
                  Em breve
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={staggerItem}
                className="font-['Plus_Jakarta_Sans'] font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-950 leading-[1.1]"
                data-testid="hero-headline">

                Transforme Leads Imobiliários em{" "}
                <span className="text-emerald-600">Vendas com IA</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={staggerItem}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
                data-testid="hero-subheadline">

                Centralize seus contatos. Deixe nossa IA classificar, responder e fazer o follow-up automático{" "}
                <span className="font-semibold text-slate-700">(1, 3 e 7 dias)</span> para você nunca mais perder uma venda.
              </motion.p>

              {/* Features */}
              <motion.div variants={staggerItem} className="flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Classificação Automática</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Follow-up Inteligente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Inbox Unificado</span>
                </div>
              </motion.div>

              {/* CTA Form */}
              <motion.div variants={staggerItem}>
                {isSuccess ?
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl"
                  data-testid="success-message">

                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-800">Você está na lista!</p>
                      <p className="text-sm text-emerald-600">Entraremos em contato em breve.</p>
                    </div>
                  </motion.div> :

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-testid="waitlist-form">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 pr-4 py-6 rounded-full border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent text-base"
                      data-testid="email-input" />

                    </div>
                    <Button
                    type="submit"
                    disabled={isLoading}
                    className="rounded-full bg-slate-950 text-white px-8 py-6 font-semibold hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl transition-all duration-200"
                    data-testid="submit-button">

                      {isLoading ?
                    <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </span> :

                    <span className="flex items-center gap-2">
                          Entrar na Lista
                          <ArrowRight className="w-4 h-4" />
                        </span>
                    }
                    </Button>
                  </form>
                }
              </motion.div>
            </motion.div>

            {/* Right - Chat Simulation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative">

              <ChatSimulation />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-8 px-6 md:px-12 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="!text-sm text-slate-500" data-testid="footer-copyright">© 2026 ImobFollow. Infraestrutura de IA para Imobiliárias.

          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/termos"
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
              data-testid="terms-link">

              Termos de Uso
            </Link>
            <Link
              to="/privacidade"
              className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
              data-testid="privacy-link">

              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>);

}