import { ArrowRight, ArrowUpRight, Check, FileSearch, HeartHandshake, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";

const steps = [
  { number: "01", title: "Conte sua situação", text: "Informe se pretende solicitar o benefício ou se o pedido foi negado, suspenso ou cancelado." },
  { number: "02", title: "Análise do caso", text: "Os requisitos legais, a decisão do INSS e os documentos disponíveis são examinados individualmente." },
  { number: "03", title: "Orientação jurídica", text: "Você recebe esclarecimentos sobre os caminhos que podem ser considerados para sua situação." },
];

export function HomePage() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    document.documentElement.classList.add("motion-ready");
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return <>
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal="up">
          <span className="eyebrow"><span className="eyebrow-line" /> ADVOCACIA PREVIDENCIÁRIA · RIO DE JANEIRO</span>
          <h1 id="hero-title">BPC/LOAS: <em>entenda seus direitos</em> com orientação jurídica.</h1>
          <p>{site.hero.description}</p>
          <a className="button button-gold" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{site.hero.cta} <ArrowUpRight aria-hidden="true" /></a>
          <div className="hero-note"><ShieldCheck aria-hidden="true" /><span>Atendimento jurídico individual. Cada caso depende de análise própria.</span></div>
        </div>
        <div className="hero-visual" data-reveal="scale">
          <img src="/assets/hero-bpc.webp" width="1800" height="1202" alt="Pessoa idosa com documentos nas mãos" fetchpriority="high" />
          <div className="hero-visual-shade" />
          <div className="hero-image-caption"><span>01 / 03</span><strong>Escuta, análise e orientação.</strong></div>
        </div>
      </div>
      <div className="container hero-bottom" data-reveal="up"><span>LEONARDO G. BOBEDA</span><span>{site.professional.oab}</span><span>RIO DE JANEIRO — RJ</span></div>
    </section>

    <section className="intro-section section-pad" id="quem-pode-ter-direito" aria-labelledby="intro-title">
      <div className="container"><div className="section-heading" data-reveal="up"><div><span className="eyebrow">PARA QUEM É O BPC/LOAS</span><h2 id="intro-title">Uma orientação para <em>cada realidade.</em></h2></div><p>O Benefício de Prestação Continuada pode amparar pessoas idosas e pessoas com deficiência em situação de baixa renda. A possibilidade de concessão depende dos requisitos legais e da análise do caso.</p></div>
        <div className="audience-grid">{site.services.map((service, index) => <article className="audience-card" data-reveal="up" style={{ "--reveal-delay": `${index * 90}ms` }} key={service.title}><div className="audience-image"><img src={service.image} alt={service.alt} loading="lazy" width="800" height={[800, 1200, 533][index]} /><span>0{index + 1}</span></div><div className="audience-content"><h3>{service.title}</h3><p>{service.description}</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Quero orientação <ArrowUpRight aria-hidden="true" /></a></div></article>)}</div>
      </div>
    </section>

    <section className="decision-section section-pad" id="pedido-negado" aria-labelledby="decision-title"><div className="container decision-grid"><div className="decision-photo" data-reveal="left"><img src="/assets/analise-documentos.webp" width="900" height="600" loading="lazy" alt="Documentos sendo analisados durante uma conversa" /></div><div className="decision-copy" data-reveal="right"><span className="eyebrow">NEGATIVA, SUSPENSÃO OU CANCELAMENTO</span><h2 id="decision-title">O INSS negou ou interrompeu seu benefício?</h2><p>Uma decisão desfavorável precisa ser compreendida antes de definir o próximo passo. A avaliação pode considerar o motivo informado pelo INSS, a documentação, a composição familiar, a renda e, quando aplicável, as condições da deficiência.</p><p>Com esses elementos, é possível verificar se há providências administrativas ou judiciais cabíveis.</p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Quero analisar a decisão <ArrowRight aria-hidden="true" /></a></div></div></section>

    <section className="process-section section-pad" id="como-funciona" aria-labelledby="process-title"><div className="container"><div className="section-heading" data-reveal="up"><div><span className="eyebrow">COMO FUNCIONA</span><h2 id="process-title">Clareza desde o <em>primeiro contato.</em></h2></div><p>O atendimento começa pela compreensão da sua situação. A orientação considera as informações e os documentos disponíveis.</p></div><div className="steps-grid">{steps.map((step, index) => <article key={step.number} className="step" data-reveal="up" style={{ "--reveal-delay": `${index * 90}ms` }}><span className="step-number">{step.number}</span><div className="step-icon">{index === 0 ? <HeartHandshake aria-hidden="true" /> : index === 1 ? <FileSearch aria-hidden="true" /> : <Check aria-hidden="true" />}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section className="about-section section-pad" id="escritorio" aria-labelledby="about-title"><div className="container about-grid"><div className="portrait-wrap" data-reveal="left"><img src="/assets/leonardo-bobeda.webp" width="505" height="499" loading="lazy" alt="Retrato do advogado Leonardo Bobeda" /><div className="portrait-caption">LEONARDO G. BOBEDA <span>{site.professional.oab}</span></div></div><div className="about-copy" data-reveal="right"><span className="eyebrow">SOBRE O ADVOGADO</span><h2 id="about-title">Orientação jurídica com <em>escuta e responsabilidade.</em></h2><p>{site.professional.biography}</p><div className="about-rule"><span>Atuação em BPC/LOAS</span><span>Rio de Janeiro — RJ</span></div><a className="button button-outline" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight aria-hidden="true" /></a></div></div></section>

    <section className="faq-section section-pad" id="perguntas-frequentes" aria-labelledby="faq-title"><div className="container faq-grid"><div data-reveal="left"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2 id="faq-title">Dúvidas sobre <em>BPC/LOAS.</em></h2><p>Informações gerais para ajudar você a entender o benefício. A orientação jurídica depende dos detalhes de cada caso.</p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Tenho outra dúvida <ArrowRight aria-hidden="true" /></a></div><div className="faq-list" data-reveal="right">{site.faqs.map((faq, index) => <details key={faq.question}><summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div></div></section>

    <section className="contact-section section-pad" id="contato" aria-labelledby="contact-title"><div className="container contact-grid"><div data-reveal="left"><span className="eyebrow">PRÓXIMO PASSO</span><h2 id="contact-title">Vamos entender <em>sua situação?</em></h2><p>Se você quer saber se pode solicitar o BPC/LOAS ou precisa avaliar uma negativa ou suspensão, entre em contato. A análise jurídica depende das particularidades de cada caso.</p><a className="button button-gold" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Quero analisar meu caso <ArrowUpRight aria-hidden="true" /></a></div><address className="contact-panel" data-reveal="right"><span>CONTATO DIRETO</span><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /><span><small>WHATSAPP</small>{site.phoneLabel}</span><ArrowUpRight aria-hidden="true" /></a><a href={`mailto:${site.contact.email}`}><Mail aria-hidden="true" /><span><small>E-MAIL</small>{site.contact.email}</span><ArrowUpRight aria-hidden="true" /></a><div><MapPin aria-hidden="true" /><span><small>LOCALIZAÇÃO</small>{site.location.city}</span></div></address></div></section>
  </>;
}
