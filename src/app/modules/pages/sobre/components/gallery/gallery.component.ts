import { Component, Input } from '@angular/core';
import { Images } from '../../../../../core/models/file.model';

@Component({
  selector: 'ccrl-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() images: Images[] = [];
}
