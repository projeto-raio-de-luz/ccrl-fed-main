import { Component, Input } from '@angular/core';
import { File } from '../../../../../../core/models/file.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  @Input() images: File[] = [];
  
}
