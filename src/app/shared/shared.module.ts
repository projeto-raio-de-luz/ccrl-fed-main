import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './components/layout/layout.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, RouterOutlet, LayoutModule],
})
export class SharedModule {}
