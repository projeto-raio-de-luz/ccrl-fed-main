import { Component, Input } from '@angular/core';

@Component({
  selector: 'ccrl-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.scss',
})
export class CardPostComponent {
  @Input() url: string = '';
  @Input() permalink: string = '';

  // setImg(value: string): string {
  //   return `${value}?time=${Date.now()}`;
  // }
}
