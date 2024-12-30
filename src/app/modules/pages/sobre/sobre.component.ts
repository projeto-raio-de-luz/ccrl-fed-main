import { Component } from '@angular/core';
import { About } from '../../../core/models/about';
import { Employee } from '../../../core/models/employee';
import { Document } from '../../../core/models/file.model';
import { OrganizationDetail } from '../../../core/models/organizacao.model';
import { OrganizationDataService } from '../../../service/data/organization-data.service';
import { OrganizationService } from '../../../service/organization.service';
import { CulturalGroup } from '../../../core/models/cultural-group.model';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  organization: OrganizationDetail = new OrganizationDetail();
  principles: any[] = [];
  employees: Employee[] = [];
  documents: any[] = [];
  culturalGroups: CulturalGroup[] = [];

  constructor(
    private organizationService: OrganizationService,
    private organizationDataService: OrganizationDataService
  ) {}

  ngOnInit(): void {
    const data = this.organizationDataService.getData();

    if (data) {
      this.organization = data;
      this.setPrinciples(data.about);
      this.getEmployees();
      this.getDocuments();
      this.getCulturalGroup();
    }
  }

  setPrinciples(about: About): void {
    this.principles = [
      { title: 'missao', description: about.mission },
      { title: 'valores', description: about.values },
      { title: 'visao', description: about.vision },
    ];
  }

  getEmployees() {
    this.organizationService.getEmployees(this.organization.id).subscribe({
      next: (response) => {
        this.employees = response;
      },
      error: (error) => console.error(error),
    });
  }

  getDocuments() {
    this.organizationService.getDocuments(this.organization.id).subscribe({
      next: (response) => {
        this.documents = response;
      },
      error: (error) => console.error(error),
    });
  }

  getCulturalGroup() {
    this.organizationService.getCulturalGroup(this.organization.id).subscribe({
      next: (response) => {
        this.culturalGroups = response;
      },
      error: (error) => console.error(error),
    });
  }
}
