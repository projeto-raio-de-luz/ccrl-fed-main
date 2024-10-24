import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
    declarations: [PaginaInicialComponent, PublicComponent],
    imports: [SharedModule, PublicRoutingModule],
})
export class PublicModule {}
