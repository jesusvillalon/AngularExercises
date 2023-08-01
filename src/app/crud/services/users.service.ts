import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users.interface';
import { v4 as uuid } from 'uuid';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: Users[] = [];
  private usersSubject: Subject<Users[]> = new Subject<Users[]>();


  constructor() {}


  addUser(user: Users) {
    const newUser: Users = { ...user, id: uuid() };
    this.users.push(newUser);
    this.usersSubject.next(this.users);
  }

  getUsers(): Subject<Users[]> {
    return this.usersSubject;
  }

  deleteUserById(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }


  updateUser(updatedUser: Users) {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }
}
