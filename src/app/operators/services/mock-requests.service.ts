import { Injectable } from '@angular/core';
import { delay, filter, from, map, Observable, of, switchMap, take, throwError } from 'rxjs';
import { ADDRESSES, IAddress, IPerson, IPersonDetails, IPersonExternal, PEOPLE, PEOPLE_DETAILS, PEOPLE_EXTERNAL } from '../data/table-data';

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

  public getPeopleArray(): Observable<IPerson[]> {
    return of(PEOPLE);
  }

  public getPeopleSeparately(): Observable<IPerson> {
    return from(PEOPLE);
  }

  public getAddresses(): Observable<IAddress[]> {
    return of(ADDRESSES);
  }

  public getPeopleFromExternalSource(): Observable<IPersonExternal> {
    return from(PEOPLE_EXTERNAL);
  }

  public getPersonDetail(id: number): Observable<IPersonDetails> {
    return of(PEOPLE_DETAILS).pipe(
      delay(3000),
      map( (details) => details[id]),
      switchMap( (person) => {
        return of(person);
      })
    );
  }
}
