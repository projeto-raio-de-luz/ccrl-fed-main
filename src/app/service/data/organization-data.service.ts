import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrganizationDetail } from '../../core/models/organizacao.model';
import { Employee } from '../../core/models/employee';

@Injectable({
  providedIn: 'root',
})
export class OrganizationDataService {
  private organizationDataSubject = new BehaviorSubject<OrganizationDetail | undefined>(undefined);

  data$: Observable<OrganizationDetail | undefined> = this.organizationDataSubject.asObservable();

  constructor() {}

  setData(data: OrganizationDetail) {
    this.organizationDataSubject.next(data);
  }

  getData(): OrganizationDetail | undefined {
    return this.organizationDataSubject.getValue();
  }
}
