import { Injectable } from '@angular/core';

import { Presidente } from './presidente';
import { PRESIDENTES } from './mock-presidentes';

@Injectable()
export class PresidenteService {
  getPresidentes(): Promise<Presidente[]> {
    return Promise.resolve(PRESIDENTES);
  } // estufa
}
