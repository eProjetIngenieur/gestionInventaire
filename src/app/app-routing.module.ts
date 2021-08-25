import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component'; 
import { InventaireComponent } from './inventaire/inventaire.component';
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
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [

  { path:'', component: AppComponent,
  canActivate:[AuthGuard]

  },
  { path:'Student', component: StudentComponent},
  { path: 'Role', component: RoleComponent},
  { path: 'Inventaire', component: InventaireComponent},
  { path: 'Admin', component: AdminComponent},
  { path: 'Group', component: GroupComponent},
  { path: 'User', component: UserComponent},
  { path: 'add_Group', component: AddGroupComponent},
  { path: 'add_User', component: AddUserComponent},
  { path: 'Article', component: ArticleComponent},
  { path: 'add_Article', component: AddArticleComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'permission', component: PermissionComponent },
  
  
  

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
