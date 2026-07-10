import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface StackItem {
  name: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-stack',
  template: `
    <div class="grid grid-cols-3 py-2 w-2xs">
      @for (item of stack(); track item.name) {
        <a
          [href]="item.href"
          target="_blank"
          rel="noopener nofollow"
          class="
            group relative isolate
            overflow-hidden
            hover:border-indigo-500
            dark:bg-zinc-900 dark:hover:bg-zinc-800
            flex aspect-square items-center justify-center
            before:absolute before:top-1/2 before:left-1/2 before:z-10 grayscale-0
            before:h-60 before:w-60 before:content-['']
            before:[--gradient-0:#F5A015] before:[--gradient-1:#FDE1B5]
            before:bg-[conic-gradient(from_0deg_at_50%_50%,var(--gradient-0)_0deg,var(--gradient-1)_45deg,var(--gradient-1)_135deg,var(--gradient-0)_180deg,var(--gradient-1)_225deg,var(--gradient-1)_315deg,var(--gradient-0)_360deg)]
            before:bg-center before:bg-size-[240px_240px]
            before:transform-[translate(-50%,-50%)_rotate(45deg)_scale(1.45)]
            before:animate-[stack-spin_10s_linear_infinite]
            before:opacity-0 before:transition-opacity
            hover:before:opacity-100 focus-visible:before:opacity-100
            dark:before:[--gradient-0:#EE9A01] dark:before:[--gradient-1:#2E1A00]
          "
        >
          <div
            class="
            flex aspect-square items-center justify-center
            w-[95%]
          "
          >
            <img
              class="
                  bg-gray-400 p-4
                  relative z-10 object-contain
                  transition-all
                  group-hover:opacity-100
                  dark:opacity-60 dark:brightness-200
                  dark:group-hover:opacity-100 dark:group-hover:brightness-100
                "
              loading="lazy"
              [src]="'assets/icons/' + item.icon"
              [alt]="item.name"
            />
          </div>
        </a>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stack {
  readonly stack = signal<StackItem[]>([
    { name: 'Angular', icon: 'angular.svg', href: 'https://angular.dev' },
    { name: 'NestJS', icon: 'nest.svg', href: 'https://nestjs.com' },
    { name: 'TypeScript', icon: 'typescript.svg', href: 'https://www.typescriptlang.org/' },
    { name: 'Node.js', icon: 'node.svg', href: 'https://nodejs.org/' },
    { name: 'PostgreSQL', icon: 'postgresql.svg', href: 'https://www.postgresql.org/' },
    { name: 'Docker', icon: 'docker.svg', href: 'https://www.docker.com/' },
    { name: 'Kubernetes', icon: 'kubernetes.svg', href: 'https://kubernetes.io/' },
    { name: 'Terraform', icon: 'terraform.svg', href: 'https://www.terraform.io/' },
    { name: 'Nx', icon: 'nx.svg', href: 'https://nx.dev/' },
    { name: 'Git', icon: 'git.svg', href: 'https://git-scm.com/' },
  ]);
}
