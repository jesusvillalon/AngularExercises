import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments.prod';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl: string = environments.baseUrl;
  public userAdded = new Subject<Users>();
  private userToUpdate = new Subject<Users>();


  constructor(private http: HttpClient) {}


  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/users`);
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

  updateUser(user: Users): Observable<Users>{
    if(!user.id) throw Error("User id is required");
    return this.http.patch<Users>(`${this.baseUrl}/users/${user.id}`, user)
      .pipe(
        tap((updatedUser) => {
          this.userToUpdate.next(updatedUser)
        })
      )
  }

  setUpdatedUser(updatedUser: Users) {
    this.userToUpdate.next(updatedUser)
  }

  getUpdatedUser(): Observable<Users>{
    return this.userToUpdate.asObservable();
  }

  deleteUserById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
  }

}
