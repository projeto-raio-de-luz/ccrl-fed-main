import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardPostComponent } from './card-post/card-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, CardPostComponent],
  imports: [CommonModule, TruncatePipe ],
  exports: [NavbarComponent, CardPostComponent],
})
export class ComponentsModule {}
