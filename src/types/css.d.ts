// O TypeScript 6 checa imports só-por-efeito-colateral
// (`noUncheckedSideEffectImports`), e o `next` só declara `*.module.css`.
// Sem isto, `import './globals.css'` no layout não compila.
declare module '*.css';
