import { Component, OnInit } from '@angular/core';
import { PlaygroundService } from 'src/app/services/playground.service';
import { JsonPost } from 'src/models/jsonPost.model.tmp';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tmp:JsonPost[] = [];

  constructor(private service:PlaygroundService) { }

  ngOnInit(): void {
    this.service.getPostFromJSON()
      .subscribe(data=>{
        this.tmp = data
      })      
    } 

}
