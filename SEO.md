# SEO — Leonardo Bobeda Advocacia

## Posicionamento

- Busca principal: orientação de advogado para BPC/LOAS no Rio de Janeiro.
- Buscas relacionadas: BPC para pessoa idosa; BPC para pessoa com deficiência; BPC e autismo; BPC negado pelo INSS; BPC suspenso.
- Público: pessoas idosas, pessoas com deficiência e famílias que buscam análise jurídica de pedido, negativa ou interrupção do benefício.
- Localização confirmada: Rio de Janeiro — RJ. Não foi fornecido endereço de atendimento; por isso não há mapa, rota ou endereço inventado.

## Implementado

- Conteúdo principal pré-renderizado no `dist/index.html`, com um H1 e seções semânticas.
- Título, descrição, canonical, robots, Open Graph, Twitter Card, favicon e imagem social de 1200 × 630 px.
- JSON-LD `WebSite`, `LegalService`, `Person` e `FAQPage`, gerado a partir dos dados visíveis.
- `robots.txt` e `sitemap.xml` para a URL canônica `https://bobeda.adv/`.
- Imagens locais otimizadas em WebP, texto alternativo, dimensões, carregamento tardio abaixo da primeira dobra e prioridade para a imagem principal.
- Navegação responsiva, link para pular ao conteúdo, foco visível, menu acessível e respeito à preferência por movimento reduzido.
- Hero com fotografia até a borda direita no desktop e imagem de ponta a ponta no tablet/celular; entradas de seção progressivas, sem rolagem horizontal nos tamanhos verificados.
- Configuração Vite `appType: "mpa"` para retornar 404 real em rotas inexistentes; página `404.html` com `noindex` para hospedagens estáticas que utilizam esse arquivo como resposta.
- Nenhuma rota adicional ou conteúdo demonstrativo publicado.

## Pendências antes da publicação

1. Revisão e aprovação final do texto e das imagens pelo advogado responsável.
2. Confirmar se haverá atendimento presencial, remoto ou ambos antes de inserir afirmações sobre modalidade, horário ou endereço.
3. Confirmar que `https://bobeda.adv/` será a URL desta landing page. Se ela ocupar outra rota ou domínio, atualizar canonical, OG, sitemap, robots e JSON-LD.

## Após a publicação

- Verificar o domínio no Google Search Console e enviar o sitemap.
- Testar dados estruturados e prévia de compartilhamento na URL publicada.
- Manter nome, telefone, localização e domínio coerentes com o Perfil da Empresa no Google, se houver.

## Fontes para revisão jurídica

- [INSS — Como pedir o BPC](https://www.gov.br/inss/pt-br/noticias/como-pedir-beneficio-de-prestacao-continuada-bpc)
- [MDS — Benefício de Prestação Continuada](https://www.gov.br/mds/pt-br/acoes-e-programas/suas/beneficios-assistenciais/beneficio-assistencial-ao-idoso-e-a-pessoa-com-deficiencia-bpc)
