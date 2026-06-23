import { socialLinks } from '../data.js';
import { Logo } from './Logo.jsx';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Logo compact />
          <p className="mt-3 text-sm text-landeer-text">Landing pages que geram resultados.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 text-landeer-text transition hover:border-landeer-cyan/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-sm text-landeer-text">© 2026 LandEER. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
