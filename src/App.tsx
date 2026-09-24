import { ArrowDown, ArrowUpRight } from 'lucide-react'

const whatsapp = 'https://wa.me/5511943726269?text=' + encodeURIComponent('Olá, Gustavo! Gostaria de conversar sobre um site para meu negócio.')

function ContactLink({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <a className={className} href={whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false" /></a>
}

function Header() {
  return <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-7 lg:px-12">
    <a href="#inicio" className="brand" aria-label="Gustavo Krisko, início"><span className="brand-symbol" aria-hidden="true">‹/›</span><span>Gustavo Krisko<small>CRIAÇÃO DE SITES</small></span></a>
    <ContactLink className="header-contact">Vamos conversar</ContactLink>
  </header>
}

function Hero() {
  return <section aria-labelledby="hero-title" className="hero mx-auto max-w-7xl px-6 lg:px-12">
    <div className="hero-copy">
      <p className="eyebrow">SEU NEGÓCIO. SUA PRESENÇA DIGITAL.</p>
      <h1 id="hero-title">O seu trabalho<br/>merece um site<br/><span>à altura.</span></h1>
      <p className="description">Sites profissionais para empresas e comércios que querem apresentar seus serviços com clareza e facilitar o contato com seus clientes.</p>
      <ContactLink className="primary-button">Conversar sobre meu site</ContactLink>
      <a className="portfolio-link" href="#projetos">Conheça meu trabalho <ArrowDown className="ui-icon" size={18} aria-hidden="true" focusable="false" /></a>
      <p className="service-note">Atendimento em todo o estado de São Paulo.<br/>Orçamento pensado para as necessidades do seu negócio.</p>
    </div>
    <aside className="service-panel" aria-label="O que seu site pode oferecer">
      <div className="panel-heading"><span>FEITO PARA O SEU NEGÓCIO</span><ArrowUpRight className="ui-icon" size={18} aria-hidden="true" focusable="false" /></div>
      <h2>Uma boa impressão.<br/><span>Em cada detalhe.</span></h2>
      <div className="feature"><span className="feature-number">01</span><div><h3>Seu negócio bem apresentado</h3><p>Uma página com a sua identidade e o que seus clientes precisam saber.</p></div></div>
      <div className="feature"><span className="feature-number">02</span><div><h3>Do celular ao computador</h3><p>Conteúdo organizado para uma navegação simples em diferentes telas.</p></div></div>
      <div className="feature"><span className="feature-number">03</span><div><h3>Um caminho direto para contato</h3><p>Seus serviços e o próximo passo para conversar com você, no mesmo lugar.</p></div></div>
      <div className="panel-footer">Design com propósito. Presença com identidade.</div>
    </aside>
  </section>
}

function Projects() {
  return <section id="projetos" aria-labelledby="projects-title" className="projects mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading">
      <div><p className="eyebrow">DO CONCEITO À TELA</p><h2 id="projects-title">Projetos em destaque<span>.</span></h2></div>
      <p>Um exemplo de como transformo a apresentação de um negócio em uma experiência digital.</p>
    </div>
    <article className="project-card">
      <div className="project-info">
        <span className="project-badge">PROJETO DEMONSTRATIVO</span>
        <p className="project-category">01 / EMPRESAS E COMÉRCIOS</p>
        <h3>Um site com a energia de uma <span>academia.</span></h3>
        <p className="project-description">Protótipo desenvolvido para apresentar a estrutura de uma academia, organizar suas modalidades e facilitar o primeiro contato com novos alunos.</p>
        <ul className="project-tags" aria-label="Destaques do projeto"><li>Identidade visual</li><li>Apresentação de serviços</li><li>Experiência no celular</li></ul>
        <div className="project-context"><span>Sobre este exemplo</span><p>Projeto de portfólio, apresentado com identidade fictícia. Não representa uma contratação ou parceria com uma academia.</p></div>
      </div>
      <div className="project-gallery" aria-label="Telas do protótipo de academia">
        <figure><a href="/projects/academia-inicio.png" target="_blank" rel="noopener noreferrer" aria-label="Ampliar tela de apresentação do protótipo, abre em nova aba"><img src="/projects/academia-inicio.png" alt="Tela inicial do protótipo Academia Demo, com fundo preto, título em branco e vermelho e botão Conhecer planos." width="955" height="1647" loading="lazy" decoding="async"/></a><figcaption><span>01</span> Apresentação</figcaption></figure>
        <figure><a href="/projects/academia-modalidades.png" target="_blank" rel="noopener noreferrer" aria-label="Ampliar tela de modalidades do protótipo, abre em nova aba"><img src="/projects/academia-modalidades.png" alt="Tela de modalidades do protótipo Academia Demo, com cartões de musculação, cardio e treino funcional." width="889" height="1770" loading="lazy" decoding="async"/></a><figcaption><span>02</span> Modalidades</figcaption></figure>
      </div>
    </article>
  </section>
}

function Services() {
  return <section id="servicos" aria-labelledby="services-title" className="services mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading">
      <div><p className="eyebrow">COMO POSSO AJUDAR</p><h2 id="services-title">O site certo para<br/>o seu negócio<span>.</span></h2></div>
      <p>Da apresentação da sua empresa à divulgação de um serviço, cada projeto começa pelo que você precisa comunicar.</p>
    </div>
    <div className="services-grid">
      <article className="service-card">
        <span className="service-index">01 / APRESENTE SEU NEGÓCIO</span>
        <h3>Sites para empresas e comércios</h3>
        <p>Um espaço próprio para apresentar sua empresa, mostrar o que você oferece e reunir as informações que seus clientes procuram.</p>
        <ul><li>Apresentação da empresa e dos serviços</li><li>Espaço para fotos, diferenciais e localização</li><li>Acesso fácil aos seus canais de contato</li></ul>
        <p className="service-example">Para comércios locais, prestadores de serviços e empresas que querem organizar sua presença na internet.</p>
      </article>
      <article className="service-card">
        <span className="service-index">02 / DESTAQUE UMA OFERTA</span>
        <h3>Páginas de divulgação</h3>
        <p>Uma página focada em apresentar um serviço, produto ou campanha e orientar o visitante para o próximo passo.</p>
        <ul><li>Conteúdo voltado a uma oferta específica</li><li>Benefícios e informações em uma sequência clara</li><li>Botão de contato ou pedido de orçamento</li></ul>
        <p className="service-example">Para divulgar um novo serviço, uma campanha ou uma oferta com um link próprio para compartilhar.</p>
      </article>
    </div>
    <div className="quote-strip"><div><h3>Seu projeto, seu orçamento.</h3><p>O valor é definido conforme o conteúdo, as páginas e os recursos que seu site precisa. Conte sua ideia e eu preparo uma proposta para você.</p></div><ContactLink className="primary-button">Solicitar orçamento</ContactLink></div>
  </section>
}

function Process() {
  const steps = [
    { number: '01', title: 'Conversa inicial', text: 'Você me conta sobre seu negócio, o que quer divulgar e o que espera do site. Juntos, alinhamos as ideias e as necessidades do projeto.' },
    { number: '02', title: 'Orçamento personalizado', text: 'Com essas informações, preparo uma proposta com o que será desenvolvido, o valor e o prazo previsto. Tudo fica combinado antes de começar.' },
    { number: '03', title: 'Desenvolvimento', text: 'Transformo o que combinamos em um site com a identidade do seu negócio. Você acompanha a apresentação do projeto e participa dos ajustes previstos na proposta.' },
    { number: '04', title: 'Entrega', text: 'Depois da revisão e da sua aprovação, preparo a versão final e alinho com você os próximos passos para colocar o site no ar, conforme o que foi contratado.' },
  ]
  return <section id="como-funciona" aria-labelledby="process-title" className="process mx-auto max-w-7xl px-6 lg:px-12">
    <div className="projects-heading"><div><p className="eyebrow">DA PRIMEIRA CONVERSA À ENTREGA</p><h2 id="process-title">Como funciona<span>.</span></h2></div><p>Um processo claro, com cada etapa alinhada com você.</p></div>
    <ol className="process-steps">{steps.map(step => <li key={step.number}><span className="process-number" aria-hidden="true">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
  </section>
}
function About() {
  return <section id="sobre" aria-labelledby="about-title" className="about mx-auto max-w-7xl px-6 lg:px-12">
    <div className="about-heading"><p className="eyebrow">QUEM ESTÁ POR TRÁS DO PROJETO</p><h2 id="about-title">Prazer,<br/>Gustavo Krisko<span>.</span></h2><p className="about-role">Estudante de Engenharia de Software</p></div>
    <div className="about-copy"><p>Desenvolvo sites para empresas e comércios que precisam apresentar seus serviços na internet de forma clara e profissional.</p><p>Meu foco é organizar as informações do seu negócio em uma página com identidade própria, fácil de navegar e com caminhos simples para seus clientes entrarem em contato.</p><dl className="about-details"><div><dt>Atendimento</dt><dd>Todo o estado de São Paulo</dd></div><div><dt>Projetos</dt><dd>Sites para empresas e páginas de divulgação</dd></div></dl></div>
  </section>
}
function Contact() {
  return <section id="contato" aria-labelledby="contact-title" className="contact mx-auto max-w-7xl px-6 lg:px-12">
    <div className="contact-box">
      <div className="contact-copy"><p className="eyebrow">VAMOS CONVERSAR</p><h2 id="contact-title">Seu próximo site<br/>começa com uma ideia<span>.</span></h2><p>Conte sobre seu negócio e o que você precisa. Vamos conversar sobre as possibilidades e definir um projeto que faça sentido para você.</p></div>
      <div className="contact-actions"><ContactLink className="primary-button">Chamar no WhatsApp</ContactLink><p className="contact-phone">(11) 94372-6269</p><div className="contact-email"><span>Prefere conversar por e-mail?</span><a href="mailto:gustavokrisko@gmail.com">gustavokrisko@gmail.com</a></div><p className="contact-location">Atendimento em todo o estado de São Paulo.</p></div>
    </div>
  </section>
}
export default function App() {
  return <><a className="skip-link" href="#inicio">Pular para o conteúdo</a><Header/><main id="inicio"><Hero/><Projects/><Services/><Process/><About/><Contact/></main><footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-7 lg:px-12"><p>Gustavo Krisko <span>· Estudante de Engenharia de Software</span></p><a href="mailto:gustavokrisko@gmail.com">gustavokrisko@gmail.com</a></footer></>
}
