# Leonardo Bobeda Advocacia — BPC/LOAS

Landing page construída sobre o **Template 1 (v1.2.0)**, preservando Vite, React e a organização de componentes do projeto extraído.

## Executar

```bash
npm install
npm run dev
```

Para validar a saída de produção:

```bash
npm run lint
npm run build
npm run preview
```

O build gera `dist/` e inclui o conteúdo principal no HTML inicial por meio de `scripts/prerender.mjs`. O navegador hidrata a página para manter o menu móvel e a interação das perguntas frequentes.

## Conteúdo e arquivos

- `landing.data.json`: dados profissionais, contato, serviços e FAQ.
- `src/modules/home/pages/HomePage.jsx`: seções da landing page.
- `src/styles/index.css`: visual responsivo com verde e dourado da marca.
- `public/assets/`: imagens otimizadas, logo, favicon e imagem social.
- `SEO.md`: posicionamento, verificações e pendências.

Atualize o telefone, e-mail e demais dados em `landing.data.json`. Se o domínio mudar, atualize `index.html`, `public/robots.txt`, `public/sitemap.xml` e `scripts/prerender.mjs` antes de publicar.
# Leonardo-Bobeda
