import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularSandBox';

  constructor(_http: HttpClient){
    // _http.get('https://api.github.com/search/users').subscribe(result =>{
    //   console.log(result);
    // });
    // _http.get('https://api.github.com/user').subscribe(result =>{
    //   console.log(result);
    // });

  }
}
