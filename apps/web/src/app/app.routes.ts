import { Route } from '@angular/router';
import { Shell } from './layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: 'work',
        loadChildren: () =>
          import('./pages/work/work.routes').then((m) => m.WORK_ROUTES),
      },
    ],
  },
];
