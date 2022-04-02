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
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';

const routes = [
  { path: '', component: MainComponent},
  { path: 'user-list',
    data: {
      title: 'Users',
      anotherParameter: 'Some thing'
    },
    component: UserListComponent },
  { path: 'user/:userId', component: UserComponent},
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
  ],
  entryComponents: [ DynamicItemComponent ], //динамические компоненты
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ 
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SomeInterceptor,
      multi:true
    }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
