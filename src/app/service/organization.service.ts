import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { OrganizationDetail } from '../core/models/organizacao.model';
import { Employee } from '../core/models/employee';
import { Document } from '../core/models/file.model';
import { CulturalGroup } from '../core/models/cultural-group.model';
import { Project, ProjectDetail } from '../core/models/project';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private baseUrl = environment.api;
  private url = this.baseUrl + '/v1/organizations';
  private urlProject = this.baseUrl + '/v1/projects';

  constructor(private http: HttpClient) {}

  getDetails(): Observable<OrganizationDetail> {
    return this.http.get<OrganizationDetail>(`${this.url}/active`);
  }

  getPartner(organizationId: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/${organizationId}/partner`);
  }
  getEmployees(organizationId: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/${organizationId}/employees`);
  }

  getDocuments(organizationId: string): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.url}/${organizationId}/files?type=DOCUMENT`);
  }

  getCulturalGroup(organizationId: string): Observable<CulturalGroup[]> {
    return this.http.get<CulturalGroup[]>(`${this.url}/${organizationId}/cultural-groups`);
  }

  getProjects(organizationId: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/${organizationId}/projects`);
  }

  getProject(organizationId: string, projectId: string): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${this.url}/${organizationId}/projects/${projectId}`);
  }

  getProjectDocument(projectId: string): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.urlProject}/projects/${projectId}/documents`);
  }
}
