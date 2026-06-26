import { Component } from '@angular/core';
import { Header, FooterComponent } from '../../layout';
import { Hero } from './components/hero';
import { WhatsNew } from "./components/whatsNew";
import { About } from "./components/about";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, WhatsNew, About, FooterComponent],
  template: `
      <div class="bg-brand-light-blue p-1.5 text-center text-white">WIP</div>
      <main class="max-w-7xl mx-auto">
        <app-header />
        <div class="px-20">
          <app-hero />
          <app-whats-new />
          <app-about />
        </div>
        <app-footer />
      </main>
  `,
})
export class Home { }
