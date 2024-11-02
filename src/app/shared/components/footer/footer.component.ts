import { Component, Input } from '@angular/core';
import { OrganizationDetailModel } from '../../../core/models/organizacao.model';
import { MenuModel } from '../../../core/models/menu.model';
import { getMenu } from '@shared/enum/paths.enum';

@Component({
  selector: 'ccrl-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() organization: OrganizationDetailModel = new OrganizationDetailModel();
  menu: MenuModel[] = getMenu();
}
