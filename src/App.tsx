import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const whatsapp = 'https://wa.me/5511943726269?text=' + encodeURIComponent('Olá, KRISKO! Gostaria de conversar sobre automações, presença digital ou um site para minha empresa.')

function ContactLink({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <a className={`action-button ${className}`} href={whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false" /></a>
}

function Header({ isAboutPage }: { isAboutPage: boolean }) {
  return <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-7 lg:px-12">
    <a href="./#inicio" className="brand" aria-label="KRISKO, início"><img className="brand-logo" src="/images/krisko-monogram.svg" alt="" width="64" height="64" decoding="async" /><span className="brand-name">KRISKO<small>Tecnologia e Soluções</small></span></a>
    <nav className="header-nav" aria-label="Navegação principal"><a className="nav-link" href="./#servicos">Soluções</a><a className="nav-link" href="#/quem-somos" aria-current={isAboutPage ? 'page' : undefined}>Quem somos</a><ContactLink className="header-contact">Pedir orçamento</ContactLink></nav>
  </header>
}

function Hero() {
  const [selected, setSelected] = useState('restaurante')
  const preview = concepts.find(concept => concept.id === selected)!
  return <section aria-labelledby="hero-title" className="hero mx-auto max-w-7xl px-6 lg:px-12">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot"/> AUTOMAÇÕES E PRESENÇA DIGITAL</p>
      <h1 id="hero-title">Automatize rotinas.<span>Amplie sua presença.</span></h1>
      <p className="description">Automações para simplificar processos, soluções para ampliar sua presença nas mídias digitais e sites responsivos para conectar sua empresa a novos clientes.</p>
      <div className="hero-actions"><ContactLink className="primary-button">Pedir meu orçamento</ContactLink><a className="portfolio-link" href="#projetos">Explorar ideias <ArrowDown className="ui-icon" size={18} aria-hidden="true" /></a></div>
      <p className="service-note">Atendimento próximo. Proposta pensada para o seu negócio.</p>
    </div>
    <div className="hero-showcase">
      <div className="showcase-label"><span>UM SITE. MUITAS POSSIBILIDADES.</span><span aria-hidden="true">K / 01</span></div>
      <div className="showcase-tabs" role="group" aria-label="Escolha um conceito para visualizar">{concepts.slice(0, 3).map(concept => <button className="action-button" key={concept.id} type="button" aria-pressed={selected === concept.id} onClick={() => setSelected(concept.id)}>{concept.category}</button>)}</div>
      <a className="showcase-image" href={`/projects/concepts/${preview.id}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar conceito de ${preview.category.toLowerCase()}, abre em nova aba`}><img key={preview.id} className="preview-image" src={`/projects/concepts/${preview.id}.png`} alt={preview.alt} width="1536" height="1024" fetchPriority="high" decoding="async"/><span className="showcase-open"><ArrowUpRight size={20} aria-hidden="true"/></span></a>
      <div className="showcase-caption"><div><strong>{preview.name}</strong><p>{preview.description}</p></div><span>CONCEITO<br/>DEMONSTRATIVO</span></div>
    </div>
    <div className="benefit-line"><span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false"/>Menos tarefas repetitivas</span><span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false"/>Mais presença digital</span><span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false"/>Sites em qualquer tela</span></div>
  </section>
}
const concepts = [
  { id: 'restaurante', category: 'Restaurante', name: 'Restaurante Sabor da Casa', description: 'Gastronomia em destaque, com espaço para o cardápio e reservas.', alt: 'Conceito de site para restaurante em tons escuros e creme, com fotografia de prato e apresentação do cardápio.' },
  { id: 'academia', category: 'Academia', name: 'Pulso', description: 'Uma apresentação de impacto para modalidades, estrutura e aulas experimentais.', alt: 'Conceito de site para academia em preto e laranja, com treino em destaque e cartões de modalidades.' },
  { id: 'padaria', category: 'Padaria', name: 'Padaria Bom Pão', description: 'Um visual acolhedor para apresentar produtos artesanais e receber encomendas.', alt: 'Conceito de site para padaria em tons quentes, com pães artesanais, croissants e café.' },
  { id: 'studio', category: 'Studio de pilates', name: 'Eixo', description: 'Leveza e clareza para apresentar o espaço, as aulas e o atendimento.', alt: 'Conceito de site para studio de pilates, com tons claros, verde e fotografia de uma aula.' },
  { id: 'pousada', category: 'Pousada', name: 'Maré Mansa', description: 'Paisagens e acomodações que convidam a conhecer o lugar e consultar uma estadia.', alt: 'Conceito de site para pousada com piscina à beira-mar e imagens de acomodações.' },
  { id: 'festas', category: 'Festas e eventos', name: 'Aura Celebrações', description: 'Uma apresentação elegante para espaços, celebrações e pedidos de proposta.', alt: 'Conceito de site para festas e eventos, com decoração noturna, flores e detalhes em rosa.' },
]

function Projects() {
  const [showAll, setShowAll] = useState(false)
  return <section id="projetos" aria-labelledby="projects-title" className="projects mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading concept-heading">
      <div><p className="eyebrow">IDEIAS QUE GANHAM FORMA</p><h2 id="projects-title">Qual dessas ideias<br/>combina com você?<span>.</span></h2></div>
      <p>Um restaurante precisa abrir o apetite. Um studio, transmitir cuidado. Cada negócio pede um jeito próprio de se apresentar.</p>
    </div>
    <p className="concept-note">Propostas demonstrativas com marcas fictícias. Referências de estilo para imaginar seu projeto.</p>
    <div className="concept-grid" id="concept-gallery">
      {(showAll ? concepts : concepts.slice(0, 3)).map((concept, index) => <article className={`concept-card${index > 2 ? ' concept-added' : ''}`} key={concept.id}>
        <a className="concept-preview" href={`/projects/concepts/${concept.id}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar conceito de ${concept.category.toLowerCase()}, abre em nova aba`}>
          <img src={`/projects/concepts/${concept.id}.png`} alt={concept.alt} width="1536" height="1024" loading="lazy" decoding="async" />
          <span className="concept-zoom">Ampliar conceito <ArrowUpRight className="ui-icon" size={16} aria-hidden="true" focusable="false" /></span>
        </a>
        <div className="concept-body"><span className="project-number" aria-hidden="true">0{index + 1}</span><div className="concept-meta"><span>{concept.category}</span><span>CONCEITO VISUAL</span></div><h3>{concept.name}</h3><p>{concept.description}</p><ContactLink className="project-cta">Quero uma proposta nesse estilo</ContactLink></div>
      </article>)}
    </div>
    <button className="more-projects action-button" type="button" aria-expanded={showAll} aria-controls="concept-gallery" onClick={() => { setShowAll(!showAll); if (showAll) requestAnimationFrame(() => document.getElementById('projetos')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })) }}>{showAll ? 'Mostrar menos ideias' : 'Ver mais 3 ideias de sites'} <ArrowDown size={16} aria-hidden="true"/></button>
  </section>
}
function Services() {
  return <section id="servicos" aria-labelledby="services-title" className="services mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading">
      <div><p className="eyebrow">SOLUÇÕES PARA SUA EMPRESA</p><h2 id="services-title">Mais eficiência.<br/>Mais presença digital<span>.</span></h2></div>
      <p>Da rotina interna ao contato com o cliente, conectamos tecnologia aos objetivos do seu negócio.</p>
    </div>
    <div className="services-grid">
      <article className="service-card">
        <span className="service-index">01 / SIMPLIFIQUE A OPERAÇÃO</span>
        <h3>Automações empresariais</h3>
        <p>Transforme tarefas repetitivas em fluxos organizados para reduzir trabalho manual e facilitar o acompanhamento da sua operação.</p>
        <ul><li>Mapeamento de rotinas e oportunidades de automação</li><li>Integração entre formulários, planilhas e ferramentas, conforme a viabilidade</li><li>Organização de contatos, avisos e etapas de atendimento</li></ul>
      </article>
      <article className="service-card">
        <span className="service-index">02 / AMPLIE SUA PRESENÇA</span>
        <h3>Mídias e presença digital</h3>
        <p>Fortaleça a forma como sua empresa se apresenta nos canais digitais e facilite o caminho entre conhecer sua marca e entrar em contato.</p>
        <ul><li>Organização de informações em canais comerciais e corporativos</li><li>Conexão entre mídias digitais, páginas de divulgação e contatos</li><li>Estrutura digital para apresentar serviços, produtos e campanhas</li></ul>
      </article>
      <article className="service-card">
        <span className="service-index">03 / CONECTE SUA EMPRESA</span>
        <h3>Sites responsivos</h3>
        <p>Seu endereço na internet, com a identidade da sua empresa e uma experiência que se adapta a celulares, tablets e computadores.</p>
        <ul><li>Apresentação da empresa, serviços e diferenciais</li><li>Espaço para fotos, localização e informações comerciais</li><li>Navegação clara e acesso fácil ao WhatsApp e demais contatos</li></ul>
      </article>
      <article className="service-card">
        <span className="service-index">04 / DESTAQUE UMA OFERTA</span>
        <h3>Páginas de divulgação</h3>
        <p>Uma página focada em apresentar um serviço, produto ou campanha e orientar o visitante para o próximo passo.</p>
        <ul><li>Conteúdo voltado a uma oferta específica</li><li>Benefícios e informações em uma sequência clara</li><li>Botão de contato ou pedido de orçamento</li></ul>
      </article>
    </div>
    <div className="quote-strip"><div><h3>A solução começa pelo seu objetivo.</h3><p>O escopo, o prazo e o investimento são definidos conforme os processos, canais e recursos envolvidos. Conte seu desafio e preparamos uma proposta para você.</p></div><ContactLink className="primary-button">Conversar sobre meu projeto</ContactLink></div>
  </section>
}

