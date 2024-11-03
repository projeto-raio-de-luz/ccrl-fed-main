import { Component } from '@angular/core';
import { OrganizationDetailModel } from '../../../core/models/organizacao.model';
import { OrganizationDataService } from '../../../service/data/organization-data.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  organization: OrganizationDetailModel = new OrganizationDetailModel();

  constructor(private organizationDataService: OrganizationDataService) {}

  ngOnInit(): void {
    const data = this.organizationDataService.getData();
    if (data) this.organization = data;
  }
}
