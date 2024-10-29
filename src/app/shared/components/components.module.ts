import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PostCardComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent, PostCardComponent],
})
export class ComponentsModule {}
