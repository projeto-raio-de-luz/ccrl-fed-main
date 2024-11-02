import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardPostComponent } from './card-post/card-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, CardPostComponent, FooterComponent],
  imports: [CommonModule, TruncatePipe, TranslateModule],
  exports: [NavbarComponent, CardPostComponent, FooterComponent],
})
export class ComponentsModule {}
