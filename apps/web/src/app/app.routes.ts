import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   component: Shell,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  //     },
  //   ],
  // },

  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  },
];
