import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  template: `
    <div class="bg-brand-light-blue p-1.5 text-center text-white">WIP</div>
      <main class="max-w-7xl mx-auto">
        <div class="px-20">
          <app-header />
          <router-outlet />
        </div>
      </main>

    <app-footer />
  `
})
export class Shell { }
