import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadePage() {
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
              data-testid="privacy-title"
            >
              Política de Privacidade
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                <strong>Última atualização:</strong> Dezembro de 2024
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introdução</h2>
                <p className="text-slate-600 leading-relaxed">
                  O ImobFollow valoriza a privacidade dos seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossa plataforma de infraestrutura de IA para o mercado imobiliário.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Informações que Coletamos</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Coletamos os seguintes tipos de informações:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Dados de Cadastro:</strong> Nome, e-mail, telefone, empresa, CNPJ/CPF</li>
                  <li><strong>Dados de Uso:</strong> Interações com a plataforma, conversas com leads, métricas de desempenho</li>
                  <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, dispositivo utilizado</li>
                  <li><strong>Dados de Leads:</strong> Informações dos contatos gerenciados através da plataforma</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Como Utilizamos suas Informações</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Fornecer e melhorar nossos serviços de IA</li>
                  <li>Processar classificação e follow-up automático de leads</li>
                  <li>Personalizar sua experiência na plataforma</li>
                  <li>Enviar comunicações sobre o serviço e atualizações</li>
                  <li>Garantir a segurança e integridade da plataforma</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Compartilhamento de Dados</h2>
                <p className="text-slate-600 leading-relaxed">
                  Não vendemos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços que nos auxiliam na operação da plataforma, sempre sob acordos de confidencialidade. Também podemos compartilhar informações quando exigido por lei ou para proteger nossos direitos legais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Segurança dos Dados</h2>
                <p className="text-slate-600 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo criptografia de dados em trânsito e em repouso, controles de acesso rigorosos e monitoramento contínuo de segurança.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Seus Direitos (LGPD)</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                  <li>Solicitar portabilidade dos dados</li>
                  <li>Revogar consentimento a qualquer momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Retenção de Dados</h2>
                <p className="text-slate-600 leading-relaxed">
                  Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Dados de leads e conversas são mantidos enquanto sua conta estiver ativa. Após o encerramento da conta, os dados são excluídos em até 90 dias, exceto quando houver obrigação legal de retenção.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Cookies e Tecnologias Similares</h2>
                <p className="text-slate-600 leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Alterações nesta Política</h2>
                <p className="text-slate-600 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas através da plataforma ou por e-mail. Recomendamos revisar esta política regularmente.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Contato do Encarregado (DPO)</h2>
                <p className="text-slate-600 leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato com nosso Encarregado de Proteção de Dados:
                </p>
                <p className="text-slate-600 mt-2">
                  <strong>E-mail:</strong> <a href="mailto:privacidade@imobfollow.com" className="text-emerald-600 hover:text-emerald-700">privacidade@imobfollow.com</a>
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
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/privacidade" 
              className="text-slate-900 font-medium"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
