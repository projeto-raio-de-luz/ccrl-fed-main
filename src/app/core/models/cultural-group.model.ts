import { File } from "./file.model";

export interface CulturalGroup {
  id: string;
  name: string;
  description: string;
  creationDate: string;
  images: File[];
}
