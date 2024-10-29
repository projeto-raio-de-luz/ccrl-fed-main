import { Component } from '@angular/core';
import { OrganizationDetailModel } from '../../core/models/organizacao.model';
import { OrganizationDataService } from '../../service/data/organization-data.service';
import { OrganizationService } from '../../service/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  organization: OrganizationDetailModel = new OrganizationDetailModel();

  constructor(
    private organizationService: OrganizationService,
    private organizationDataService: OrganizationDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }
  carregarDados() {
    this.organizationService.obterDetalhes().subscribe({
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
