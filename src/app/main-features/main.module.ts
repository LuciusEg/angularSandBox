import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LoginComponent } from 'src/app/core/login/login.component';
import { DialogThingsComponent } from './dialog-things/dialog-things.component';
import { DynamicItemComponent } from './dynamic-item/dynamic-item.component';
import { ItemComponent } from './item/item.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DelayDirective } from '../shared/directives/delay.directive';
import { MyColorDirDirective } from '../shared/directives/my-color-dir.directive';

@NgModule({
  declarations: [
    DialogThingsComponent,    
    DynamicItemComponent,
    ItemComponent,
    LoginComponent,
    MainComponent,
    ProfileComponent,
    UserComponent,
    UserListComponent,
    DelayDirective,    
    MyColorDirDirective,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }


