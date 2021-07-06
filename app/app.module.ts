import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NavComponent } from './nav/nav.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavComponent,
    InventaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
providers: [ApiService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
