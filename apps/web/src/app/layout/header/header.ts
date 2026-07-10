import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="flex h-16 items-center justify-between gap-4">
      <a routerLink="/" class="text-fluid-lg font-bold text-text-primary">
        Edberto<span class="text-brand">Tosoy</span>
      </a>
      <nav class="flex items-center gap-1">
        <a
          routerLink="/"
          class="rounded-lg pX-3 py-2 text-text-secondary hover:text-text-accent hover:cursor-pointer"
          >Home</a
        >
        <a
          class="rounded-lg px-3 py-2 text-text-secondary hover:text-text-accent hover:cursor-pointer"
          >Projects</a
        >
        <a
          class="rounded-lg px-3 py-2 text-text-secondary hover:text-text-accent hover:cursor-pointer"
          >Posts</a
        >
        <a
          class="rounded-lg px-3 py-2 text-text-secondary hover:text-text-accent hover:cursor-pointer"
          >Gallery</a
        >
        <a
          routerLink="/work"
          class="rounded-lg px-3 py-2 text-text-secondary hover:text-text-accent hover:cursor-pointer"
          >Work</a
        >
      </nav>
    </header>
  `,
})
export class Header {}
