import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './features/user-dashboard/user-dashboard.component';
import { UserprofileComponent } from './features/userprofile/userprofile.component';
import { UserridesComponent } from './features/userrides/userrides.component';
import { NewComponent } from './features/userrides/new/new.component';
import { UserstatsComponent } from './features/userstats/userstats.component';


export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, 
   {path:'userdashboard',component:UserDashboardComponent},
    {path:'userprofile',component:UserprofileComponent},
     {path:'userrides',component:UserridesComponent},
      {path:'userridesnew',component:NewComponent},
       {path:'userstats',component:UserstatsComponent},
  { path: '**', redirectTo: 'signup' },

];