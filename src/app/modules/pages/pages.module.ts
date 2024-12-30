import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
// import { GaleriaComponent } from './projetos/projeto-detalhes/components/galeria/galeria.component';
import { ProjetoDetalhesComponent } from './projetos/projeto-detalhes/projeto-detalhes.component';
import { ProjetoListaComponent } from './projetos/projeto-lista/projeto-lista.component';
import { ProjetoComponent } from './projetos/projeto.component';
import { EmployeeComponent } from './sobre/components/employee/employee.component';
import { GalleryComponent } from './sobre/components/gallery/gallery.component';
import { SobreComponent } from './sobre/sobre.component';
import { GaleriaComponent } from './projetos/projeto-detalhes/components/galeria/galeria.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    SobreComponent,
    ProjetoComponent,
    ProjetoListaComponent,
    ProjetoDetalhesComponent,
    EmployeeComponent,
    GalleryComponent,
    GaleriaComponent
  ],
  imports: [SharedModule, PagesRoutingModule],
})
export class PagesModule {}
