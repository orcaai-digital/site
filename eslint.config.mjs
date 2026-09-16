import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

// `next lint` was removed from the Next 16 CLI (BACKLOG.md); this is the flat
// config it used to generate under the hood, now run directly via `eslint`.
// `eslint-config-next` ships native flat-config exports as of this version —
// no `FlatCompat`/eslintrc shim needed (and going through one here breaks:
// `next/core-web-vitals`'s legacy string form re-wraps `eslint-plugin-react`'s
// config object into something `@eslint/eslintrc`'s schema validator can't
// serialize — "Converting circular structure to JSON").
const eslintConfig = [...coreWebVitals, ...nextTypescript];

export default eslintConfig;
