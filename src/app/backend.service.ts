import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl = 'http://localhost:3000/';  // URL to web api  

  constructor(private http: HttpClient) { }

  getCompanyDetails(): Observable<any> {
    return this.http.get<string>(this.apiUrl + "companydetails").pipe(      
      catchError(this.handleError<any>('get Company Details ', null))
    )
  } 
  
  getCities(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "cities").pipe(      
      catchError(this.handleError<any>('get Company Details ', null))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
