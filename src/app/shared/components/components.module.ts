import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarOffcanvasComponent } from './navbar-offcanvas/navbar-offcanvas.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarOffcanvasComponent,
    SidebarComponent,
    PostCardComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent, NavbarOffcanvasComponent, PostCardComponent],
})
export class ComponentsModule {}
