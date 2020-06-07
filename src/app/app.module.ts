import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegiComponent } from './regi/regi.component';
import { LoginComponent } from './login/login.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { CategoryAdvertisementsComponent } from './category-advertisements/category-advertisements.component';
import { MyAdvertisementsComponent } from './my-advertisements/my-advertisements.component';
import { MailComponent } from './mail/mail.component';
import { MassageComponent } from './massage/massage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegiComponent,
    LoginComponent,
    AdvertisementComponent,
    AdvertisementsComponent,
    CategoryAdvertisementsComponent,
    MyAdvertisementsComponent,
    MailComponent,
    MassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
