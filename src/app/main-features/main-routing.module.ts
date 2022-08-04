import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { UserResolveService } from '../core/services/user-resolve.service';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'admin',
        data: {
          noPreload: false,
        },
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'user-list',
        canActivate: [ AuthGuard ],
        resolve: {
          user: UserResolveService
        },
        data: {
          title: 'Users',
          anotherParameter: 'Some thing'
        },
        component: UserListComponent },
      {
        path: 'user/:userId',
        component: UserComponent,
        children: [
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'settings',
          component: SettingsComponent
        },
      ]},
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
