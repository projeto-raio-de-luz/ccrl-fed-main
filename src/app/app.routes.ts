import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/pages/pages.module').then(
            (module) => module.PagesModule
          ),
      },
    ],
  },
];
