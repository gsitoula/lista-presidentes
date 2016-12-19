import { Component, OnInit } from '@angular/core';

import { Presidente } from './presidente';
import { PresidenteService } from './presidente.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    presidentes: Presidente[] = [];

    constructor(private presidenteService: PresidenteService) { }

    ngOnInit(): void {
      this.presidenteService.getPresidentes().then(presidentes => this.presidentes = presidentes.slice(1, 5));
    }
 }
