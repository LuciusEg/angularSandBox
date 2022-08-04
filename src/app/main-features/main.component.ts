import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { DialogThingsComponent } from './dialog-things/dialog-things.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userId = 3;
  someControl = new FormControl('someText', [Validators.required, lenghtValidator(5)]);

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
    this.someControl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe((value) => console.log(value));
    this.someControl.statusChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe((status) => {
      console.log(this.someControl.errors);
      console.log(status);
    });
  }

  openDialog(){
    this.dialog.open(DialogThingsComponent)
  }
}

// Можно вынести в класс валидаторов и использовать как статические
function lenghtValidator(number: number) {
  return function (formControl:FormControl) {
    if (formControl.value.length < number) {
      return {lenghtValidator: {message: `Lenght Should be more than ${number}`}};
    }
    return null;
  }
}



// не корректно
// function lenghtAsyncValidator(formControl:FormControl): Observable<null|any> {
//   if (formControl.value.length < 5) {
//     return of({lenghtAsyncValidator: {message: 'Lenght Should be more than 5 async'} });
//   }
//   return of(null);
// }