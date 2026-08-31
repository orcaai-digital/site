# apps/site — site institucional da OrçaAI

Next 16 (App Router), cinco páginas estáticas. É o port do site estático que
vive em `../../../site` (fora deste repositório): mesmo texto, mesmo CSS, mesma
marca — só que agora com rotas sem `.html` e metadata gerada pelo Next.

| Rota | Página |
|---|---|
| `/` | Landing: proposta, mock de conversa, resumo do produto, ramos |
| `/como-funciona` | Fluxo em 5 etapas, o que continua sob seu controle, e o que acontece fora do padrão |
| `/para-quem` | As perguntas por ramo — e quando **não** vale a pena contratar |
| `/duvidas` | FAQ em 3 blocos: dia a dia, contratar, dados e LGPD |
| `/contato` | Canais e como é a primeira conversa |
| `not-found` | 404, única página sem a faixa final de CTA |

`robots.txt` e `sitemap.xml` são gerados por `src/app/robots.ts` e
`src/app/sitemap.ts`. Os caminhos antigos (`/index.html`, `/como-funciona.html`,
…) continuam válidos como redirect 308 — ver `next.config.ts`.

## Rodar

Este projeto é **auto-contido**: tem `package.json` e `node_modules` próprios e
não usa nada da raiz do monorepo. É o que permite espelhá-lo sozinho no repo que
a Vercel observa (ver "Deploy"). Por isso ele também está fora do alcance do
plugin do Next no `nx.json` — não existe `nx dev site`.

```bash
pnpm install     # dentro desta pasta
pnpm dev         # http://localhost:8081
pnpm build
pnpm typecheck
```

Da raiz do monorepo: `pnpm site:dev`, `pnpm site:build`, `pnpm site:install`.

## Conteúdo e marca

O texto mora nos próprios componentes de página. Já a marca e o CSS vêm de fora
e são **gerados** — não edite à mão:

- `src/app/globals.css` ← `../../../site/assets/style.css`
- `src/components/Logo.tsx` ← `../../../branding/logo/*.svg`
- `public/assets/img/*` ← `../../../branding/{favicon,social}/*`

Para trazer mudanças de lá, rode na raiz do monorepo:

```bash
python3 scripts/sync-site-branding.py
```

Os números e endereços (WhatsApp, e-mail, domínio, CNPJ) estão em
`src/lib/site.ts`.

## Antes de publicar

- [ ] `WA` em `src/lib/site.ts` — hoje é `wa.me/5500000000000`
- [ ] `MAIL` — hoje é `contato@orcaai.com.br`
- [ ] `DOM` — usado no canonical, no OG e no sitemap
- [ ] `CNPJ` no rodapé
- [ ] Confirmar as condições comerciais antes de publicar qualquer preço.
      Hoje o site não anuncia nenhum, de propósito.

## Deploy

A Vercel não observa este monorepo: ela observa **`orcaai-digital/site`**, um repo
separado cuja raiz é o conteúdo desta pasta. O que publica é um
`git subtree push --prefix=apps/site`:

- automático — `.github/workflows/deploy-site.yml`, em todo push na `main` que
  toque `apps/site/**`. Precisa dos secrets `SITE_DEPLOY_APP_ID` e
  `SITE_DEPLOY_APP_PRIVATE_KEY` (GitHub App com Contents: Read and write
  instalado em `orcaai-digital/site`);
- manual — `./scripts/deploy-site.sh` na raiz do monorepo. É o caminho enquanto
  os secrets acima não existirem, e a saída de emergência depois.

Como a pasta vira a raiz do repo espelhado, tudo que a Vercel precisa está aqui
dentro: `package.json`, `pnpm-lock.yaml` e `vercel.json`.
