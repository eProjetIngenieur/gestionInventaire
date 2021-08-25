import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PermissionComponent } from './permission/permission.component';




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
    LoginComponent,
    RoleComponent,
    
    PermissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
providers: [ApiService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
