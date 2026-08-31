// Os mesmos valores que o site estático mantém no topo de `_build.py`.
// Ver ../../README.md, seção "Antes de publicar": os de cima ainda são
// placeholder e precisam ser trocados antes de o domínio ir ao ar.
export const WA = 'https://wa.me/5500000000000'; // <<< trocar pelo número real
export const MAIL = 'contato@orcaai.com.br';
export const DOM = 'https://orcaai.com.br';
export const CNPJ = '00.000.000/0001-00'; // <<< trocar pelo CNPJ real

export const NAV = [
  { href: '/', label: 'Início' },
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/para-quem', label: 'Pra quem é' },
  { href: '/duvidas', label: 'Dúvidas' },
] as const;
