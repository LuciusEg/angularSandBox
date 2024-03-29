import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: any;
  public usersT: any;

  userListForm = this._formBuilder.group({
    usersFA: this._formBuilder.array([['Alicse'], ['Bob'], ['John'] ])
  });

  get usersFa(){
    return this.userListForm.get('usersFA') as FormArray;
  }


  constructor(private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder) {
    this._route.queryParams.subscribe(params => console.log(params));
    this._route.data.subscribe(data => console.log(data));
    this._route.data.subscribe(data => console.log(data['user']));
  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(users => this.users = users);
    this.usersT = this._userService.getAllUsers()
      .subscribe(users => this.usersT,
        (err) => console.log(err),
        () => this.compareDebugPoint());

    this._router.events.subscribe((e: Event) => {
      if (e instanceof NavigationStart) {
        console.info(e);
      }
    })

  }

  compareDebugPoint() {
    let a = 0;
  }

  removeUser(name: string) {
    this._userService.remove(name);
    this.users = this._userService.getAllUsers();
  }

  addUser() {
    this.usersFa.push(this._formBuilder.control(''))
  }
}