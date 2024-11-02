import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrganizationDetailModel } from '../../core/models/organizacao.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationDataService {
  private organizationDataSubject = new BehaviorSubject<OrganizationDetailModel | undefined>(
    undefined
  );

  data$: Observable<OrganizationDetailModel | undefined> =
    this.organizationDataSubject.asObservable();

  constructor() {}

  setData(data: OrganizationDetailModel) {
    this.organizationDataSubject.next(data);
  }

  getData(): OrganizationDetailModel | undefined {
    return this.organizationDataSubject.getValue();
  }
}
