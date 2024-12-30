import { Employee } from './employee';
import { Document, File } from './file.model';

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

export class ProjectDetail {
  id: string = '';
  name: string = '';
  description: string = '';
  startDate: string = '';
  endDate: string = '';
  documents: Document[] = [];
  employees: Employee[] = [];
  images: File[] = [];
}
