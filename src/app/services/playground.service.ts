import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsonPost } from 'src/models/jsonPost.model.tmp';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(private http:HttpClient) { }

  tmp(){
    return this.http.get<any>(environment.apiServer + "/users");
  }

  getPostFromJSON(){
    return this.http.get<JsonPost[]>("/assets/posts.json");
  }

}
