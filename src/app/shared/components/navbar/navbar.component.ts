import { Component, Input } from '@angular/core';
import { getMenu } from '@shared/enum/paths.enum';
import { LogoModel } from '../../../core/models/file.model';
import { MenuModel } from '../../../core/models/menu.model';
import { OrganizationDetailModel } from '../../../core/models/organizacao.model';

@Component({
  selector: 'ccrl-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menu: MenuModel[] = getMenu();
  @Input() isHome: boolean = false;
  @Input() logo: LogoModel = new LogoModel();
  sidebar: boolean = false;

  abrirSidebar() {
    this.sidebar = !this.sidebar;
  }
}