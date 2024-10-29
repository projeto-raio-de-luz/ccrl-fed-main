import { Component, Input } from '@angular/core';
import { MenuModel } from '../../../core/models/menu.model';
import { LogoModel } from '../../../core/models/file.model';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() logo: LogoModel = new LogoModel();
  @Input() menu: MenuModel[] = [];
  @Input() open = false;

  close(){
    this.open = false;
  }
}
