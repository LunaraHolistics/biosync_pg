import { useState } from 'react';
import { ChevronDown, Zap, Moon, Heart, Dumbbell, Users, TrendingUp, Award, CheckCircle2, AlertCircle, Smile } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadCapturePopup from '@/components/LeadCapturePopup';
import { toast } from 'sonner';

/**
 * DESIGN PHILOSOPHY: Futurismo Orgânico + Alta Conversão
 * - Modelo: BAB (Before-After-Bridge)
 * - Paleta: Verde-água (#2DD4BF) + Azul-marinho (#0F172A) + Vermelho (#EF4444)
 * - Foco: Empatia + Urgência + Clareza
 * - Tipografia: Poppins (títulos) + Inter (corpo)
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual');

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de agendar meu Check-up Bioenergético Completo com o BioSync.';
    const whatsappUrl = `https://wa.me/5516997934558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAgendamento = () => {
    const today = new Date();
    const unlockDate = new Date('2026-05-01');
    
    if (today < unlockDate) {
      toast.error('Agendamento disponível a partir de 01/05/2026');
      return;
    }
    handleWhatsAppClick();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ============================================
          HERO SECTION - HEADLINE IMPACTANTE
          ============================================ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309535032/TFgGy5cq4MNYch3LzbTaZo/hero-background-RQRdNEVVwKpLjLLkJbAiDE.webp"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <img
                  src="/Logonew1_4fad7e00.png"
                  alt="Lunara Logo"
                  className="h-16 w-auto mb-4"
                />
              </div>

              {/* HEADLINE - Impactante */}
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F172A]">
                  Cansado de sentir que algo está errado, mas os exames não mostram nada?
                </h1>
                <p className="text-3xl md:text-4xl font-bold text-[#2DD4BF]">
                  Seu corpo está tentando te falar. O BioSync escuta.
                </p>
              </div>

              {/* SUBTÍTULO - Benefício Claro */}
              <p className="text-xl text-[#64748B] leading-relaxed">
                Não é só um exame. É um <strong>Check-up Bioenergético Completo</strong> que identifica bloqueios emocionais e energéticos que estão sabotando sua saúde, antes mesmo de virarem doença.
              </p>

              <p className="text-lg text-[#2DD4BF] font-semibold">
                Descubra o que suas células estão tentando te dizer.
              </p>

              {/* CTAs - Urgência */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-primary bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
                >
                  🎁 Agende com 20% de Desconto (5 vagas)
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-secondary bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
                >
                  💬 Fale Comigo no WhatsApp Agora
                </button>
              </div>

              <p className="text-sm text-[#64748B] font-semibold">
                ⏱️ 15 minutos para clareza total. Sem agulhas. Sem espera.
              </p>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 pt-8 border-t border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Engenheiro de Dados + Terapeuta Holístico</p>
                  <p className="text-sm text-[#64748B]">Celso Biffe - Metodologia Científica Comprovada</p>
                </div>
              </div>
            </div>

            {/* Right - Device Image */}
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <img
                  src="/device-bioresonancia_bb7d80f1.jpg"
                  alt="Aparelho de Bioressonância"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "A DOR" (BEFORE) - Conectar com a Realidade
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0FDFA]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0F172A] text-center">
              Você já se sentiu assim?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#EF4444] shadow-md">
                <AlertCircle className="text-[#EF4444] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Exausto(a) mesmo dormindo 8 horas?</p>
                  <p className="text-sm text-[#64748B]">Aquele cansaço que não passa...</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#EF4444] shadow-md">
                <AlertCircle className="text-[#EF4444] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Ansiedade que aperta o peito?</p>
                  <p className="text-sm text-[#64748B]">Sem razão aparente...</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#EF4444] shadow-md">
                <AlertCircle className="text-[#EF4444] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Dores que vão e voltam?</p>
                  <p className="text-sm text-[#64748B]">Sem diagnóstico claro...</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#EF4444] shadow-md">
                <AlertCircle className="text-[#EF4444] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Sentindo um peso invisível?</p>
                  <p className="text-sm text-[#64748B]">Que ninguém entende...</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FEE2E2] border-l-4 border-[#EF4444] p-8 rounded-xl">
              <p className="text-lg text-[#7F1D1D] font-semibold mb-4">
                ⚠️ Isso não é frescura. Não é "tudo na sua cabeça".
              </p>
              <p className="text-[#7F1D1D] leading-relaxed">
                É um <strong>DESEQUILÍBRIO ENERGÉTICO</strong> que os exames tradicionais não conseguem captar porque eles só veem o que já virou doença.
              </p>
              <p className="text-[#7F1D1D] leading-relaxed mt-4">
                <strong>O BioSync vê ANTES disso acontecer.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "A TRANSFORMAÇÃO" (AFTER) - Pintar o Futuro
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-[#F0FDFA] to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0F172A] text-center">
              Agora imagine o oposto...
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#2DD4BF] shadow-md">
                <Smile className="text-[#2DD4BF] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Acordar leve e energizado</p>
                  <p className="text-sm text-[#64748B]">Com energia de sobra para o dia todo</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#2DD4BF] shadow-md">
                <Smile className="text-[#2DD4BF] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Mente clara e focada</p>
                  <p className="text-sm text-[#64748B]">Sem aquele "nevoeiro mental"</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#2DD4BF] shadow-md">
                <Smile className="text-[#2DD4BF] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Corpo livre de dores</p>
                  <p className="text-sm text-[#64748B]">Que te impediam de viver</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#2DD4BF] shadow-md">
                <Smile className="text-[#2DD4BF] flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#0F172A]">Recuperar disposição</p>
                  <p className="text-sm text-[#64748B]">Para quem você ama</p>
                </div>
              </div>
            </div>

            <div className="bg-[#ECFDF5] border-l-4 border-[#2DD4BF] p-8 rounded-xl">
              <p className="text-2xl text-[#065F46] font-bold mb-4">
                ✨ Esse é o estado de SAÚDE INTEGRAL que você merece.
              </p>
              <p className="text-[#065F46] leading-relaxed">
                E não é um sonho. É totalmente possível quando você sabe <strong>EXATAMENTE</strong> o que está desequilibrado no seu corpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "A PONTE" (BRIDGE) - Como o BioSync Resolve
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0FDFA]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#0F172A]">
            Apresento o BioSync
          </h2>
          <p className="text-xl text-center text-[#2DD4BF] font-semibold mb-12">
            Sua Ponte para a Saúde Integral
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#E2E8F0] mb-12">
              <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                O BioSync não é um exame comum. É uma análise de ressonância magnética quântica (QRMA) que funciona como um <strong>"scanner de saúde celular"</strong>.
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Funciona assim:</h3>

              <div className="space-y-6 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2DD4BF] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Você coloca a mão no sensor do BioSync</p>
                    <p className="text-[#64748B]">Simples, confortável, sem dor</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2DD4BF] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold text-[#0F172A]">O aparelho capta as frequências eletromagnéticas do seu corpo</p>
                    <p className="text-[#64748B]">Com precisão científica</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2DD4BF] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Compara com o padrão de uma pessoa saudável</p>
                    <p className="text-[#64748B]">Identifica desvios e desequilíbrios</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#2DD4BF] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-bold text-[#0F172A]">Você recebe um mapa completo do que precisa ser reequilibrado</p>
                    <p className="text-[#64748B]">Visual, claro e fácil de entender</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F0FDFA] border-l-4 border-[#2DD4BF] p-6 rounded-lg">
                <p className="font-bold text-[#0F172A] mb-2">O que você descobre:</p>
                <ul className="space-y-2 text-[#64748B]">
                  <li>✓ Onde estão os bloqueios que causam sua ansiedade</li>
                  <li>✓ Quais órgãos estão sobrecarregados</li>
                  <li>✓ Seus níveis de vitaminas, minerais e toxinas</li>
                  <li>✓ Como a energia está fluindo (ou não) no seu corpo</li>
                  <li>✓ Exatamente o que precisa ser reequilibrado</li>
                </ul>
              </div>

              <p className="text-center text-lg font-bold text-[#2DD4BF] mt-8">
                Não usamos termos complicados. Te entregamos um MAPA VISUAL CLARO que você entende na hora.
              </p>
            </div>

            {/* Carrossel de Imagens */}
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "O QUE É BIORESSONÂNCIA"
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0F172A]">
            Conheça os Protocolos de Análise do BioSync
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-glow">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">O que é QRMA?</h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                QRMA significa Análise de Ressonância Magnética Quântica. É uma tecnologia Hi-tech que analisa mais de 30 áreas de saúde sem ser invasiva.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Detecta ressonância entre frequências eletromagnéticas emitidas pelo corpo e as compara com padrões de um organismo saudável.
              </p>
            </div>

            <div className="card-glow">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Como Funciona</h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                Cada célula emite ondas eletromagnéticas específicas. O QRMA captura essas ondas com precisão e as compara com padrões de saúde ideal.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Identifica desequilíbrios energéticos e físicos que os exames tradicionais não conseguem ver.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#F0FDFA] to-[#ECFDF5] p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A]">Áreas Analisadas (30+)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-[#2DD4BF] mb-3">🫀 Órgãos e Sistemas</p>
                <p className="text-[#64748B]">Coração, cérebro, pulmões, rins, fígado e muito mais</p>
              </div>
              <div>
                <p className="font-bold text-[#2DD4BF] mb-3">💊 Nutrição e Toxinas</p>
                <p className="text-[#64748B]">Vitaminas, minerais, toxinas e metais pesados</p>
              </div>
              <div>
                <p className="font-bold text-[#2DD4BF] mb-3">✨ Saúde e Beleza</p>
                <p className="text-[#64748B]">Pele, colágeno, saúde ocular e vitalidade</p>
              </div>
              <div>
                <p className="font-bold text-[#2DD4BF] mb-3">⚡ Condições Específicas</p>
                <p className="text-[#64748B]">Obesidade, alergias, desequilíbrios hormonais</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-[#92400E]">📋 Preparação para Melhor Resultado</h3>
            <div className="space-y-4 text-[#92400E]">
              <p><strong>1️⃣ Dias Anteriores:</strong> Evite álcool ou café 2 dias antes (deixa a leitura mais clara)</p>
              <p><strong>2️⃣ Noite Anterior:</strong> Durma bem (seu corpo precisa estar descansado)</p>
              <p><strong>3️⃣ No Dia:</strong> Venha com mente aberta (os resultados podem surpreender)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "BENEFÍCIOS ESPECÍFICOS"
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-[#F0FDFA] to-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0F172A]">
            Benefícios Específicos para Cada Tipo de Dor
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-t-4 border-[#2DD4BF] shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Para Cansaço Crônico</h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  <span>Identifica órgãos sobrecarregados que drenam sua energia</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  <span>Mostra deficiências de vitaminas e minerais</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  <span>Revela bloqueios emocionais que causam exaustão</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-t-4 border-[#A855F7] shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Para Ansiedade/Tristeza</h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#A855F7] flex-shrink-0" size={20} />
                  <span>Detecta desequilíbrios que causam ansiedade</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#A855F7] flex-shrink-0" size={20} />
                  <span>Mostra como a energia está bloqueada no seu corpo</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#A855F7] flex-shrink-0" size={20} />
                  <span>Identifica traumas energéticos não resolvidos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-t-4 border-[#F59E0B] shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Para Dores Crônicas</h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F59E0B] flex-shrink-0" size={20} />
                  <span>Localiza a origem energética da dor</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F59E0B] flex-shrink-0" size={20} />
                  <span>Mostra inflamações que exames não captam</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#F59E0B] flex-shrink-0" size={20} />
                  <span>Protocolo para eliminar a dor na raiz</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-t-4 border-[#EF4444] shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Para Sentir "Travado"</h3>
              <ul className="space-y-3 text-[#64748B]">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#EF4444] flex-shrink-0" size={20} />
                  <span>Identifica bloqueios que impedem seu progresso</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#EF4444] flex-shrink-0" size={20} />
                  <span>Mostra padrões energéticos que se repetem</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#EF4444] flex-shrink-0" size={20} />
                  <span>Cria momentum para transformação real</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "SOBRE CELSO BIFFE"
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0F172A]">
            Quem está por trás do BioSync em Araraquara?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#0F172A]">Celso Biffe</h3>
              <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                Sou <strong>Engenheiro de Dados + Terapeuta Holístico Sênior</strong>.
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                Isso significa que eu não trabalho com suposições. Eu <strong>TRADUZO a frequência do seu corpo em dados acionáveis</strong>.
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                Passei anos estudando como a física quântica, a medicina tradicional chinesa e a terapia holística se conectam. E descobri algo poderoso:
              </p>
              <p className="text-xl font-bold text-[#2DD4BF] mb-6">
                Quando você ENTENDE o que está desequilibrado no seu corpo (com dados, não com achismo), a cura fica 10x mais rápida.
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                Minha metodologia une:
              </p>
              <ul className="space-y-3 text-[#64748B] mb-8">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  <span>O rigor científico da análise de dados</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  <span>A profundidade da saúde integrativa</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  <span>A empatia de quem realmente escuta</span>
                </li>
              </ul>
              <p className="text-lg font-bold text-[#0F172A] mb-6">
                Não ofereço apenas terapia. Ofereço o caminho técnico para o seu equilíbrio real.
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Já ajudei centenas de pessoas em Araraquara a sair do ciclo de cansaço → médico → "exames normais" → mais cansaço.
              </p>
              <p className="text-xl font-bold text-[#2DD4BF] mt-6">
                Agora é a sua vez.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F0FDFA] to-[#ECFDF5] p-8 rounded-2xl border border-[#2DD4BF]">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-center text-sm text-[#64748B] mb-4">Certificações e Expertise</p>
                <div className="space-y-4 text-center">
                  <p className="font-bold text-[#0F172A]">Engenheiro de Dados</p>
                  <p className="text-[#64748B]">Análise de frequências e padrões</p>
                  <hr className="my-4" />
                  <p className="font-bold text-[#0F172A]">Terapeuta Holístico Sênior</p>
                  <p className="text-[#64748B]">Saúde integrativa e bem-estar</p>
                  <hr className="my-4" />
                  <p className="font-bold text-[#0F172A]">Especialista em Bioressonância</p>
                  <p className="text-[#64748B]">Análise QRMA e protocolos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "PROVA SOCIAL" - Depoimentos
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0FDFA]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#0F172A]">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-center text-[#64748B] mb-12">
            Protocolos de BioSync que transformaram rotinas de burnout em alta performance
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-l-4 border-[#2DD4BF] shadow-lg">
              <p className="text-[#64748B] leading-relaxed mb-6 italic">
                "Fiz o BioSync e descobri que meu cansaço era por deficiência de magnésio + bloqueio emocional não resolvido. Em 3 semanas de protocolo, recuperei 80% da minha energia."
              </p>
              <p className="font-bold text-[#0F172A]">Marina, 42 anos</p>
              <p className="text-sm text-[#2DD4BF]">Araraquara</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-[#A855F7] shadow-lg">
              <p className="text-[#64748B] leading-relaxed mb-6 italic">
                "Os médicos diziam que minha ansiedade era 'psicológica'. O BioSync mostrou desequilíbrio no meu sistema nervoso. Agora durmo bem e acordo tranquila."
              </p>
              <p className="font-bold text-[#0F172A]">Roberto, 55 anos</p>
              <p className="text-sm text-[#A855F7]">Araraquara</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-[#F59E0B] shadow-lg">
              <p className="text-[#64748B] leading-relaxed mb-6 italic">
                "Dores nas costas há 10 anos. Ninguém conseguia resolver. O BioSync mostrou que era inflamação crônica + bloqueio energético. Hoje estou 90% melhor."
              </p>
              <p className="font-bold text-[#0F172A]">Juliana, 38 anos</p>
              <p className="text-sm text-[#F59E0B]">Araraquara</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SEÇÃO "LOCALIZAÇÃO"
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0F172A]">
            Estou Aqui em Araraquara Para Você
          </h2>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#F0FDFA] to-[#ECFDF5] p-12 rounded-2xl border border-[#2DD4BF]">
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 text-center">
              Você não precisa viajar para São Paulo ou cidades grandes.
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 text-center">
              O BioSync está aqui, em Araraquara, com Celso Biffe.
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-12 text-center">
              Venha conhecer o aparelho, tirar dúvidas e agendar seu check-up bioenergético em um ambiente acolhedor e seguro.
            </p>

            <div className="space-y-6 text-center">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">📍 Localização</p>
                <p className="font-bold text-[#0F172A]">Araraquara, SP</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">📞 WhatsApp</p>
                <p className="font-bold text-[#0F172A]">+55 16 99793-4558</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <p className="text-sm text-[#64748B] mb-2">🕐 Horário</p>
                <p className="font-bold text-[#0F172A]">Seg-Sex: 9h-18h | Sábado: 9h-13h</p>
              </div>
            </div>

            <button
              onClick={handleAgendamento}
              className="w-full mt-8 bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              💬 Agende Agora via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL - URGÊNCIA GENTIL
          ============================================ */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E293B]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Não Deixe Seu Corpo Pedindo Ajuda
            </h2>

            <p className="text-xl text-[#CBD5E1] leading-relaxed mb-8">
              Você já esperou tempo demais.
            </p>

            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-12">
              Seus células já tentaram te avisar de várias formas:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="text-[#2DD4BF] font-bold">Cansaço</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="text-[#2DD4BF] font-bold">Ansiedade</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="text-[#2DD4BF] font-bold">Dores</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="text-[#2DD4BF] font-bold">Sentimento de "Travado"</p>
              </div>
            </div>

            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-12">
              Não ignore mais esses sinais.
            </p>

            <p className="text-2xl font-bold text-[#2DD4BF] mb-12">
              Descubra o que está acontecendo. Em 15 minutos.
              <br />
              Sem agulhas. Sem espera.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-4 px-12 rounded-lg text-xl transition-all transform hover:scale-105"
            >
              🎁 Quero Descobrir Meus Dados Bioenergéticos Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-[#CBD5E1] py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/manus-storage/Logonew1_4fad7e00.png"
                alt="Lunara Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm">Bioressonância e Terapias Holísticas em Araraquara</p>
            </div>
            <div>
              <p className="font-bold mb-4">Contato</p>
              <p className="text-sm">📞 +55 16 99793-4558</p>
              <p className="text-sm">📍 Araraquara, SP</p>
            </div>
            <div>
              <p className="font-bold mb-4">Horário</p>
              <p className="text-sm">Seg-Sex: 9h-18h</p>
              <p className="text-sm">Sábado: 9h-13h</p>
            </div>
          </div>
          <div className="border-t border-[#334155] pt-8 text-center text-sm">
            <p>&copy; 2026 Lunara BioSync. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ para sua saúde integral</p>
          </div>
        </div>
       </footer>
      <WhatsAppButton />
      <LeadCapturePopup 
        pdfLink="https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf"
        emailDestino="seu-email@lunara.com.br"
        whatsappNumber="5516999999999"
      />
    </div>
  );
}
