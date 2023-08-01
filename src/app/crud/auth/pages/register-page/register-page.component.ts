import { Users } from './../../../interfaces/users.interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from 'src/app/crud/interfaces/countries.interface';
import { countries } from 'src/app/crud/interfaces/countries-data.interface';
import { ValidatorsService } from 'src/app/crud/services/validators.service';
import { EmailValidatorService } from 'src/app/crud/validators/email-validator.service';
import { UsersService } from 'src/app/crud/services/users.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameLastNamePattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService]],
    isSubscribed: [''],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
  },
  {
    validators: [
      this.validatorsService.isConfirmedPassword('password', 'confirmPassword')
    ]
  }
  )

  public countries: Countries[] = countries;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService,
    private usersService: UsersService
  ) {}


  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field)
  }

  getFieldMessageError(field: string): string | null {
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {}
    for (const key of Object.keys(errors)) {
      switch(key) {
        case "required":
          return "Este campo es requerido";
        case "emailTaken":
          return "El email ya existe";
      }
    }
    return null
  }



  onSubmit() {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      const user = this.myForm.value;
      this.usersService.addUser(user);
      this.myForm.reset();
    }
  }




}
