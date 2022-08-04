import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, Observable , of} from 'rxjs';
import { MatDialog} from '@angular/material/dialog'
import { DialogThingsComponent } from './main-features/dialog-things/dialog-things.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularSandBox';
  
  constructor(_http: HttpClient,
    public dialog: MatDialog){
  // _http.get('https://api.github.com/search/users').subscribe(result =>{
  //   console.log(result);
  // });
  // _http.get('https://api.github.com/user').subscribe(result =>{
  //   console.log(result);
  // });
}

  ngOnInit(): void {
  }
  
}