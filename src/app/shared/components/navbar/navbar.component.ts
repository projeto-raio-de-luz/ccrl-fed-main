import { Component, Input } from '@angular/core';
import { getMenu } from '@shared/enum/paths.enum';
import { Logo } from '../../../core/models/file.model';
import { Menu } from '../../../core/models/menu.model';

@Component({
  selector: 'ccrl-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isHome: boolean = false;
  @Input() logo: Logo = new Logo();
  menu: Menu[] = getMenu();
  sidebar: boolean = false;

  abrirSidebar() {
    this.sidebar = !this.sidebar;
  }
}
