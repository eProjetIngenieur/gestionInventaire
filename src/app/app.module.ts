import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NavComponent } from './nav/nav.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavComponent,
    InventaireComponent,
    AdminComponent,
    GroupComponent,
    UserComponent,
    AddGroupComponent,
    AddUserComponent,
    ArticleComponent,
    AddArticleComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
providers: [ApiService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
