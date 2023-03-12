import { Injectable } from '@angular/core';
import { from, map, Observable, of, throwError } from 'rxjs';
import { ADDRESSES, IAddress, IPerson, IPersonExternal, PEOPLE, PEOPLE_EXTERNAL } from '../data/table-data';

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

  public getPeopleOf(): Observable<IPerson[]> {
    return of(PEOPLE);
  }

  public getPeopleFrom(): Observable<IPerson> {
    return from(PEOPLE);
  }

  public getAddresses(): Observable<IAddress[]> {
    return of(ADDRESSES);
  }

  public getPeopleFromExternalSource(): Observable<IPersonExternal> {
    return from(PEOPLE_EXTERNAL);
  }
}
