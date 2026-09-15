import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FinalCta } from '@/components/FinalCta';
import { TERMS_VERSIONS } from '@/content/legal/terms';
import type { LegalDocumentVersion } from '@/content/legal/terms';

/**
 * Shared rendering for both `/termos` (latest version) and `/termos/[version]`
 * (a specific past version) — LGPD-01/02: an old accepted version still has
 * to render exactly the text that was accepted.
 */
export function renderLegalDocument(doc: LegalDocumentVersion) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">termos de uso</span>
          <h1 style={{ marginTop: 16 }}>Termos de Uso</h1>
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
        </div>
      </section>

      <FinalCta />
    </>
  );
}

export function generateStaticParams() {
  return TERMS_VERSIONS.map((doc) => ({ version: doc.version }));
}

type Params = Promise<{ version: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { version } = await params;
  return {
    title: `Termos de Uso (${version}) — OrçaAI`,
    description: `Termos de Uso da OrçaAI, versão ${version}.`,
    alternates: { canonical: `/termos/${version}` },
  };
}

export default async function TermosVersaoPage({ params }: { params: Params }) {
  const { version } = await params;
  const doc = TERMS_VERSIONS.find((entry) => entry.version === version);
  if (!doc) notFound();

  return renderLegalDocument(doc);
}
