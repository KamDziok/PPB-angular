import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegiComponent } from './regi/regi.component';
import { MyAdvertisementsComponent } from './my-advertisements/my-advertisements.component';
import { CategoryAdvertisementsComponent } from './category-advertisements/category-advertisements.component';
import { MailComponent } from './mail/mail.component';
import { MassageComponent } from './massage/massage.component';

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'regi' , component: RegiComponent},
  { path: 'my-advertisements' , component: MyAdvertisementsComponent},
  { path: 'category-advertisements' , component: CategoryAdvertisementsComponent},
  { path: 'mail' , component: MailComponent},
  { path: 'mail/massage' , component: MassageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
