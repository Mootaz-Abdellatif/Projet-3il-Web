import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Poste} from '../Classes/poste';
import {PosteService} from '../Services/PosteService/poste.service';
import {Materiel} from '../Classes/materiel';
import {MaterielService} from '../Services/MaterielService/materiel.service';


// @ts-ignore
@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})

export class PosteComponent implements OnInit {

  id_Salle: number;
  id_Poste: number;
  etat = '';
  filter = '';
  postes: Poste[];
  materiels: Materiel[];

  data = '';
  numero_salle ='';


  constructor(private posteService: PosteService, private materielService: MaterielService ,private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.id_Salle = this.route.snapshot.params.salle_id_salle;
    this.data = this.route.snapshot.params.salle_id_salle;
    this.numero_salle = this.route.snapshot.params.numero_Salle;


    this.posteService.getPostes(this.id_Salle)
        .subscribe(value => {
          console.log(value);
          this.postes=value;
        }, error => console.log(error))



  }

  Start(id_poste){

    this.posteService.startPoste(id_poste)
      .subscribe(value => {
        console.log(value);
      });
    console.log(this.posteService.startPoste(id_poste));


  }
  StartAll(id_Salle){
    this.posteService.startAllPostes(id_Salle)
      .subscribe( value => {
        console.log(value);
      })

  }

  testSalle(id_Salle){
    this.posteService.testSalle(id_Salle)
      .subscribe(value => {
        console.log(value);

      })
  }

  refresh(): void {
    window.location.reload();
  }



}
