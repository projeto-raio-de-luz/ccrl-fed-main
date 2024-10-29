import { Component, OnInit } from '@angular/core';
import { PathEnum } from '@shared/enum/paths.enum';
import { MenuModel } from '../../../core/models/menu.model';
import { OrganizationDetailModel } from '../../../core/models/organizacao.model';
import { OrganizationDataService } from '../../../service/data/organization-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pathEnum = PathEnum;
  organization: OrganizationDetailModel = new OrganizationDetailModel();
  routes: MenuModel[] = [];

  constructor(private organizationDataService: OrganizationDataService) {}

  ngOnInit(): void {
    const data = this.organizationDataService.getData();
    if (data) this.organization = data;
  }

  isVideo(data: any): boolean {
    return data.media_type === 'VIDEO';
  }
}
