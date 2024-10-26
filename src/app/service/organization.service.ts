import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { OrganizationDetailModel } from '../core/models/organizacao.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private baseUrl = environment.api;
  private organizationV1Url = this.baseUrl + '/v1/organizations';

  constructor(private http: HttpClient) {}

  obterDetalhes(): Observable<OrganizationDetailModel> {
    return this.http.get<OrganizationDetailModel>(
      `${this.organizationV1Url}/active`
    );
  }
}
