import { Component, Input } from '@angular/core';

@Component({
  selector: 'ccrl-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.scss',
})
export class CardPostComponent {
  @Input() url: string | undefined = '';
  @Input() permalink: string = '';
}
