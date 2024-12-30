import { Component, Input } from '@angular/core';
import { Menu } from '../../../core/models/menu.model';
import { Logo } from '../../../core/models/file.model';

@Component({
  selector: 'ccrl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() logo: Logo = new Logo();
  @Input() menu: Menu[] = [];
  @Input() open = false;

  close() {
    this.open = false;
  }
}
