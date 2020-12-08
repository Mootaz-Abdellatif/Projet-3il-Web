import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root' ,
  template:`

  <app-header></app-header>


  <app-home></app-home>



  <app-footer></app-footer>

  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
}
