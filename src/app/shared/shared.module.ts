import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, RouterOutlet, ComponentsModule],
  exports: [ComponentsModule],
})
export class SharedModule {}
