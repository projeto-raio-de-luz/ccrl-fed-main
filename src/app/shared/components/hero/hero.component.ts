import { Component, Input } from '@angular/core';

@Component({
  selector: 'ccrl-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() title: string = '';
}
