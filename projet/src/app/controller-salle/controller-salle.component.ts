import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Salle} from '../Classes/salle';
import {SalleService} from '../Services/SalleService/salle.service';

// @ts-ignore
@Component({
  selector: 'app-controller-salle',
  templateUrl: './controller-salle.component.html',
  styleUrls: ['./controller-salle.component.css']
})
export class ControllerSalleComponent implements OnInit {
  salles: Salle[];

  constructor(private salleService: SalleService) {}

  ngOnInit(): void {
    this.getSalles();
  }

  // tslint:disable-next-line:typedef
  private getSalles(){
    this.salleService.getSallesList().subscribe((value: Salle[]) => {
      this.salles = value;
      console.log(value);
    });
  }
}

