import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  getSingleValueObservable,
  getDelayedValueObservable
} from './../util';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html'
})
export class ForkJoinOperatorComponent {
  show = false;
  values$ = forkJoin(
    getSingleValueObservable(),
    getDelayedValueObservable()
    // getMultiValueObservable(), forkJoin on works for observables that complete
  ).pipe(
    map(([first, second]) => { 
      return { first, second } as any;
    })
  );
}