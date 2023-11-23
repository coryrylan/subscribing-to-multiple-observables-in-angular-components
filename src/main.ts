import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ManualSubscriptionsComponent } from './manual-subscriptions/manual-subscriptions.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ForkJoinOperatorComponent } from './fork-join-operator/fork-join-operator.component';
import { CombineLatestOperatorComponent } from './combine-latest-operator/combine-latest-operator.component';
import { AsyncPipeObjectComponent } from './async-pipe-object/async-pipe-object.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ManualSubscriptionsComponent, AsyncPipeComponent, ForkJoinOperatorComponent, CombineLatestOperatorComponent, AsyncPipeObjectComponent],
  template: `
    <h1>Subscribing to multiple Observables in Angular Templates</h1>

    <h2>Manual Subscriptions</h2>
    <button (click)="show = !show">Toggle</button>
    <app-manual-subscriptions *ngIf="show"></app-manual-subscriptions>

    <hr />

    <app-async-pipe></app-async-pipe>

    <hr />

    <app-async-pipe-object></app-async-pipe-object>

    <hr />

    <app-fork-join-operator></app-fork-join-operator>

    <hr />

    <app-combine-latest-operator></app-combine-latest-operator>

  `,
})
export class App {
  show = false;
}

bootstrapApplication(App);
