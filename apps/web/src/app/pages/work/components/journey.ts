import { Component } from '@angular/core';

interface JourneyInterface {
  duration: string;
  title: string;
  tasks: string[];
}

@Component({
  selector: 'app-journey',
  standalone: true,
  template: `
    <div class="pb-40">
      <h4 class="font-extrabold mb-8">My Journey</h4>
      @for (job of journeys; track job.title; let lastJob = $last) {
        <div class="grid grid-cols-4 items-center relative">
          <p
            class="flex justify-between items-center pr-6 w-2xs font-semibold text-text-accent text-base">
            {{ job.duration }}
            <span class="size-4 rounded-full bg-text-accent z-10"></span>
          </p>
          <h5 class="col-span-3 text-2xl font-semibold">{{ job.title }}</h5>
          <div [class.w-px]="!lastJob" class="w-0 h-full bg-amber-700 justify-self-end mr-8"></div>
          <div class="col-span-3 mt-4">
            @for (task of job.tasks; track task; let last = $last) {
              <div class="flex items-baseline gap-3">
                <span class="size-1.5 rounded-full bg-black mt-2 shrink-0"></span>
                <p [class.mb-8]="last">{{ task }}</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class Journey {
  journeys: JourneyInterface[] = [
    {
      duration: 'Jul 2025 — Present',
      title: 'Self-Investment Year: Rebuilding My Workflow from the Ground Up',
      tasks: [
        'Rebuilt my entire dev environment on NixOS, learning declarative system config from scratch.',
        'Switched to Dvorak and Neovim to slow down and rebuild muscle memory around deliberate practice.',
        'Upskilled deliberately in DevOps and platform engineering — Docker, CI/CD, Terraform, Kubernetes basics.',
      ],
    },
    {
      duration: 'Sep 2021 — Jun 2025',
      title: 'Finished College',
      tasks: [
        'Built my first full-stack projects, moving from data-focused scripting into real web development.',
        'Picked up Angular, NestJS, and PostgreSQL through personal projects outside the classroom.',
        'Learned to work with Git, monorepos, and structured backend architecture on my own time.',
      ],
    },
    {
      duration: '2018',
      title: 'Started Programming',
      tasks: [
        'Taught myself Python, NumPy, and Pandas during the early data science wave.',
        'Explored data analysis and scripting before eventually pivoting toward web development.',
        'Discovered that building things — not just studying theory — was what kept me engaged.',
      ],
    },
  ];
}
