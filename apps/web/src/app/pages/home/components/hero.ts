
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <div class="pb-40">
      <div class="text-center mt-40">
        <p>A COLLECTION OF WORKS</p>
        <h1>Every design tells a story.</h1>
      </div>
      <div class="flex gap-4 justify-between items-center mt-20">
        <div>
          <p class="max-w-[clamp(10rem,60vw,30ch)] mb-4">Every story begins with an idea. Here, thoughts and works come together to explore creativity in all its forms.</p>
          <a href="#">Read More.</a>
        </div>
        <img ngSrc="/assets/hero.png" width="580" height="367" alt="Hero">
      </div>
    </div>
  `,
})
export class Hero { }
