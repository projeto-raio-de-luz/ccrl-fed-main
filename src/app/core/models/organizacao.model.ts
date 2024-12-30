import { About as About } from './about';
import { Address as Address } from './address';
import { File, Logo as Logo } from './file.model';

export class Organization {
  id: string = '';
  name: string = '';
  active: boolean = false;
  logo: Logo = new Logo();
}

export class OrganizationDetail {
  id: string = '';
  name: string = '';
  cnpj: string = '';
  logo: Logo = new Logo();
  logoSecondary: Logo = new Logo();
  instagram: string = '';
  facebook: string = '';
  phone: string = '';
  email: string = '';
  homeBanners: File[] = [];
  pageBanners: File[] = [];
  about: About = new About();
  address: Address = new Address();
}
