import { Component, OnInit } from '@angular/core';
import { OrganizationDataService } from '../../../service/data/organization-data.service';
import { OrganizationService } from '../../../service/organization.service';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.scss',
})
export class ProjetoComponent implements OnInit {
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
      },
      error: (error) => console.error(error),
    });
  }
}
