import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PresidenteDetalleComponent } from './presidente-detalle.component';
import { PresidentesComponent } from './presidentes.component';
import { PresidenteService } from './presidente.service';
import { DashboardComponent } from './dasboard.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detalles/:id',
        component: PresidenteDetalleComponent
      },
      {
        path: 'presidentes',
        component: PresidentesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PresidenteDetalleComponent,
    PresidentesComponent
  ],
  providers: [
    PresidenteService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
