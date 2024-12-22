import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomePageComponent } from './screens/home-page/home-page.component';

export const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
];
