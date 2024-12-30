import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { CardPostComponent } from './card-post/card-post.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CardPostComponent,
    FooterComponent,
    ModalComponent,
    HeroComponent,
  ],
  imports: [CommonModule, TruncatePipe, TranslateModule],
  exports: [NavbarComponent, CardPostComponent, FooterComponent, ModalComponent, HeroComponent],
})
export class ComponentsModule {}
