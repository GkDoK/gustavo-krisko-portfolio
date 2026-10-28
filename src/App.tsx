import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const whatsapp = 'https://wa.me/5511943726269?text=' + encodeURIComponent('Olá, SorTech! Gostaria de conversar sobre um site para meu negócio.')

function ContactLink({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <a className={className} href={whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false" /></a>
}

function Header() {
  return <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-7 lg:px-12">
    <a href="./#inicio" className="brand" aria-label="SorTech Solutions, início"><span className="brand-symbol" aria-hidden="true">‹/›</span><span className="brand-name">SorTech<small>Solutions</small></span></a>
    <nav className="header-nav" aria-label="Navegação principal"><a className="nav-link" href="./#projetos">Ideias de sites</a><a className="nav-link" href="#/quem-somos">Quem somos</a><ContactLink className="header-contact">Pedir orçamento</ContactLink></nav>
  </header>
}

function Hero() {
  const [selected, setSelected] = useState('restaurante')
  const preview = concepts.find(concept => concept.id === selected)!
  return <section aria-labelledby="hero-title" className="hero mx-auto max-w-7xl px-6 lg:px-12">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot"/> SITES PARA EMPRESAS E COMÉRCIOS</p>
      <h1 id="hero-title">Seu negócio tem<br/>personalidade.<br/><span>Seu site também.</span></h1>
      <p className="description">Sites para empresas e comércios, com a identidade do seu negócio, seus serviços em destaque e um caminho simples para o cliente entrar em contato.</p>
      <div className="hero-actions"><ContactLink className="primary-button">Pedir meu orçamento</ContactLink><a className="portfolio-link" href="#projetos">Explorar ideias <ArrowDown className="ui-icon" size={18} aria-hidden="true" /></a></div>
      <p className="service-note">Atendimento próximo. Proposta pensada para o seu negócio.</p>
    </div>
    <div className="hero-showcase">
      <div className="showcase-label"><span>UM SITE. MUITAS POSSIBILIDADES.</span><span aria-hidden="true">ST / 01</span></div>
      <div className="showcase-tabs" role="group" aria-label="Escolha um conceito para visualizar">{concepts.slice(0, 3).map(concept => <button key={concept.id} type="button" aria-pressed={selected === concept.id} onClick={() => setSelected(concept.id)}>{concept.category}</button>)}</div>
      <a className="showcase-image" href={`/projects/concepts/${preview.id}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar conceito de ${preview.category.toLowerCase()}, abre em nova aba`}><img src={`/projects/concepts/${preview.id}.png`} alt={preview.alt} width="1536" height="1024" fetchPriority="high" decoding="async"/><span className="showcase-open"><ArrowUpRight size={20} aria-hidden="true"/></span></a>
      <div className="showcase-caption"><div><strong>{preview.name}</strong><p>{preview.description}</p></div><span>CONCEITO<br/>DEMONSTRATIVO</span></div>
    </div>
    <div className="benefit-line"><span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false"/>Identidade para o seu negócio</span><span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false"/>Clareza em cada tela</span><span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false"/>Contato a um clique</span></div>
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
    <div className="concept-grid">
      {(showAll ? concepts : concepts.slice(0, 3)).map((concept, index) => <article className="concept-card" key={concept.id}>
        <a className="concept-preview" href={`/projects/concepts/${concept.id}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar conceito de ${concept.category.toLowerCase()}, abre em nova aba`}>
          <img src={`/projects/concepts/${concept.id}.png`} alt={concept.alt} width="1536" height="1024" loading="lazy" decoding="async" />
          <span className="concept-zoom">Ampliar conceito <ArrowUpRight className="ui-icon" size={16} aria-hidden="true" focusable="false" /></span>
        </a>
        <div className="concept-body"><span className="project-number" aria-hidden="true">0{index + 1}</span><div className="concept-meta"><span>{concept.category}</span><span>CONCEITO VISUAL</span></div><h3>{concept.name}</h3><p>{concept.description}</p><ContactLink className="project-cta">Quero uma proposta nesse estilo</ContactLink></div>
      </article>)}
    </div>
    <button className="more-projects" type="button" aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>{showAll ? 'Mostrar menos ideias' : 'Ver mais 3 ideias de sites'} <ArrowDown size={16} aria-hidden="true"/></button>
  </section>
}
function Services() {
  return <section id="servicos" aria-labelledby="services-title" className="services mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading">
      <div><p className="eyebrow">COMO PODEMOS AJUDAR</p><h2 id="services-title">O site certo para<br/>o seu negócio<span>.</span></h2></div>
      <p>Da apresentação da sua empresa à divulgação de um serviço, cada projeto começa pelo que você precisa comunicar.</p>
    </div>
    <div className="services-grid">
      <article className="service-card">
        <span className="service-index">01 / APRESENTE SEU NEGÓCIO</span>
        <h3>Sites para empresas e comércios</h3>
        <p>Seu endereço na internet, com a identidade da sua empresa e as informações que ajudam o cliente a escolher você.</p>
        <ul><li>Apresentação da empresa e dos serviços</li><li>Espaço para fotos, diferenciais e localização</li><li>Acesso fácil aos seus canais de contato</li></ul>
        
      </article>
      <article className="service-card">
        <span className="service-index">02 / DESTAQUE UMA OFERTA</span>
        <h3>Páginas de divulgação</h3>
        <p>Uma página focada em apresentar um serviço, produto ou campanha e orientar o visitante para o próximo passo.</p>
        <ul><li>Conteúdo voltado a uma oferta específica</li><li>Benefícios e informações em uma sequência clara</li><li>Botão de contato ou pedido de orçamento</li></ul>
        
      </article>
    </div>
    <div className="quote-strip"><div><h3>Seu projeto, seu orçamento.</h3><p>O valor é definido conforme o conteúdo, as páginas e os recursos que seu site precisa. Conte sua ideia e preparamos uma proposta para você.</p></div><ContactLink className="primary-button">Solicitar orçamento</ContactLink></div>
  </section>
}

function Process() {
  const steps = [
    { number: '01', title: 'Conversa inicial', text: 'Você conta sua ideia. Entendemos seu negócio e o que seu cliente precisa encontrar no site.' },
    { number: '02', title: 'Orçamento personalizado', text: 'Você recebe o escopo, o valor e o prazo previsto. Combinamos tudo antes de começar.' },
    { number: '03', title: 'Desenvolvimento', text: 'Desenvolvemos o site e apresentamos o projeto para você participar dos ajustes combinados.' },
    { number: '04', title: 'Entrega', text: 'Após sua aprovação, preparamos a entrega e os próximos passos para publicação, conforme a proposta.' },
  ]
  return <section id="como-funciona" aria-labelledby="process-title" className="process mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading"><div><p className="eyebrow">DA PRIMEIRA CONVERSA À ENTREGA</p><h2 id="process-title">Como funciona<span>.</span></h2></div><p>Um processo claro, com cada etapa alinhada com você.</p></div>
    <ol className="process-steps">{steps.map(step => <li key={step.number}><span className="process-number" aria-hidden="true">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
  </section>
}
function About() {
  return <section id="sobre" aria-labelledby="about-title" className="about mx-auto max-w-7xl px-6 lg:px-12">
    <div className="about-heading"><p className="eyebrow">CONTATO DIRETO, DO COMEÇO À ENTREGA</p><h2 id="about-title">Você sabe quem<br/>cuida do seu site<span>.</span></h2></div>
    <div className="about-copy"><p>Conheça a SorTech Solutions.</p><p>Criamos sites para empresas e comércios, com atenção à identidade de cada negócio e à experiência de seus clientes.</p><a className="portfolio-link" href="#/quem-somos">Quem somos <ArrowUpRight size={18} aria-hidden="true"/></a></div>
  </section>
}
function Contact() {
  return <section id="contato" aria-labelledby="contact-title" className="contact mx-auto max-w-7xl px-6 lg:px-12">
    <div className="contact-box">
      <div className="contact-copy"><p className="eyebrow">VAMOS CONVERSAR</p><h2 id="contact-title">Conte sobre<br/>o seu negócio<span>.</span></h2><p>Para começar, envie o nome do seu negócio, o que você oferece e o que gostaria de mostrar no site. A SorTech ajuda você a pensar no próximo passo.</p></div>
      <div className="contact-actions"><ContactLink className="primary-button">Chamar no WhatsApp</ContactLink><p className="contact-phone">(11) 94372-6269</p><div className="contact-email"><span>Prefere conversar por e-mail?</span><a href="mailto:gustavokrisko@gmail.com">gustavokrisko@gmail.com</a></div><p className="contact-location">Atendimento em todo o estado de São Paulo.</p></div>
    </div>
  </section>
}
function AboutPage() {
  return <>
    <section className="meet-page mx-auto max-w-7xl px-6 lg:px-12" aria-labelledby="meet-title">
      <a className="meet-back" href="./#inicio"><ArrowDown className="back-icon" size={16} aria-hidden="true"/> Voltar ao início</a>
      <div className="meet-copy company-intro">
        <p className="eyebrow">QUEM SOMOS</p>
        <h1 id="meet-title" tabIndex={-1}>SorTech<span>.</span><small className="company-subtitle">Solutions</small></h1>
        <p className="meet-intro">Seu negócio tem uma história. Criamos sites para ajudar você a contá-la.</p>
        <p>A SorTech Solutions é a marca de serviços digitais criada por Gustavo Krisko para atender empresas e comércios que querem apresentar seu trabalho na internet com clareza e personalidade.</p>
        <p>Nosso foco é desenvolver sites e páginas de divulgação que valorizem a identidade de cada negócio, destaquem seus serviços e facilitem o contato com seus clientes.</p>
      </div>
      <div className="meet-highlights">
        <article><span className="service-index">01 / IDENTIDADE</span><h2>O seu negócio em primeiro lugar</h2><p>Cada projeto começa pela compreensão do que você faz, do público que atende e do que precisa comunicar.</p></article>
        <article><span className="service-index">02 / CLAREZA</span><h2>Uma experiência simples</h2><p>Organizamos conteúdo, visual e navegação para que o visitante encontre as informações e saiba como entrar em contato.</p></article>
        <article><span className="service-index">03 / PROXIMIDADE</span><h2>Conversa em cada etapa</h2><p>Alinhamos o escopo, o orçamento e as etapas do desenvolvimento com você, de acordo com as necessidades do projeto.</p></article>
      </div>
      <section className="meet-grid founder-section" aria-labelledby="founder-title">
        <div className="meet-copy">
          <p className="eyebrow">QUEM ESTÁ POR TRÁS DA SORTECH</p>
          <h2 id="founder-title">Prazer, Gustavo Krisko<span>.</span></h2>
          <p>Sou estudante de Engenharia de Software na Universidade São Judas e o responsável pela SorTech Solutions. Uno meus estudos à prática para desenvolver sites com identidade, informações claras e navegação simples.</p>
          <p>Tenho interesse em Cloud e Inteligência Artificial e busco ampliar meus conhecimentos em tecnologia. A participação no AWS Summit, em São Paulo, faz parte dessa trajetória de aprendizado.</p>
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
  const [isAboutPage, setIsAboutPage] = useState(() => ['#/quem-somos', '#/me-conheca'].includes(window.location.hash))
  useEffect(() => {
    const onHashChange = () => setIsAboutPage(['#/quem-somos', '#/me-conheca'].includes(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  useEffect(() => {
    document.title = isAboutPage ? 'Quem somos | SorTech Solutions' : 'SorTech Solutions | Criação de sites'
    if (isAboutPage) {
      window.scrollTo(0, 0)
      document.getElementById('meet-title')?.focus({ preventScroll: true })
    }
  }, [isAboutPage])
  return <><a className="skip-link" href="#conteudo" onClick={event => { event.preventDefault(); document.getElementById('conteudo')?.focus() }}>Pular para o conteúdo</a><Header/><main id="conteudo" tabIndex={-1}><div id="inicio"/>{isAboutPage ? <AboutPage/> : <><Hero/><Projects/><Services/><Process/><About/><Contact/></>}</main><footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-7 lg:px-12"><p>SorTech Solutions · Criação de sites</p><a href="mailto:gustavokrisko@gmail.com">gustavokrisko@gmail.com</a></footer></>
}
