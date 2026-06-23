import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Facebook,
  FileText,
  Gauge,
  Github,
  Globe2,
  Instagram,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Palette,
  Rocket,
  Send,
  Smartphone,
  Store,
  Target,
  TimerReset,
  WandSparkles,
  Zap,
} from 'lucide-react';

export const socialLinks = [
  { label: 'E-mail', href: 'mailto:contato@landeer.com', icon: Mail },
  { label: 'Instagram', href: 'https://instagram.com/landeer', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com/landeer', icon: Facebook },
  { label: 'WhatsApp', href: 'https://wa.me/5500000000000', icon: MessageCircle },
  { label: 'GitHub', href: 'https://github.com/landeer', icon: Github },
];

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
];

export const problemCards = [
  { title: 'Pouca conversão', icon: TimerReset, text: 'Visitantes chegam, navegam e saem sem entender o próximo passo.' },
  { title: 'Visual pouco profissional', icon: Palette, text: 'A primeira impressão não transmite confiança suficiente para vender.' },
  { title: 'Página lenta', icon: Gauge, text: 'Carregamento pesado derruba campanhas e aumenta abandono no mobile.' },
  { title: 'Falta de clareza na oferta', icon: Target, text: 'A promessa, os benefícios e a chamada para ação ficam soltos.' },
];

export const solutionCards = [
  { title: 'Layout responsivo', icon: Smartphone },
  { title: 'Copy focada em conversão', icon: FileText },
  { title: 'Performance otimizada', icon: Zap },
  { title: 'Integração com WhatsApp e redes sociais', icon: MessageCircle },
  { title: 'Estrutura pronta para tráfego pago', icon: Megaphone },
  { title: 'Código moderno em React', icon: Code2 },
];

export const services = [
  { title: 'Landing page institucional', icon: Globe2, text: 'Apresente marca, serviços e diferenciais com uma página clara e elegante.' },
  { title: 'Página de captura de leads', icon: MousePointerClick, text: 'Estrutura direta para captar contatos e acelerar relacionamento.' },
  { title: 'Página para anúncios pagos', icon: Megaphone, text: 'Página alinhada à campanha, oferta e comportamento do público.' },
  { title: 'Página para lançamento', icon: Rocket, text: 'Narrativa visual para aquecer audiência e direcionar conversões.' },
  { title: 'Página para portfólio profissional', icon: BriefcaseBusiness, text: 'Mostre projetos, autoridade e caminhos de contato sem atrito.' },
  { title: 'Página para negócio local', icon: Store, text: 'Transforme buscas e cliques em conversas pelo WhatsApp.' },
];

export const processSteps = [
  { title: 'Briefing', icon: Send, text: 'Entendimento do objetivo, público, oferta, referências e prioridades.' },
  { title: 'Estratégia', icon: Target, text: 'Organização da narrativa, seções, CTAs e argumentos de venda.' },
  { title: 'Desenvolvimento', icon: LayoutDashboard, text: 'Criação responsiva em React, com performance e acabamento visual.' },
  { title: 'Entrega', icon: BadgeCheck, text: 'Revisão final, ajustes e página pronta para publicação.' },
];

export const portfolioItems = [
  { title: 'Landing page para consultoria', tag: 'B2B', text: 'Página enxuta para posicionar autoridade, explicar serviços e gerar conversas qualificadas.' },
  { title: 'Página de captura para infoproduto', tag: 'Leads', text: 'Estrutura focada em promessa, benefícios e formulário para construção de lista.' },
  { title: 'Página comercial para negócio local', tag: 'WhatsApp', text: 'Experiência mobile-first com prova visual, oferta clara e contato imediato.' },
];

export const whatsappBase = 'https://wa.me/5500000000000';
export const emailAddress = 'contato@landeer.com';

export const plans = [
  { id: 'simples', name: 'Simples', price: 350, description: 'Essencial para validar uma oferta com presença profissional.' },
  { id: 'profissional', name: 'Profissional', price: 700, description: 'Mais estratégia, seções e acabamento para campanhas.' },
  { id: 'premium', name: 'Premium', price: 1200, description: 'Experiência completa para lançamentos e páginas robustas.' },
];

export const addOns = [
  { id: 'copywriting', label: 'Copywriting', price: 250 },
  { id: 'formulario', label: 'Formulário de contato', price: 150 },
  { id: 'whatsapp', label: 'Integração com WhatsApp', price: 100 },
  { id: 'animacoes', label: 'Animações avançadas', price: 200 },
  { id: 'deploy', label: 'Deploy/publicação', price: 150 },
];

export const decorativeIcons = [WandSparkles, Code2, Rocket];
