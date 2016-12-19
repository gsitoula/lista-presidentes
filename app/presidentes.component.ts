import { Component, OnInit } from '@angular/core';

import { Presidente } from './presidente';
import { PresidenteService } from './presidente.service';

@Component({
  selector: 'los-presidentes',
  template: `<h2> de la Republica Argentina </h2>
              <ul class="presidentes">
                 <li *ngFor="let presidente of presidentes"
                  [class.selected]="presidente === selectedPresidente"
                  (click)="onSelect(presidente)">
                  <!-- cada presidente ira aqui -->
                  <span class="badge">{{presidente.id}}</span>
                  {{presidente.name}}
                </li>
              </ul>
            <presidente-detalle [presidente]="selectedPresidente"></presidente-detalle>
            `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .presidentes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .presidentes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      paggind: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .presidentes li.selected:hover {
      background-color: #BBd8CD !important;
      color: white;
    }
    .presidentes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: -3px;
    }
    .presidentes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [PresidenteService]
})
export class PresidentesComponent implements OnInit {
  presidentes: Presidente[];
  selectedPresidente: Presidente;

  constructor(private presidenteService: PresidenteService) { }

  getPresidentes(): void {
    this.presidenteService.getPresidentes().then(presidentes => this.presidentes = presidentes);
  }

  ngOnInit(): void {
    this.getPresidentes();
  }

  onSelect(presidente: Presidente): void {
    this.selectedPresidente = presidente;
  }
 }
