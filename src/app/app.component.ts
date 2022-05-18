import { Component, OnInit } from '@angular/core';
import { MyInterface } from 'src/models/my-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chaogla';
  tmp: MyInterface = {
    message : "test Interface",
    data:[this.title]
  };

  ngOnInit(){
    console.log(this.tmp);
    
  }

}
