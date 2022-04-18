import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: any;
  public usersT: any;
  userForm: FormGroup= new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });;

  constructor(private _userService: UserService,
              private _route: ActivatedRoute,
              private _router: Router ) {
    this._route.queryParams.subscribe(params => console.log(params));
    this._route.data.subscribe(data => console.log(data));
    this._route.data.subscribe(data => console.log(data['user']));
  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(users=>this.users = users);
    this.usersT = this._userService.getAllUsers()
      .subscribe(users => this.usersT,
                (err)=>console.log(err),
                () => this.compareDebugPoint());
    
    this._router.events.subscribe((e: Event) =>
    {
      if (e instanceof NavigationStart) {
        console.log(e);        
      }
    })

    this.userForm.valueChanges.subscribe(value => console.log(value));
  }
  
  compareDebugPoint(){
    let a = 0;    
  }

  removeUser(name: string){
    this._userService.remove(name);
    this.users = this._userService.getAllUsers();
  }

  addUser(name: string){
    if(!name){return;}
    this._userService.add(name);
    this.users = this._userService.getAllUsers();
  }
}