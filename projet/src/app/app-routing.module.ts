import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalleComponent } from './salle/salle.component';
import { ControllerSalleComponent} from './controller-salle/controller-salle.component';
import { PosteComponent } from './poste/poste.component';
import { HomeComponent } from './home/home.component';
import { DetailsPosteComponent } from './details-poste/details-poste.component';

const routes: Routes = [
  { path: 'salle' , component : SalleComponent},
  {
    path: 'control', component: ControllerSalleComponent
  },
  {
    path: 'postes/:id', component: PosteComponent
  },
  {
    path: 'postes/:id', component: DetailsPosteComponent
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
