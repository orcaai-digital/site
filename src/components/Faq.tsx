import type { ReactNode } from 'react';

export type Pergunta = { q: string; a: ReactNode };

export function Faq({ titulo, itens }: { titulo: string; itens: Pergunta[] }) {
  return (
    <div className="faqgroup">
      <h3>{titulo}</h3>
      <div className="faq">
        {itens.map(({ q, a }) => (
          <details key={q}>
            <summary>{q}</summary>
            <div className="ans">{a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
