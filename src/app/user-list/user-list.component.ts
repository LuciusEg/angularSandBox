import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: any;
  public usersT: any;

  constructor(private _userService: UserService,
              private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params => console.log(params));
    this.route.data.subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(users=>this.users = users);
    this.usersT = this._userService.getAllUsers()
      .subscribe(users => this.usersT,(err)=>console.log(err),() => this.compareDebugPoint());
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