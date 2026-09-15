import type { Metadata } from 'next';
import { PRIVACY_VERSIONS } from '@/content/legal/privacy';
import { renderLegalDocument } from './[version]/page';

const latest = PRIVACY_VERSIONS[0];

export const metadata: Metadata = {
  title: 'Política de Privacidade — OrçaAI',
  description: `Política de Privacidade da OrçaAI, versão vigente ${latest.version}.`,
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return renderLegalDocument(latest);
}
