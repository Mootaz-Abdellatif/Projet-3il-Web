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
  id_Poste: bigint;
  etat = '';
  materiels: Materiel[];

  postes: Poste[];

  data = '';

  constructor(private posteService: PosteService, private materielService: MaterielService ,private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {

    this.id_Salle = this.route.snapshot.params.salle_id_salle;
    this.data = this.route.snapshot.params.salle_id_salle;
    console.log('mmmmmmmmmmmmmmm');
     console.log(this.data);
    console.log(this.id_Salle);

    this.posteService.getPostes(this.id_Salle)
        .subscribe(value => {
          console.log(value);
          this.postes=value;
          //   console.log("3asba");
          // value.forEach(x => {
          //     this.materielService.getMaterielList(x.id_Poste)
          //         .subscribe(value1 => {
          //             console.log(x.id_Poste);
          //             console.log(value1);
          //             this.materiels=value1;
          //         });
          //
          //
          // })
        }, error => console.log(error))


  }





}
