import { Component, Input } from '@angular/core';
import { OrganizationDetail } from '../../../core/models/organizacao.model';
import { Menu } from '../../../core/models/menu.model';
import { getMenu } from '@shared/enum/paths.enum';

@Component({
  selector: 'ccrl-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() organization: OrganizationDetail = new OrganizationDetail();
  menu: Menu[] = getMenu();
}
