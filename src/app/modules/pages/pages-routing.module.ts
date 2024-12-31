import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathEnum } from '@shared/enum/paths.enum';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProjetoDetalhesComponent } from './projetos/projeto-detalhes/projeto-detalhes.component';
import { ProjetoListaComponent } from './projetos/projeto-lista/projeto-lista.component';
import { ProjetoComponent } from './projetos/projeto.component';
import { SobreComponent } from './sobre/sobre.component';

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
        component: ProjetoComponent,
        children: [
          {
            path: '',
            component: ProjetoListaComponent,
          },
          {
            path: ':id',
            component: ProjetoDetalhesComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
