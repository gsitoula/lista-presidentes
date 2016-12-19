import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PresidenteService } from './presidente.service';

import { Presidente } from './presidente';

@Component({
  selector: 'presidente-detalle',
  template: `
    <div *ngIf="presidente">
      <h2>{{presidente.name}}</h2>
      <div><label>id: </label>{{presidente.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="presidente.name" placeholder="name"/><br>
        <label>date: </label>{{presidente.date}}
      </div>
    </div>
  `
})
export class PresidenteDetalleComponent {
  @Input()
  presidente: Presidente;
}
