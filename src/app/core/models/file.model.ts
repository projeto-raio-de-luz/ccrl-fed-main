export class File {
  fileId: string = '';
  title: string = '';
  description: string = '';
  url: string = '';
  date: string = '';
  highlight: boolean = false;
  createdAt: string = '';
  updatedAt: string = '';
}

export class Document {
  fileId: string = '';
  url: string = '';
  title: string = '';
  highlight: boolean = false;
  createdAt: string = '';
  updatedAt: string = '';
}

export class Images extends File {}

export interface ImageProfile {
  fileId?: string;
  url: string;
  createdAt?: string;
  updatedAt?: string;
}

export class Logo {
  fileId: string = '';
  url: string = '';
  path?: string = '';
}
