import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const base = "https://bobeda.adv/";
const data = JSON.parse(await readFile(new URL("../landing.data.json", import.meta.url), "utf8"));
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });

try {
  const { renderPage } = await vite.ssrLoadModule("/src/entry-server.jsx");
  const markup = renderToString(createElement(renderPage));
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${base}#site`, url: base, name: data.project.displayName, inLanguage: "pt-BR" },
      { "@type": "LegalService", "@id": `${base}#escritorio`, name: data.project.displayName, url: base, image: `${base}assets/compartilhamento.jpg`, logo: `${base}assets/leonardo-bobeda-logo.png`, telephone: `+${data.contact.whatsapp}`, email: data.contact.email, areaServed: { "@type": "City", name: "Rio de Janeiro" }, founder: { "@id": `${base}#advogado` } },
      { "@type": "Person", "@id": `${base}#advogado`, name: data.professional.name, jobTitle: "Advogado", identifier: data.professional.oab, worksFor: { "@id": `${base}#escritorio` }, url: base },
      { "@type": "FAQPage", "@id": `${base}#perguntas`, mainEntity: data.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };
  const script = `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, "\\u003c")}</script>`;
  const htmlUrl = new URL("../dist/index.html", import.meta.url);
  let html = await readFile(htmlUrl, "utf8");
  if (!html.includes('<div id="root"></div>')) throw new Error("Ponto de montagem não encontrado no HTML de produção.");
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`).replace("</head>", `${script}\n  </head>`);
  await writeFile(htmlUrl, html, "utf8");
} finally {
  await vite.close();
}
