import { ImageProfile } from './file.model';

export interface Employee {
  employeeId: string;
  fullName: string;
  displayName: string;
  role: string;
  employeeOrder: number;
  profile: ImageProfile;
}
