import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TagComponent } from './tag.component';



@NgModule({
  declarations: [
    CardComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
