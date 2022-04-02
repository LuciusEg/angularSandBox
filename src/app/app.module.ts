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

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MyColorDirDirective,
    DelayDirective,
    DynamicItemComponent,
    UserListComponent,
  ],
  entryComponents: [ DynamicItemComponent ], //динамические компоненты
  imports: [
    BrowserModule,
    HttpClientModule,
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
