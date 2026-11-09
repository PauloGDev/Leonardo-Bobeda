import { Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "../../config/template.config";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#inicio" aria-label="Leonardo Bobeda Advocacia, voltar ao início"><img src="/assets/leonardo-bobeda-logo.png" width="370" height="121" alt="Leonardo Bobeda Advocacia" /></a><button className="menu-button" type="button" aria-controls="main-nav" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Navegação principal"><a href="#quem-pode-ter-direito" onClick={close}>Quem pode ter direito</a><a href="#pedido-negado" onClick={close}>Pedido negado</a><a href="#como-funciona" onClick={close}>Como funciona</a><a href="#escritorio" onClick={close}>Sobre</a><a href="#perguntas-frequentes" onClick={close}>Dúvidas</a><a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={close}>Fale conosco</a></nav></div></header>;
}
