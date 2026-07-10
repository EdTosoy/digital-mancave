import { Component } from '@angular/core';
import { Journey } from './components/journey';
import { Stack } from './components/stack';
import { FeaturedProject } from './components/featured-project';
import { WorkHero } from './components/work-hero';

@Component({
  selector: 'app-work',
  imports: [Journey, Stack, FeaturedProject, WorkHero],
  template: `
    <div>
      <app-work-hero />
      <div class="flex justify-between gap-10">
        <div>
          <app-journey />
          <app-featured-project />
        </div>
        <div>
          <app-stack />
        </div>
      </div>
    </div>
  `,
})
export class Work {}
