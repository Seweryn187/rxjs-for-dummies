import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockRequestsService {

  constructor() { }

  public getError(): Observable<any> {
    return of(1, 2, 3, 4, 5)
    .pipe(
      map(n => {
        if (n === 4) {
          throw 'There was problem sending request to server';
        }
        return n;
      }));
  }
}
