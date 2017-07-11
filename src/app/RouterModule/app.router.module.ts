import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from "../message/message.component";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {path: "messages", component: MessageComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
