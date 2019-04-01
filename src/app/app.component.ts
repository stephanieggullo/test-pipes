import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = 'Stephanie';
  arrNumb: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  PI: number = Math.PI;
  number: number = 0.234;
  salary: number = 1234.5;
  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'first',
      house: '19'
    }
  };
  date = new Date();
  video = 'mOeSfOJrUIk';
  active: boolean = true;

  promiseValue = new Promise((resolve) => {
    setTimeout( () => resolve('Llego la data :)'), 3000);
  });

}