function Process() {
  const steps = [
    { number: '01', title: 'Conversa inicial', text: 'Você conta seus objetivos. Entendemos suas rotinas, seus canais digitais e o que sua empresa precisa melhorar.' },
    { number: '02', title: 'Orçamento personalizado', text: 'Você recebe o escopo, o valor e o prazo previsto. Combinamos tudo antes de começar.' },
    { number: '03', title: 'Desenvolvimento', text: 'Desenvolvemos a solução e apresentamos o projeto para você participar dos testes e ajustes combinados.' },
    { number: '04', title: 'Entrega', text: 'Após sua aprovação, preparamos a entrega, a implantação e as orientações de uso, conforme a proposta.' },
  ]
  return <section id="como-funciona" aria-labelledby="process-title" className="process mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading"><div><p className="eyebrow">DA PRIMEIRA CONVERSA À ENTREGA</p><h2 id="process-title">Como funciona<span>.</span></h2></div><p>Um processo claro, com cada etapa alinhada com você.</p></div>
    <ol className="process-steps">{steps.map(step => <li key={step.number}><span className="process-number" aria-hidden="true">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
  </section>
}
function About() {
  return <section id="sobre" aria-labelledby="about-title" className="about mx-auto max-w-7xl px-6 lg:px-12">
    <div className="about-heading"><p className="eyebrow">CONTATO DIRETO, DO COMEÇO À ENTREGA</p><h2 id="about-title">Você sabe quem<br/>cuida do seu projeto<span>.</span></h2></div>
    <div className="about-copy"><p>Conheça a KRISKO.</p><p>Somos uma empresa de tecnologia voltada a automações, ampliação da presença digital e criação de sites responsivos para empresas e comércios.</p><a className="portfolio-link" href="#/quem-somos">Quem somos <ArrowUpRight size={18} aria-hidden="true"/></a></div>
  </section>
}
function Contact() {
  return <section id="contato" aria-labelledby="contact-title" className="contact mx-auto max-w-7xl px-6 lg:px-12">
    <div className="contact-box">
      <div className="contact-copy"><p className="eyebrow">VAMOS CONVERSAR</p><h2 id="contact-title">Conte sobre<br/>o seu negócio<span>.</span></h2><p>Conte o que sua empresa faz e o que você quer melhorar: automatizar uma rotina, fortalecer seus canais digitais ou criar um site responsivo. A KRISKO ajuda a definir os próximos passos.</p></div>
      <div className="contact-actions"><ContactLink className="primary-button">Chamar no WhatsApp</ContactLink><p className="contact-phone">(11) 94372-6269</p><div className="contact-email"><span>Prefere conversar por e-mail?</span><a href="mailto:gustavokrisko@gmail.com">gustavokrisko@gmail.com</a></div><p className="contact-location">Atendimento em todo o estado de São Paulo.</p></div>
    </div>
  </section>
}
function AboutPage() {
  return <>
    <section className="meet-page mx-auto max-w-7xl px-6 lg:px-12" aria-labelledby="meet-title">
      <a className="meet-back" href="./#inicio"><ArrowDown className="back-icon" size={16} aria-hidden="true"/> Voltar ao início</a>
      <div className="company-intro-layout">
      <div className="meet-copy company-intro">
        <p className="eyebrow">QUEM SOMOS</p>
        <h1 id="meet-title" tabIndex={-1}>KRISKO<span>.</span><small className="company-subtitle">Tecnologia que conecta ideias a resultados</small></h1>
        <p className="meet-intro">Tecnologia para simplificar a operação e ampliar a presença da sua empresa.</p>
        <p>A KRISKO é uma empresa de tecnologia criada por Gustavo Krisko para ajudar empresas e comércios a conectar processos, comunicação e presença digital.</p>
        <p>Atuamos em três frentes que se complementam: automações de rotinas empresariais, ampliação da presença em mídias digitais comerciais e corporativas, e criação de sites responsivos. Cada projeto parte de uma necessidade concreta do negócio, com escopo e objetivos alinhados antes do desenvolvimento.</p>
      </div>
      <figure className="company-visual">
        <img src="/images/kriskovisual.webp" width="738" height="246" alt="Identidade visual da KRISKO: Tecnologia que conecta ideias a resultados, com ondas de luz azul sobre fundo preto." decoding="async" />
        <figcaption>KRISKO · Tecnologia e Soluções</figcaption>
      </figure>
      </div>
      <div className="meet-highlights">
        <article><span className="service-index">01 / IDENTIDADE</span><h2>O seu negócio em primeiro lugar</h2><p>Cada projeto começa pela compreensão da sua operação, do público que você atende e dos objetivos da sua empresa.</p></article>
        <article><span className="service-index">02 / CLAREZA</span><h2>Uma experiência simples</h2><p>Conectamos processos e canais digitais para facilitar a rotina da empresa e o caminho do cliente até o contato.</p></article>
        <article><span className="service-index">03 / PROXIMIDADE</span><h2>Conversa em cada etapa</h2><p>Alinhamos o escopo, o orçamento e as etapas do desenvolvimento com você, de acordo com as necessidades do projeto.</p></article>
      </div>
      <section className="meet-grid founder-section" aria-labelledby="founder-title">
        <div className="meet-copy">
          <p className="eyebrow">QUEM ESTÁ POR TRÁS DA KRISKO</p>
          <h2 id="founder-title">Prazer, Gustavo Krisko<span>.</span></h2>
          <p>Sou estudante de Engenharia de Software na Universidade São Judas e o responsável pela KRISKO. Uno meus estudos à prática para desenvolver soluções de automação, fortalecer a presença digital de empresas e criar sites responsivos.</p>
        </div>
        <figure className="meet-photo">
          <img src="/images/gustavo-aws-summit.jpg" width="1152" height="1536" alt="Gustavo Krisko ao lado do letreiro do AWS Summit, em São Paulo." loading="lazy" decoding="async" />
          <figcaption>Gustavo Krisko · AWS Summit, São Paulo</figcaption>
        </figure>
      </section>
    </section>
    <Contact/>
  </>
}
export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const isAboutPage = ['#/quem-somos', '#/me-conheca'].includes(hash)
  const previousPage = useRef(isAboutPage)
  useEffect(() => {
    let activeTransition: { finished: Promise<void>; skipTransition: () => void } | undefined
    const onHashChange = () => {
      const nextHash = window.location.hash
      const nextIsAboutPage = ['#/quem-somos', '#/me-conheca'].includes(nextHash)
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const transitionDocument = document as Document & {
        startViewTransition?: (update: () => void) => {
          finished: Promise<void>
          skipTransition: () => void
        }
      }
      activeTransition?.skipTransition()
      if (nextIsAboutPage !== isAboutPage && !reduceMotion && transitionDocument.startViewTransition) {
        activeTransition = transitionDocument.startViewTransition(() => {
          flushSync(() => setHash(nextHash))
        })
        // Interrupted transitions still commit the destination.
        activeTransition.finished.catch(() => {})
      } else {
        setHash(nextHash)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [isAboutPage])
  useLayoutEffect(() => {
    document.title = isAboutPage ? 'Quem somos | KRISKO' : 'KRISKO | Automações, presença digital e sites'
    const pageChanged = previousPage.current !== isAboutPage
    previousPage.current = isAboutPage
    // Position the destination before the browser captures the transition snapshot.
    if (isAboutPage) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById('meet-title')?.focus({ preventScroll: true })
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: pageChanged || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      })
      if (pageChanged) document.getElementById('conteudo')?.focus({ preventScroll: true })
    } else if (pageChanged) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById('conteudo')?.focus({ preventScroll: true })
    }
  }, [hash, isAboutPage])
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preference.matches || !('IntersectionObserver' in window)) return
    const animations = new Set<Animation>()
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        if (preference.matches || typeof entry.target.animate !== 'function') continue
        const animation = entry.target.animate(
          [{ opacity: .55, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' },
        )
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: .12 })
    document.querySelectorAll('.projects-heading, .service-card, .process-steps li, .about-copy, .contact-box, .meet-highlights article, .founder-section').forEach(element => observer.observe(element))
    const onPreferenceChange = () => {
      if (preference.matches) {
        animations.forEach(animation => animation.cancel())
        animations.clear()
        observer.disconnect()
      }
    }
    preference.addEventListener('change', onPreferenceChange)
    return () => {
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
      preference.removeEventListener('change', onPreferenceChange)
    }
  }, [isAboutPage])
  return <><a className="skip-link" href="#conteudo" onClick={event => { event.preventDefault(); document.getElementById('conteudo')?.focus() }}>Pular para o conteúdo</a><Header isAboutPage={isAboutPage}/><main id="conteudo" tabIndex={-1}><div className="route-page" key={isAboutPage ? 'about' : 'home'}><div id="inicio"/>{isAboutPage ? <AboutPage/> : <><Hero/><Services/><Projects/><Process/><About/><Contact/></>}</div></main><footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-7 lg:px-12"><a className="footer-brand" href="./#inicio" aria-label="KRISKO, início"><img src="/images/krisko-monogram.svg" alt="" width="32" height="32"/><span>KRISKO<small>Tecnologia que conecta ideias a resultados.</small></span></a><a className="social-link" href="https://www.instagram.com/kriskoinc/" target="_blank" rel="noopener noreferrer">@kriskoinc <ArrowUpRight size={14} aria-hidden="true"/></a><a href="mailto:gustavokrisko@gmail.com">gustavokrisko@gmail.com</a></footer></>
}
