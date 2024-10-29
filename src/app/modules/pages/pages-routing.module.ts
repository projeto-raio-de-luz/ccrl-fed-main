import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathEnum } from '@shared/enum/paths.enum';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: PathEnum.SOBRE,
        component: SobreComponent,
      },
      {
        path: PathEnum.PROJETOS,
        component: ProjetosComponent,
      },
      {
        path: PathEnum.TRANSPARENCIA,
        component: TransparenciaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
