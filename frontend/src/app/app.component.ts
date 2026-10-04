import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <p class="eyebrow">WORKSPACE / OVERVIEW</p>
      <h1>DevFlow</h1>
      <p class="subtitle">Seu trabalho, em fluxo.</p>
      <section aria-label="Resumo do workspace">
        <p>Seu espaço de projetos está pronto.</p>
        <span>Primeiro passo: conectar a interface à API.</span>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    main { max-width: 820px; margin: 0 auto; padding: 12vh 24px; }
    .eyebrow { color: #476b5a; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; }
    h1 { margin: 16px 0 4px; color: #18352a; font-size: clamp(40px, 8vw, 72px); }
    .subtitle { margin: 0; color: #52665d; font-size: 20px; }
    section { margin-top: 48px; border-top: 1px solid #ccd8d0; padding-top: 20px; }
    section p { color: #18352a; font-size: 18px; }
    section span { color: #65746b; }
  `],
})
export class AppComponent {}