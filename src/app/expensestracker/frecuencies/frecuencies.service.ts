import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Frecuency } from './frecuencies.reducer';

const API_URL = environment.apiBaseUrl;
const API_CONTROLLER = 'frecuency';

@Injectable()
export class FrecuenciesService {

  constructor(private httpClient: HttpClient) { }

  retrieveFrecuencies(): Observable<Frecuency[]>{
    // return this.httpClient
    //   .get(API_URL + 'frecuency')
    //   .pipe(
    //     map((response: Response) => response.json()),
    //     map(trType => ({ id: trType.TransportTypeId, name: trType.Name }))
    //   );
    return new Observable<Frecuency[]>();
  }
}
