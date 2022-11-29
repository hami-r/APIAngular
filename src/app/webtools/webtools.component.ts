import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-webtools',
  templateUrl: './webtools.component.html',
  styleUrls: ['./webtools.component.css']
})
export class WebtoolsComponent {
  
   constructor(private api:ApiService){
      api.fetchWebTools().subscribe(
       (response) => {
          this.list = response
       }
      ) 
   }
  
   list:any = []
}