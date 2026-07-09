import { Component } from '@angular/core';
import { Journey } from './components/journey';
import { Stack } from './components/stack';
import { FeaturedProject } from './components/featured-project';

@Component({
  selector: 'app-work',
  imports: [Journey, Stack, FeaturedProject],
  template: `
    <div class="flex justify-between">
      <div>
        <app-journey />
        <app-featured-project />
      </div>
      <div class="">
        <app-stack />
      </div>
    </div>
  `,
})
export class Work {}
