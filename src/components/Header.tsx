'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, WA } from '@/lib/site';
import { LogoBrasa } from './Logo';

// Client component só por causa do `aria-current`: o header mora no layout, que
// não recebe a rota atual como prop.
export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="wrap">
        <Link href="/" aria-label="OrçaAI, início">
          <LogoBrasa />
        </Link>
        <nav>
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              className="lk"
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <a className="btn" href={WA} rel="noopener">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
