import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { DetailsInterfaceComponent } from './details-interface/details-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLogoutComponent,
    DetailsInterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
