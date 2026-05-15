# 📋 Guia de Configuração do Pop-up de Captura de Leads

## Visão Geral

O pop-up de captura de leads foi criado em **duas versões** para máxima flexibilidade:

1. **Componente React** (`client/src/components/LeadCapturePopup.tsx`) - Integrado ao projeto Lunara BioSync
2. **HTML Standalone** (`lead-capture-popup.html`) - Pode ser usado em qualquer site

---

## 🚀 Opção 1: Usar o Componente React (Recomendado)

### Passo 1: Configurar o Email (FormSubmit)

1. Acesse [https://formsubmit.co/](https://formsubmit.co/)
2. Insira seu email (ex: `celso@lunara.com.br`)
3. Siga as instruções fornecidas
4. Você receberá um email com instruções de confirmação
5. Copie o email fornecido pelo FormSubmit

### Passo 2: Fazer Upload do PDF

1. Acesse um serviço de hospedagem:
   - **Google Drive**: Faça upload, compartilhe publicamente, copie o link
   - **Dropbox**: Faça upload, gere link de compartilhamento
   - **AWS S3**: Faça upload, configure acesso público
   - **Vercel Blob**: Integração nativa com Vercel (recomendado)

2. Obtenha o link público do PDF

### Passo 3: Atualizar o Componente

Abra `client/src/components/LeadCapturePopup.tsx` e procure por:

```typescript
const response = await fetch('https://formsubmit.co/seu-email@lunara.com.br', {
```

Substitua `seu-email@lunara.com.br` pelo email fornecido pelo FormSubmit.

### Passo 4: Atualizar Home.tsx

O componente já está integrado em `Home.tsx`. Apenas atualize as props:

```tsx
<LeadCapturePopup 
  pdfLink="https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf"
  emailDestino="seu-email@lunara.com.br"
  whatsappNumber="5516999999999"
/>
```

Substitua:
- `https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf` → Link real do PDF
- `seu-email@lunara.com.br` → Seu email
- `5516999999999` → Seu número WhatsApp (formato: 55 + DDD + número)

### Passo 5: Testar

```bash
cd /home/ubuntu/lunara-terapias
pnpm dev
```

Abra http://localhost:3000 em incógnito e aguarde 10 segundos ou tente sair da página.

---

## 🌐 Opção 2: Usar o HTML Standalone

### Passo 1: Configurar Variáveis

Abra `lead-capture-popup.html` e procure pela seção de configuração:

```javascript
const FORMSUBMIT_EMAIL = 'seu-email@lunara.com.br'; // ← SUBSTITUIR AQUI
const PDF_LINK = 'https://seu-link-do-pdf-aqui.com/mapa-dos-7-sinais.pdf'; // ← SUBSTITUIR AQUI
const WHATSAPP_NUMBER = '5516999999999'; // ← SUBSTITUIR AQUI (OPCIONAL)
```

### Passo 2: Integrar no Site

**Opção A: Inserir como iframe**
```html
<iframe src="lead-capture-popup.html" style="display:none;"></iframe>
```

**Opção B: Incluir o script diretamente**
1. Copie todo o conteúdo de `lead-capture-popup.html`
2. Cole antes do `</body>` do seu site

**Opção C: Carregar via script**
```html
<script>
  fetch('lead-capture-popup.html')
    .then(r => r.text())
    .then(html => document.body.insertAdjacentHTML('beforeend', html));
</script>
```

### Passo 3: Testar

Abra seu site em incógnito e aguarde 10 segundos ou tente sair da página.

---

## 🎯 Funcionalidades do Pop-up

| Recurso | Descrição |
|---------|-----------|
| **Gatilho Automático** | Aparece após 10 segundos ou quando usuário tenta sair |
| **Captura de Dados** | Nome + Email/WhatsApp com opção de preferência |
| **Integração FormSubmit** | Envia dados para seu email automaticamente |
| **Download Automático** | Redireciona para o PDF após envio |
| **Design Responsivo** | Funciona perfeitamente em mobile, tablet e desktop |
| **Animações Suaves** | Slide-up com backdrop blur |
| **Validação** | Verifica campos obrigatórios antes de enviar |
| **Política de Privacidade** | Texto de segurança dos dados |

---

## 📊 Fluxo de Dados

```
Usuário preenche formulário
        ↓
Validação local (nome + contato)
        ↓
Envio via FormSubmit para seu email
        ↓
Redirecionamento automático para o PDF
        ↓
Usuário recebe email com os dados no seu inbox
```

---

## 🔒 Segurança

- ✅ Dados enviados via HTTPS
- ✅ Sem armazenamento de dados no servidor (apenas email)
- ✅ FormSubmit é um serviço confiável e gratuito
- ✅ Política de privacidade clara no pop-up
- ✅ CAPTCHA desabilitado para melhor UX

---

## 🎨 Personalização

### Cores

Edite as cores no CSS/Tailwind:
- **Roxo (primária)**: `#6B46C1` → Altere para sua cor
- **Verde-água (secundária)**: `#2DD4BF` → Altere para sua cor
- **Fundo**: `#2d1b69` → Altere para sua cor

### Textos

- **Título**: "Aguarde! Antes de sair..."
- **Subtítulo**: "Receba GRÁTIS o 'Mapa dos 7 Sinais'..."
- **Descrição**: "Identifique os 7 principais sinais..."
- **CTA**: "SIM! QUERO O MAPA DOS 7 SINAIS GRÁTIS"

### Timing

Altere o delay de 10 segundos:

**React:**
```typescript
const timer = setTimeout(() => {
  setIsVisible(true);
}, 10000); // ← Mudar para 5000 (5 segundos), 15000 (15 segundos), etc.
```

**HTML:**
```javascript
setTimeout(() => {
  backdrop.classList.add('active');
}, 10000); // ← Mudar aqui
```

---

## 📱 Responsividade

O pop-up foi testado em:
- ✅ Desktop (1920px, 1440px, 1024px)
- ✅ Tablet (768px, 834px)
- ✅ Mobile (375px, 414px, 480px)

---

## ❓ Troubleshooting

### Pop-up não aparece
- Verifique se está usando incógnito (cookies podem bloquear)
- Aguarde 10 segundos
- Abra o console (F12) e procure por erros

### Formulário não envia
- Confirme que o email do FormSubmit está correto
- Verifique se confirmou o email no FormSubmit
- Teste com um email simples (sem caracteres especiais)

### PDF não abre
- Verifique se o link do PDF está correto
- Teste o link em uma aba nova
- Confirme que o PDF está compartilhado publicamente

### Estilos não aparecem
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Reinicie o servidor dev (pnpm dev)
- Verifique se o Tailwind CSS está carregando

---

## 📈 Métricas para Acompanhar

1. **Taxa de Visualização**: Quantos usuários veem o pop-up?
2. **Taxa de Conversão**: Quantos preenchem o formulário?
3. **Taxa de Clique**: Quantos clicam no CTA?
4. **Leads Capturados**: Quantos emails você recebe?

**Dica**: Use Google Analytics para rastrear eventos do pop-up.

---

## 🚀 Próximos Passos

1. ✅ Configurar email do FormSubmit
2. ✅ Fazer upload do PDF
3. ✅ Atualizar variáveis de configuração
4. ✅ Testar em diferentes dispositivos
5. ✅ Monitorar leads capturados
6. ✅ Otimizar copy baseado em feedback

---

## 📞 Suporte

Se tiver dúvidas:
- Acesse [https://formsubmit.co/](https://formsubmit.co/) para suporte do FormSubmit
- Verifique a documentação do seu serviço de hospedagem de PDF
- Revise o código comentado nos arquivos

---

**Criado com ❤️ para Lunara BioSync**
