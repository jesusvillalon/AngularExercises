import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments.prod';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl: string = environments.baseUrl;
  public userAdded = new Subject<Users>();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: string): Observable<Users | undefined> {
    return this.http.get<Users>(`${this.baseUrl}/users/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }


  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}/users`, user)
      .pipe(
        tap((addedUser) => {
          this.userAdded.next(addedUser);
        })
      );
  }

  getAddedUser(): Observable<Users> {
    return this.userAdded.asObservable();
  }

  updateUser(user : Users): Observable<Users>{
    if(!user.id) throw Error("User id is required");
    return this.http.patch<Users>(`${this.baseUrl}/users/${user.id}`, user)
  }

  deleteUserById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false))
      )
  }

}
