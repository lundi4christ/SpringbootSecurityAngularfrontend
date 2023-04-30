import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { User} from '../user/model';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsersDetails(): Observable<User[]>{
    return this.http.get<User[]>('/users/allUsers')
      .pipe(retry(1), catchError(this.errorHandler));
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('/users/getUser/' + id );
  }

  saveUser(theUser): Observable<User>{
    return this.http.post<User>('/users/saveUsers', theUser)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  updateUser(theUser): Observable<User>{
    return this.http.put<User>('/users/updateUser', theUser)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  // tslint:disable-next-line:typedef
  public deleteUser(user: User) {
    return this.http.delete<User>('/users/deletebyid' + '/' + user.id);
  }

  // tslint:disable-next-line:typedef
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
