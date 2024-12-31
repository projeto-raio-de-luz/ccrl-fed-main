import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationDetail } from '../../core/models/organizacao.model';
import { OrganizationDataService } from '../../service/data/organization-data.service';
import { OrganizationService } from '../../service/organization.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
    private router: Router,
    private titleService: Title,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    if (isPlatformBrowser(this.platformId)) {
      this.setPageTitleAndIcon();
    }
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

  setPageTitleAndIcon() {
    // Definir o título
    this.titleService.setTitle(this.organization.name);

    // Definir o ícone (favicon)
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.rel = 'icon';
    link.href = this.organization.logo.url;

    // Remover favicon antigo, se existir
    const oldLink = document.querySelector("link[rel='icon']");
    if (oldLink) {
      this.renderer.removeChild(document.head, oldLink);
    }

    // Adicionar novo favicon
    this.renderer.appendChild(document.head, link);
  }

}
