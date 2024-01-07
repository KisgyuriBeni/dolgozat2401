import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './parts/fooldal/fooldal.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { FoglalasokComponent } from './parts/foglalasok/foglalasok.component';
import { UjfoglalasComponent } from './parts/ujfoglalas/ujfoglalas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    NavbarComponent,
    FoglalasokComponent,
    UjfoglalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
