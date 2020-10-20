import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalleComponent } from './salle/salle.component';
import { ControllerSalleComponent} from './controller-salle/controller-salle.component';
import { PosteComponent } from './poste/poste.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'salle' , component : SalleComponent},
  {
    path:'control', component:ControllerSalleComponent
  },
  {
    path:'poste',component:PosteComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
