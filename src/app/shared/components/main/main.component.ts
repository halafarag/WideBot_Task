import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('box', [
      state('in', style({ opacity: 1, transform: 'translateX(0px)' })),

      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate(500),
      ]),
    ]),
    trigger('box2', [
      state('in', style({ opacity: 1, transform: 'translateX(0px)' })),

      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(500),
      ]),
    ]),
  ],
})
export class MainComponent {}
