import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  postes: any;

  data = '';
  constructor(private router: ActivatedRoute) {
    this.postes = [
      {
        numero: '1'
      },
      {
        numero: '2'
      },
      {
        numero: '3'
      },
      {
        numero: '4'
      },
      {
        numero: '5'
      },
      {
        numero: '6'
      },
      {
        numero: '7'
      },
      {
        numero: '8'
      },
      {
        numero: '9'
      },
      {
        numero: '10'
      },
      {
        numero: '11'
      },
      {
        numero: '12'
      }
];
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
    this.data = this.router.snapshot.params.id;
  }

}
