export class FileModel {
  fileId: string = '';
  title: string = '';
  description: string = '';
  url: string = '';
  date: string = '';
  highlight: boolean = false;
  createdAt: string = '';
  updatedAt: string = '';
}

export class ImageProfileModel {
  fileId: string = '';
  url: string = '';
}

export class LogoModel {
  fileId: string = '';
  url: string = '';
  path?: string = '';
}
