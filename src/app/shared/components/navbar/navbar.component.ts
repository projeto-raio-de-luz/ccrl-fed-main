import { Component, Input } from '@angular/core';
import { getMenu } from '@shared/enum/paths.enum';
import { LogoModel } from '../../../core/models/file.model';
import { MenuModel } from '../../../core/models/menu.model';

@Component({
  selector: 'ccrl-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menu: MenuModel[] = getMenu();
  @Input() isHome: boolean = false;
  @Input() logo: LogoModel = new LogoModel();

  homeClasses() {
    return {
      'fixed-top': this.isHome,
      'stick-top': !this.isHome,
      'shadow-sm': !this.isHome,
    };
  }
}
