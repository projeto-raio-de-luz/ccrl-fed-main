import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../service/organization.service';
import { OrganizationDetailModel } from '../../core/models/organizacao.model';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent implements OnInit {
  organization: OrganizationDetailModel = new OrganizationDetailModel();

  constructor(private organizationService: OrganizationService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.organizationService.obterDetalhes().subscribe({
      next: (response) => {
        this.organization = response;

        console.log(response);
      },
    });
  }
}
