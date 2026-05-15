import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LeadCapturePopupProps {
  pdfLink?: string; // URL do PDF do Mapa dos 7 Sinais
  emailDestino?: string; // Email para receber os leads
  whatsappNumber?: string; // Número WhatsApp para receber os leads
}

export default function LeadCapturePopup({
  pdfLink = 'https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf', // SUBSTITUIR COM SEU LINK DO PDF
  emailDestino = 'seu-email@lunara.com.br', // SUBSTITUIR COM SEU EMAIL
  whatsappNumber = '5516999999999', // SUBSTITUIR COM SEU NÚMERO WHATSAPP (formato: 55 + DDD + número)
}: LeadCapturePopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [contatoPor, setContatoPor] = useState<'email' | 'whatsapp'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Mostrar pop-up após 15 segundos (menos intrusivo) e apenas uma vez por sessão
  useEffect(() => {
    const popupShown = sessionStorage.getItem('leadPopupShown');
    if (popupShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('leadPopupShown', 'true');
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Detectar tentativa de sair da página (mover mouse para fechar aba)
  // Apenas mostrar se ainda não foi exibido
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible) {
        const popupShown = sessionStorage.getItem('leadPopupShown');
        if (!popupShown) {
          setIsVisible(true);
          sessionStorage.setItem('leadPopupShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação básica
      if (!nome.trim() || !contato.trim()) {
        setSubmitMessage('Por favor, preencha todos os campos.');
        setIsSubmitting(false);
        return;
      }

      // Enviar via FormSubmit (serviço gratuito)
      // FormSubmit recebe dados via POST e envia para o email configurado
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('contato', contato);
      formData.append('contatoPor', contatoPor);
      formData.append('_captcha', 'false'); // Desabilitar CAPTCHA para melhor UX
      formData.append('_next', pdfLink); // Redirecionar para o PDF após envio

      // IMPORTANTE: Substitua "seu-email@lunara.com.br" pela sua conta FormSubmit
      // Acesse https://formsubmit.co/ e configure seu email
      const response = await fetch('https://formsubmit.co/seu-email@lunara.com.br', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Se FormSubmit redirecionar para o PDF, o usuário será levado lá automaticamente
        setSubmitMessage('✅ Sucesso! Você será redirecionado para o Mapa dos 7 Sinais...');
        
        // Backup: Se o redirecionamento não funcionar, abrir o PDF manualmente após 1.5s
        setTimeout(() => {
          window.open(pdfLink, '_blank');
          setIsVisible(false);
          resetForm();
        }, 1500);
      } else {
        setSubmitMessage('❌ Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitMessage('❌ Erro ao enviar. Verifique sua conexão.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setNome('');
    setContato('');
    setContatoPor('email');
    setSubmitMessage('');
  };

  const handleClose = () => {
    setIsVisible(false);
    resetForm();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop escuro */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Pop-up Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Botão Fechar */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Fechar pop-up"
          >
            <X size={24} className="text-gray-600" />
          </button>

          {/* Conteúdo do Pop-up */}
          <div className="p-8 pt-12">
            {/* Título */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D1B69] mb-3 text-center">
              Aguarde! Antes de sair...
            </h2>

            {/* Subtítulo */}
            <p className="text-base md:text-lg text-[#2DD4BF] font-semibold text-center mb-6">
              Receba GRÁTIS o "Mapa dos 7 Sinais" e descubra o que está drenando sua energia
            </p>

            {/* Descrição Breve */}
            <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
              Identifique os 7 principais sinais de que seu corpo está em estado de alerta energético e o que fazer a respeito.
            </p>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Nome */}
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2DD4BF] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Campo Contato */}
              <div>
                <input
                  type="text"
                  placeholder="Seu melhor contato (email ou WhatsApp)"
                  value={contato}
                  onChange={(e) => setContato(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2DD4BF] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Seletor de Contato */}
              <div className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contatoPor"
                    value="email"
                    checked={contatoPor === 'email'}
                    onChange={(e) => setContatoPor(e.target.value as 'email' | 'whatsapp')}
                    className="w-4 h-4 accent-[#2DD4BF]"
                    disabled={isSubmitting}
                  />
                  <span className="text-sm text-gray-700 font-medium">E-mail</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contatoPor"
                    value="whatsapp"
                    checked={contatoPor === 'whatsapp'}
                    onChange={(e) => setContatoPor(e.target.value as 'email' | 'whatsapp')}
                    className="w-4 h-4 accent-[#2DD4BF]"
                    disabled={isSubmitting}
                  />
                  <span className="text-sm text-gray-700 font-medium">WhatsApp</span>
                </label>
              </div>

              {/* Mensagem de Status */}
              {submitMessage && (
                <div className={`text-sm text-center p-2 rounded ${
                  submitMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Botão CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#6B46C1] to-[#2DD4BF] hover:from-[#5a3aa8] hover:to-[#22b8a8] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Enviando...' : 'SIM! QUERO O MAPA DOS 7 SINAIS GRÁTIS'}
              </button>
            </form>

            {/* Política de Privacidade */}
            <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
              Seus dados estão seguros. Não enviaremos spam. Você receberá um {contatoPor === 'email' ? 'e-mail' : 'WhatsApp'} com o link para download do PDF.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * INSTRUÇÕES DE CONFIGURAÇÃO:
 * 
 * 1. CONFIGURAR EMAIL (FormSubmit):
 *    - Acesse https://formsubmit.co/
 *    - Insira seu email e siga as instruções
 *    - Copie o email fornecido e substitua "seu-email@lunara.com.br" na linha:
 *      const response = await fetch('https://formsubmit.co/seu-email@lunara.com.br', {
 * 
 * 2. CONFIGURAR LINK DO PDF:
 *    - Faça upload do PDF em um serviço de hospedagem (Google Drive, Dropbox, AWS S3, etc.)
 *    - Obtenha o link de compartilhamento público
 *    - Substitua "https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf" na prop pdfLink
 * 
 * 3. USAR O COMPONENTE NO Home.tsx:
 *    - Importe: import LeadCapturePopup from '@/components/LeadCapturePopup';
 *    - Adicione antes do fechamento de </> em Home.tsx:
 *      <LeadCapturePopup 
 *        pdfLink="https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf"
 *        emailDestino="seu-email@lunara.com.br"
 *        whatsappNumber="5516999999999"
 *      />
 * 
 * 4. OTIMIZAÇÕES DE PERSISTÊNCIA:
 *    - Pop-up aparece após 15 segundos (não 10) para ser menos intrusivo
 *    - Aparece apenas UMA VEZ por sessão (usa sessionStorage)
 *    - Se o usuário fechar, não reaparece até recarregar a página
 *    - Gatilho de "tentativa de sair" ainda funciona se não foi exibido
 * 
 * 5. TESTE:
 *    - Abra o site em incógnito
 *    - Aguarde 15 segundos para ver o pop-up
 *    - Feche e recarregue a página - não deve aparecer novamente
 *    - Abra em outra aba incógnito - deve aparecer (nova sessão)
 */
