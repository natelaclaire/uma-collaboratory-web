import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl = 'https://provost.uma.edu/collaboratory/api/';
  userData = new Subject<any>();
  userData$ = this.userData.asObservable();
  reservationsData = new Subject<any>();
  reservationsData$ = this.reservationsData.asObservable();
  error = {};
  userToken = '';

  constructor(private http: HttpClient) {}

  logIn(username, password): Observable<any> {
    let post = this.http.post(this.serviceUrl + 'users/login.json', {
      username: username,
      password: password
    });

    post.subscribe(
      (data: any) => {
        if (data.success) {
          this.userData.next(data.data);
          this.userToken = data.data.token;
        }
      }, // success path
      error => this.handleError(error) // error path
    );

    return post;
  }

  register(username, password, first_name, last_name, type): Observable<any> {
    let post = this.http.post(this.serviceUrl + 'users/register.json', {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      type: type
    });

    post.subscribe(
      (data: any) => {
        if (data.success) {
          this.userData.next(data.data);
          this.userToken = data.data.token;
        }
      }, // success path
      error => this.handleError(error) // error path
    );

    return post;
  }

  logOut() {
    this.http
      .post(
        this.serviceUrl + 'user/logout.json',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + this.userToken
          }
        }
      )
      .subscribe(
        (data: any) => this.userData.next({ user: { username: '' } }), // success path
        error => this.handleError(error) // error path
      );
    this.userToken = '';
  }

  getReservations() {
    this.http
      .get(this.serviceUrl + 'reservations/index.json', {
        headers: {
          Authorization: 'Bearer ' + this.userToken
        }
      })
      .subscribe(
        (data: any) => this.reservationsData.next(data.data), // success path
        error => this.handleError(error) // error path
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
