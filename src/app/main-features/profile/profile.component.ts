import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(value => console.log(value));
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
