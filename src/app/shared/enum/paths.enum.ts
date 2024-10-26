import { MenuModel } from '../../core/models/menu.model';

enum PathEnum {
  PRINCIPAL = '',
  SOBRE = 'sobre',
  PROJETOS = 'projetos',
  TRANSPARENCIA = 'transparencia',
}

const menu: MenuModel[] = [
  { path: PathEnum.PRINCIPAL, titulo: 'Principal' },
  { path: PathEnum.SOBRE, titulo: 'Sobre' },
  { path: PathEnum.PROJETOS, titulo: 'Projetos' },
  { path: PathEnum.TRANSPARENCIA, titulo: 'Transparência' },
];

export function getMenu(): MenuModel[]{
  return menu;
};
