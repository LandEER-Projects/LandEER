import { processSteps } from '../data.js';
import { SectionHeader } from './SectionHeader.jsx';

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-void py-24 sm:py-28">
      <div className="absolute left-[-10rem] top-0 h-96 w-96 rounded-full bg-landeer-magenta/12 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Processo simples, direção clara."
          text="Você acompanha uma sequência objetiva, da ideia inicial até uma página pronta para receber tráfego."
        />
        <div className="relative mt-16 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-landeer-cyan/30 to-transparent lg:block" />
          {processSteps.map(({ title, text, icon: Icon }, index) => (
            <article key={title} className="relative rounded-[8px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-[8px] bg-landeer-gradient text-white shadow-neon">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <span className="font-display text-5xl font-black text-white/[0.06]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-landeer-text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
