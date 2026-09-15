import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FinalCta } from '@/components/FinalCta';
import { MEDIA_CONSENT_HISTORY, PRIVACY_VERSIONS } from '@/content/legal/privacy';
import type { LegalDocumentVersion } from '@/content/legal/privacy';

/**
 * Shared rendering for both `/privacidade` (latest version) and
 * `/privacidade/[version]` (a specific past version) — same shape as
 * `/termos`, plus the media-consent version history (LGPD-01/02/04): each
 * entry of `MEDIA_CONSENT_HISTORY` rendered with its exact recorded text,
 * because a stored `consentVersion` on an old orçamento points at exactly
 * one of these.
 */
export function renderLegalDocument(doc: LegalDocumentVersion) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">política de privacidade</span>
          <h1 style={{ marginTop: 16 }}>Política de Privacidade</h1>
          <p className="lead">Vigente desde {doc.publishedAt} — versão {doc.version}.</p>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          {doc.sections.map((section) => (
            <div key={section.heading ?? section.paragraphs[0]} style={{ marginBottom: 32 }}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}

          <div>
            <h2>Histórico do consentimento de mídia</h2>
            {MEDIA_CONSENT_HISTORY.map((entry) => (
              <div key={entry.version} style={{ marginBottom: 20 }}>
                <p>
                  <strong>Versão {entry.version}</strong>
                </p>
                <p>{entry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

export function generateStaticParams() {
  return PRIVACY_VERSIONS.map((doc) => ({ version: doc.version }));
}

type Params = Promise<{ version: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { version } = await params;
  return {
    title: `Política de Privacidade (${version}) — OrçaAI`,
    description: `Política de Privacidade da OrçaAI, versão ${version}.`,
    alternates: { canonical: `/privacidade/${version}` },
  };
}

export default async function PrivacidadeVersaoPage({ params }: { params: Params }) {
  const { version } = await params;
  const doc = PRIVACY_VERSIONS.find((entry) => entry.version === version);
  if (!doc) notFound();

  return renderLegalDocument(doc);
}
