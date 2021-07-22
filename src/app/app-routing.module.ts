import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component'; 
import { NavComponent } from './nav/nav.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { AdminComponent } from './admin/admin.component';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'Student', component: StudentComponent},
  { path: 'Nav', component: NavComponent},
  { path: 'Inventaire', component: InventaireComponent},
  { path: 'Admin', component: AdminComponent},
  { path: 'Group', component: GroupComponent},
  { path: 'User', component: UserComponent},
  { path: 'add_Group', component: AddGroupComponent},
  { path: 'add_User', component: AddUserComponent},
  { path: 'Article', component: ArticleComponent},
  { path: 'add_Article', component: AddArticleComponent},
  { path: 'dashboard', component: DashboardComponent }

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
