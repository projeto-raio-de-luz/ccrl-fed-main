import { Menu } from '../../core/models/menu.model';

export enum PathEnum {
  PRINCIPAL = '',
  SOBRE = 'sobre',
  PROJETOS = 'projetos',
  // TRANSPARENCIA = 'transparencia',
}

const menu: Menu[] = [
  { path: PathEnum.PRINCIPAL, title: 'Principal' },
  { path: PathEnum.SOBRE, title: 'Sobre' },
  { path: PathEnum.PROJETOS, title: 'Projetos' },
  // { path: PathEnum.TRANSPARENCIA, title: 'Transparência' },
];

export function getMenu(): Menu[] {
  return menu;
}
