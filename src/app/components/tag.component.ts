import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  template : `
    <a
      class="badge rounded-pill bg-dark bg-opacity-75 text-white me-2 text-decoration-none"
      style="padding: .75em 1em .75em 1em; "
      href={{tagRef}}
    >{{tagName}}</a>
  `
})
export class TagComponent{

  @Input() tagName:string = "tag";
  @Input() tagRef:string = "#";

  constructor() { }

}
