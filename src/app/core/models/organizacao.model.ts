import { AboutModel } from './about';
import { AddressModel } from './address';
import { LogoModel } from './file.model';

export class OrganizationModel {
  id: string = '';
  name: string = '';
  active: boolean = false;
  logo: LogoModel = new LogoModel();
}

export class OrganizationDetailModel {
  id: string = '';
  name: string = '';
  cnpj: string = '';
  logo: LogoModel = new LogoModel();
  logoSecondary: LogoModel = new LogoModel();
  instagram: string = '';
  facebook: string = '';
  phone: string = '';
  email: string = '';
  about: AboutModel = new AboutModel();
  address: AddressModel = new AddressModel();
}
