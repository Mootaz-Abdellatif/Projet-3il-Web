// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
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
    path: 'postes/:salle_id_salle/:numero_Salle', component: PosteComponent
  },

  {
    path: 'home', component: HomeComponent
  },
  { path: '',   redirectTo: '/control', pathMatch: 'full' }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
