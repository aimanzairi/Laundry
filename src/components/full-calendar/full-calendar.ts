import { Component } from '@angular/core';

/**
 * Generated class for the FullCalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'full-calendar',
  templateUrl: 'full-calendar.html'
})
export class FullCalendarComponent {

  text: string;

  constructor() {
    console.log('Hello FullCalendarComponent Component');
    this.text = 'Hello World';
  }

}
