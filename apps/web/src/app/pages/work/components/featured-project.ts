import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

interface Projects {
  name: string;
  githubRepo: string;
  liveUrl: string;
  stacks: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-featured-project',
  imports: [HlmCardImports, HlmButtonImports, HlmBadgeImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pb-40">
      <h4 class="font-extrabold mb-8">Featured Projects</h4>
      <div class="grid grid-cols-2 gap-6">
        @for (project of projects; track project.name) {
          <hlm-card class="relative mx-auto w-full max-w-lg pt-0">
            <div
              class="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color hover:opacity-0"
            ></div>
            <img
              src="{{ project.imageUrl }}"
              alt="Event cover"
              class="relative z-20 aspect-video w-full object-cover"
            />
            <hlm-card-header>
              <h3 hlmCardTitle>{{ project.name }}</h3>
              <p hlmCardDescription>
                {{ project.stacks }}
              </p>
            </hlm-card-header>
            <hlm-card-footer>
              <button hlmBtn class="w-1/2 cursor-pointer">Source Code</button>
              <button hlmBtn class="w-1/2 cursor-pointer">Live View</button>
            </hlm-card-footer>
          </hlm-card>
        }
      </div>
    </div>
  `,
})
export class FeaturedProject {
  projects: Projects[] = [
    {
      name: 'Estore',
      githubRepo: 'https://github.com/EdTosoy/Estore-Next-Project',
      liveUrl: 'https://estore-next-project.vercel.app/',
      stacks:
        'NextJs, React, TypeScript, ApolloGraphQL , PostgreSQL ,TailwindCss, FirebaseAuth, FramerMotion',
      imageUrl:
        'https://ed-tosoy-portfolio.vercel.app/_next/image?url=%2Fimages%2F1.png&w=1920&q=75',
    },
    {
      name: '',
      githubRepo: '',
      liveUrl: '',
      stacks: '',
      imageUrl: '',
    },
    {
      name: '',
      githubRepo: '',
      liveUrl: '',
      stacks: '',
      imageUrl: '',
    },
    {
      name: '',
      githubRepo: '',
      liveUrl: '',
      stacks: '',
      imageUrl: '',
    },
  ];
}
