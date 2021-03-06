import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { NextPageComponent } from './next-page/next-page.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
     path: 'navbar',
    component:NavbarComponent
  },
  // {
  //    path: '**',
  //   component:Page404Component
  // },

  {
    path: 'listUser',
   component:ListeUserComponent
 },
 {
  path: 'addUser',
 component:AddUserComponent
},
{
  path: 'updateUser/:index',
 component:UpdateUserComponent
},
{
  path: 'next-page',
 component:NextPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
