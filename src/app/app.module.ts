import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppPreloadingStrategy } from './shared/app-preloading-strategy';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthGuard } from './core/guards/auth.guard';
import { DynamicItemComponent } from './main-features/dynamic-item/dynamic-item.component';
import { SomeInterceptor } from './core/interceptors/some-interceptor.service';
import { UserResolveService } from './core/services/user-resolve.service';
import { UserService } from './core/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [ DynamicItemComponent ], //динамические компоненты
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,    
    NoopAnimationsModule,
    ReactiveFormsModule,
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
