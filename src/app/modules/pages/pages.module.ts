import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    SobreComponent,
    ProjetosComponent,
    TransparenciaComponent,
  ],
  imports: [SharedModule, PagesRoutingModule],
})
export class PagesModule {}
