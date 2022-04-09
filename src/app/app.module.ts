import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DelayDirective } from './shared/delay.directive';
import { MyColorDirDirective } from './shared/my-color-dir.directive';
import { DynamicItemComponent } from './dynamic-item/dynamic-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SomeInterceptor } from './services/Interceptors/some-interceptor.service';
import { PreloadAllModules, PreloadingStrategy, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserResolveService } from './services/user-resolve.service';
import { LoginComponent } from './login/login.component';
import { AppPreloadingStrategy } from './shared/app-preloading-strategy';

const routes = [
  { path: '', component: MainComponent},
  { 
    path: 'login', 
    component: LoginComponent, 
    outlet: 'popup' 
  },
  { 
    path: 'admin', 
    loadChildren: () => import ('./admin/admin.module')
                        .then(m => m.AdminModule)
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
  { path: 'user/:userId', component: UserComponent, children: [
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent},
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MyColorDirDirective,
    DelayDirective,
    DynamicItemComponent,
    UserListComponent,
    MainComponent,
    UserComponent,
    LoginComponent,
  ],
  entryComponents: [ DynamicItemComponent ], //динамические компоненты
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy }),
  ],
  providers: [ 
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SomeInterceptor,
      multi:true
    }, 
    AuthGuard,
    UserResolveService,
    AppPreloadingStrategy,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
