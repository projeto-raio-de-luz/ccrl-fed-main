import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/public/public.module').then((m) => m.PublicModule),
      },
    ],
  },
];
