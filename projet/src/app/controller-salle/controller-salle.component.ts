import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-controller-salle',
  templateUrl: './controller-salle.component.html',
  styleUrls: ['./controller-salle.component.css']
})
export class ControllerSalleComponent implements OnInit {

  salles: any;
 constructor() {
    this.salles = [
      {
      numero: '103',
      infos: 'Examen',
      },
      {
        numero: '104',
        infos: 'Examen',
      },
      {
        numero: '105',
        infos: 'Examen',
      },
      {
        numero: '106',
        infos: 'Examen',
      },
      {
        numero: '107',
        infos: 'Examen',
      },
      {
        numero: '108',
        infos: 'Examen',
      },
      {
        numero: '201',
        infos: 'Examen',
      },
      {
        numero: '202',
        infos: 'Examen',
      },
      {
        numero: '203',
        infos: 'Examen',
      },
      {
        numero: '204',
        infos: 'Examen',
      },
      {
        numero: '205',
        infos: 'Examen',
      },
      {
        numero: '206',
        infos: 'Examen',
      }
      ];
  }

  ngOnInit(): void {
  }

}
