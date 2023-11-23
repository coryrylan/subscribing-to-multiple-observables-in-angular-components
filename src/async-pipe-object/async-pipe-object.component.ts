import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from './../util';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-async-pipe-object',
  templateUrl: './async-pipe-object.component.html'
})
export class AsyncPipeObjectComponent {
  show = false;
  first$ = getSingleValueObservable();
  second$ = getDelayedValueObservable();
  third$ = getMultiValueObservable();
}
