import { NgModule } from '@angular/core';
import { AngSlideToggleComponent } from './ang-slide-toggle.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AngSlideToggleComponent],
  imports: [
    CommonModule
  ],
  exports: [AngSlideToggleComponent]
})
export class AngSlideToggleModule { }
