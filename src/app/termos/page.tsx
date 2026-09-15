import type { Metadata } from 'next';
import { TERMS_VERSIONS } from '@/content/legal/terms';
import { renderLegalDocument } from './[version]/page';

const latest = TERMS_VERSIONS[0];

export const metadata: Metadata = {
  title: 'Termos de Uso — OrçaAI',
  description: `Termos de Uso da OrçaAI, versão vigente ${latest.version}.`,
  alternates: { canonical: '/termos' },
};

export default function TermosPage() {
  return renderLegalDocument(latest);
}
