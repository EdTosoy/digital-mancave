import { Component } from '@angular/core';
import { Hero } from './components/hero';
import { WhatsNew } from "./components/whats-new";
import { About } from "./components/about";

@Component({
  selector: 'app-home',
  imports: [Hero, WhatsNew, About,],
  template: `
          <app-hero />
          <app-whats-new />
          <app-about />
  `,
})
export class Home { }
