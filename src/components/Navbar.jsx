import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks, socialLinks } from '../data.js';
import { Logo } from './Logo.jsx';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/78 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <a href="#inicio" className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-landeer-text transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
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

        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-white/10 text-white md:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-void/95 px-4 py-5 shadow-card md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[8px] px-3 py-3 text-base font-medium text-landeer-text hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-wrap gap-2 px-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 text-landeer-text"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
