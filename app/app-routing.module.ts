import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component'; 
import { NavComponent } from './nav/nav.component';
import { InventaireComponent } from './inventaire/inventaire.component'; 

const routes: Routes = [
  { path:'Student', component: StudentComponent},
  { path: 'Nav', component: NavComponent},
  { path: 'Inventaire', component: InventaireComponent}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
