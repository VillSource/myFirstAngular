import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { CardComponent } from '../components/card/card.component';
import { ComponentsModule } from '../components/components.module';
import { BlogComponent } from './blog.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    TimelineComponent,
    BlogComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ComponentsModule
  ]
})
export class BlogModule { }
