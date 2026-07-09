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
      <!-- NOTE: This is intentionally a personal journey, not a resume.It's meant to show how I grew as an engineer and as a person. -->
      <h4 class="font-extrabold mb-8">My Journey </h4>
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
                <p [class.mb-8]="last" class="text-sm">{{ task }}</p>
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
        'Like many kids, I thought hackers were the coolest people alive—black hoodies, Linux terminals, and endless command lines. That curiosity led me to Linux, Bash, and Git.',
        'Started with Python, NumPy, and Pandas during the data science boom, but eventually discovered I enjoyed building something more than analyzing data, so I transitioned to backend development with Django and Flask.',
        'Created my first GitHub account: https://github.com/WilbertTosoy',
      ],
    },
    {
      duration: 'Mar 2020 — Feb 2021',
      title: 'Turning Lockdown into an Opportunity',
      tasks: [
        'Used the lockdown to teach myself HTML, CSS, JavaScript, React, SCSS, Node.js, Firebase, Figma, and UI/UX design while building projects to reinforce what I learned.',
        'Built my first practice project: https://edtosoy-match.firebaseapp.com/',
        'Created my first portfolio: https://edtportfolio.netlify.app/',
        'Expanded into full-stack development with Next.js, Apollo GraphQL, TypeGraphQL, TypeORM, Express, PostgreSQL, MongoDB, JWT, Cypress, and Jest, then launched my second portfolio: https://ed-tosoy-portfolio.vercel.app/',
      ],
    },
    {
      duration: 'Feb 2021 — Jul 2022',
      title: 'Landing My First Software Engineering Job at 18',
      tasks: [
        'Landed a Software Engineering role at Metrobank, one of the largest banks in the Philippines, while continuing college through remote work.',
        'Worked across multiple teams, integrating front-end applications with REST APIs and maintaining end-to-end tests with Cypress.',
        'Built performant, reusable interfaces using React, TypeScript, Ant Design, React Hook Form, Redux, and SCSS.',
      ],
    },
    {
      duration: 'Sep 2021 — Jun 2025',
      title: 'Stepping Away from Work to Focus on College',
      tasks: [
        'Realized that technical skills alone would not make me the person I wanted to become, so I invested in my emotional, physical, financial, social, and spiritual growth.',
        'Joined an IT organization, built lifelong friendships, traveled, attended startup and tech events, and read books that reshaped my perspective.',
        'Deepened my understanding of computer networking by learning DNS, HTTP/HTTPS, subnetting, firewalls, ACLs, load balancing, Nginx, reverse proxies, and VPNs.',
        'Applied everything I learned by building our capstone project with React, Redux Toolkit, Socket.IO, i18next, and Cloudinary.',
      ],
    },
    {
      duration: 'Jul 2025 — Present',
      title: 'Self-Investment Year, The Year I Bet on Myself',
      tasks: [
        'Started experimenting with AI development using Amazon Bedrock, Claude, Google AI, and many other providers, only to discover the classic founder’s challenge: great ideas, but limited resources.',
        'Expanded my skill set by learning n8n, data structures & algorithms, Go, and Arch Linux while continuously building projects.',
        'Completely rebuilt my development environment on NixOS, switch to Dvorak keyboard, moved to Neovim code editor, and build keyboard driven work station.',
        'Built a strong DevOps foundation with Docker, CI/CD, Prometheus, Grafana, Terraform, and Kubernetes.',
        'Transitioned into enterprise development by learning Angular, NestJS, Nx monorepos, RabbitMQ, event-driven architecture, and microservices.',
      ],
    },
  ];

}
