import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { AppPreloadingStrategy } from './shared/app-preloading-strategy';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/app',
    pathMatch: 'full', 
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    outlet: 'popup' 
  },
  {
    path: 'app',
    loadChildren: () => import('./main-features/main.module').then(x=>x.MainModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy }),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
