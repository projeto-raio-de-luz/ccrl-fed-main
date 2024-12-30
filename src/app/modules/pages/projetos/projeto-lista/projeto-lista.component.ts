import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { OrganizationDataService } from '../../../../service/data/organization-data.service';
import { OrganizationService } from '../../../../service/organization.service';

@Component({
  selector: 'app-projeto-lista',
  templateUrl: './projeto-lista.component.html',
  styleUrl: './projeto-lista.component.scss'
})
export class ProjetoListaComponent implements OnInit {
  organizationId: string = '';
  projects: Project[] = [];

  constructor(
    private organizationService: OrganizationService,
    private organizationDataService: OrganizationDataService
  ) {}

  ngOnInit(): void {
    const data = this.organizationDataService.getData();

    if (data) {
      this.organizationId = data.id;
      this.getProjects();
    }
  }

  getProjects() {
    this.organizationService.getProjects(this.organizationId).subscribe({
      next: (response) => {
        this.projects = response;
        console.log(response);
      },
      error: (error) => console.error(error),
    });
  }
}
