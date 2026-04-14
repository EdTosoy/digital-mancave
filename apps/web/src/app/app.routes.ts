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
          import('./pages/portfolio.routes').then((m) => m.PORTFOLIO_ROUTES),
      },
    ],
  },
];
