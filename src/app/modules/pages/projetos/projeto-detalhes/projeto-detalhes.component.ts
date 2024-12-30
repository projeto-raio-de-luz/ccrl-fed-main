import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationDataService } from '../../../../service/data/organization-data.service';
import { OrganizationService } from '../../../../service/organization.service';
import { ProjectDetail } from '../../../../core/models/project';
import { Document } from '../../../../core/models/file.model';

@Component({
  selector: 'app-projeto-detalhes',
  templateUrl: './projeto-detalhes.component.html',
  styleUrl: './projeto-detalhes.component.scss',
})
export class ProjetoDetalhesComponent implements OnInit {

  project: ProjectDetail = new ProjectDetail();
  documents: Document[] = [];

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private organizationDataService: OrganizationDataService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id')!;
    const organization = this.organizationDataService.getData();

    if (organization) {
      this.getProject(organization.id, projectId);
    }
  }

  getProject(organizationId: string, projectId: string) {
    this.organizationService.getProject(organizationId, projectId).subscribe({
      next: (response) => {
        this.project = response;
      },
      error: (error) => console.error(error),
    });
  }

  getProjectDocument(projectId: string) {
    this.organizationService.getProjectDocument(projectId).subscribe({
      next: (response) => {
        this.documents = response;
      },
      error: (error) => console.error(error),
    });
  }
}
