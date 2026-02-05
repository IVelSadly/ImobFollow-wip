import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="w-full py-6 px-6 md:px-12 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" data-testid="logo-link">
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl tracking-tighter text-slate-950">
              Imob<span className="text-emerald-600">Follow</span>
            </span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            data-testid="back-home-link"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 md:px-12 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <h1 
              className="font-['Plus_Jakarta_Sans'] font-bold text-3xl md:text-4xl text-slate-950 mb-8"
              data-testid="terms-title"
            >
              Termos de Uso
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                <strong>Última atualização:</strong> Dezembro de 2024
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
                <p className="text-slate-600 leading-relaxed">
                  Ao acessar e utilizar a plataforma ImobFollow, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Descrição do Serviço</h2>
                <p className="text-slate-600 leading-relaxed">
                  O ImobFollow é uma plataforma de infraestrutura de IA desenvolvida para o mercado imobiliário, oferecendo funcionalidades de automação de atendimento, classificação de leads, follow-up automático e centralização de comunicações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Cadastro e Conta</h2>
                <p className="text-slate-600 leading-relaxed">
                  Para utilizar nossos serviços, você deverá fornecer informações precisas e completas durante o processo de cadastro. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Uso Aceitável</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ao utilizar o ImobFollow, você concorda em:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Não utilizar o serviço para fins ilegais ou não autorizados</li>
                  <li>Não tentar acessar áreas restritas do sistema</li>
                  <li>Não transmitir vírus ou códigos maliciosos</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                  <li>Não enviar spam ou comunicações não solicitadas através da plataforma</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Propriedade Intelectual</h2>
                <p className="text-slate-600 leading-relaxed">
                  Todo o conteúdo, funcionalidades e tecnologia da plataforma ImobFollow são de propriedade exclusiva da empresa e estão protegidos por leis de direitos autorais e propriedade intelectual.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Limitação de Responsabilidade</h2>
                <p className="text-slate-600 leading-relaxed">
                  O ImobFollow não se responsabiliza por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso da plataforma. Nossa responsabilidade total está limitada ao valor pago pelo usuário nos últimos 12 meses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Modificações</h2>
                <p className="text-slate-600 leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado da plataforma após as modificações constitui aceitação dos novos termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Contato</h2>
                <p className="text-slate-600 leading-relaxed">
                  Para questões sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@imobfollow.com" className="text-emerald-600 hover:text-emerald-700">contato@imobfollow.com</a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 ImobFollow. Infraestrutura de IA para Imobiliárias.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/termos" 
              className="text-slate-900 font-medium"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/privacidade" 
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
