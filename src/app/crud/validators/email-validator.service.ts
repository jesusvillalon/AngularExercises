import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map, of } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  constructor(private usersService: UsersService) {}
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const email = control.value;

    return this.usersService.getUsers().pipe(
      map((users) => {
        const emailExists = users.some((user) => user.email === email);
        return emailExists ? { emailTaken: true } : null;
      })
    );
  }
}

