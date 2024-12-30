import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationDetail } from '../../core/models/organizacao.model';
import { OrganizationDataService } from '../../service/data/organization-data.service';
import { OrganizationService } from '../../service/organization.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  organization: OrganizationDetail = new OrganizationDetail();

  constructor(
    private organizationService: OrganizationService,
    private organizationDataService: OrganizationDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.organizationService.getDetails().subscribe({
      next: (response) => {
        this.organization = response;
        this.organizationDataService.setData(response);
      },
    });
  }

  isHome(): boolean {
    return this.router.url === '/';
  }
}
