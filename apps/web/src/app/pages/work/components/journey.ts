import { Component } from '@angular/core';

interface JourneyInterface {
  duration: string;
  title: string;
  tasks: Tasks[];
}
interface Tasks {
  text: string;
  url?: string;
  label?: string;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  template: `
    <div class="pb-40">
      <!-- NOTE: This is intentionally a personal journey, not a resume.It's meant to show how I grew as an engineer and as a person. -->
      <h4 class="font-extrabold mb-8">My Journey</h4>
      @for (job of journeys; track job.title; let lastJob = $last) {
        <div class="grid grid-cols-4 items-center relative">
          <p
            class="flex justify-between items-center pr-6 w-2xs font-semibold text-text-accent text-base"
          >
            {{ job.duration }}
            <span class="size-4 rounded-full bg-text-accent z-10"></span>
          </p>
          <h5 class="col-span-3 text-2xl font-semibold">{{ job.title }}</h5>
          <div [class.w-px]="!lastJob" class="w-0 h-full bg-amber-700 justify-self-end mr-8"></div>
          <div class="col-span-3 mt-4">
            @for (task of job.tasks; track task.text; let last = $last) {
              <div class="flex items-baseline gap-3">
                <span class="size-1.5 rounded-full bg-black mt-2 shrink-0"></span>

                <p [class.mb-8]="last" class="text-sm">
                  {{ task.text }}

                  @if (task.url) {
                    <a
                      [href]="task.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="ml-1 text-text-accent underline hover:opacity-80 transition-opacity"
                    >
                      {{ task.label ?? task.url }}
                    </a>
                  }
                </p>
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
      duration: 'January 26, 2018',
      title: 'The Spark That Started It All',
      tasks: [
        {
          text: 'Like many kids, I thought hackers were the coolest people alive—black hoodies, Linux terminals, and endless command lines. That curiosity led me to Linux, Bash, and Git.',
        },
        {
          text: 'Started with Python, NumPy, and Pandas during the data science boom, but eventually discovered I enjoyed building something more than analyzing data, so I transitioned to backend development with Django and Flask.',
        },
        {
          text: 'Created my first GitHub account:',
          url: 'https://github.com/WilbertTosoy',
          label: 'github.com/WilbertTosoy',
        },
      ],
    },
    {
      duration: 'Mar 2020 — Feb 2021',
      title: 'Turning Lockdown into an Opportunity',
      tasks: [
        {
          text: 'Used the lockdown to teach myself HTML, CSS, JavaScript, React, SCSS, Node.js, Firebase, Figma, and UI/UX design while building projects to reinforce what I learned.',
        },
        {
          text: 'Built my first practice project:',
          url: 'https://edtosoy-match.firebaseapp.com/',
          label: 'edtosoy-match.firebaseapp.com',
        },
        {
          text: 'Created my first portfolio:',
          url: 'https://edtportfolio.netlify.app/',
          label: 'edtportfolio.netlify.app',
        },
        {
          text: 'Expanded into full-stack development with Next.js, Apollo GraphQL, TypeGraphQL, TypeORM, Express, PostgreSQL, MongoDB, JWT, Cypress, and Jest, then launched my second portfolio:',
          url: 'https://ed-tosoy-portfolio.vercel.app/',
          label: 'ed-tosoy-portfolio.vercel.app',
        },
      ],
    },
    {
      duration: 'Feb 2021 — Jul 2022',
      title: 'Landing My First Software Engineering Job at 18',
      tasks: [
        {
          text: 'Landed a Software Engineering role at Metrobank, one of the largest banks in the Philippines, while continuing college through remote work.',
        },
        {
          text: 'Worked across multiple teams, integrating front-end applications with REST APIs and maintaining end-to-end tests with Cypress.',
        },
        {
          text: 'Built performant, reusable interfaces using React, TypeScript, Ant Design, React Hook Form, Redux, and SCSS.',
        },
      ],
    },
    {
      duration: 'Sep 2021 — Jun 2025',
      title: 'Stepping Away from Work to Focus on College',
      tasks: [
        {
          text: 'Realized that technical skills alone would not make me the person I wanted to become, so I invested in my emotional, physical, financial, social, and spiritual growth.',
        },
        {
          text: 'Joined an IT organization, built lifelong friendships, traveled, attended startup and tech events, and read books that reshaped my perspective.',
        },
        {
          text: 'Deepened my understanding of computer networking by learning DNS, HTTP/HTTPS, subnetting, firewalls, ACLs, load balancing, Nginx, reverse proxies, and VPNs.',
        },
        {
          text: 'Applied everything I learned by building our capstone project with React, Redux Toolkit, Socket.IO, i18next, and Cloudinary.',
        },
      ],
    },
    {
      duration: 'Jul 2025 — Present',
      title: 'Self-Investment Year, The Year I Bet on Myself',
      tasks: [
        {
          text: 'Started experimenting with AI development using Amazon Bedrock, Claude, Google AI, and many other providers, only to discover the classic founder’s challenge: great ideas, but limited resources.',
        },
        {
          text: 'Expanded my skill set by learning n8n, data structures & algorithms, Go, and Arch Linux while continuously building projects.',
        },
        {
          text: 'Completely rebuilt my development environment on NixOS, switched to the Dvorak keyboard layout, moved to Neovim, and built a keyboard-driven workstation.',
        },
        {
          text: 'Built a strong DevOps foundation with Docker, CI/CD, Prometheus, Grafana, Terraform, and Kubernetes.',
        },
        {
          text: 'Transitioned into enterprise development by learning Angular, NestJS, Nx monorepos, RabbitMQ, event-driven architecture, and microservices.',
        },
      ],
    },
  ];
}
