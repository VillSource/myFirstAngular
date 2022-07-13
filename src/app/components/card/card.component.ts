import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imageURL:string ="";
  @Input() imageALT:string ="";
  @Input() cardTitle:string = "Card title";
  @Input() posted:Date = new Date();
  @Input() tags:string[] = [];

  url64:string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.url64 = btoa('anirut');
  }
}
