import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Countries } from 'src/app/crud/interfaces/countries.interface';
import { countries } from 'src/app/crud/interfaces/countries-data.interface';
import { ValidatorsService } from 'src/app/crud/services/validators.service';
import { UsersService } from 'src/app/crud/services/users.service';
import { Users } from 'src/app/crud/interfaces/users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  public userForm: FormGroup = this.fb.group({
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string> ('', [Validators.required, Validators.minLength(6)]),
    confirmPassword:new FormControl<string> ('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl<string> ('', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]),
    isSubscribed: new FormControl<boolean>(false),
    country: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    if(!this.router.url.includes("edit")) return;

    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.usersService.getUserById(id)))
      .subscribe((user) => {
        if(!user) return this.router.navigateByUrl('/')
        this.userForm.reset(user);
        return;
      })

  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.userForm, field)
  }

  // Obtenemos el mensaje de error en caso de que el campo no haya sido rellenado.
  getFieldMessageError(field: string): string | null {
    if(!this.userForm.controls[field]) return null;

    const errors = this.userForm.controls[field].errors || {}
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

  get currentUser(): Users {
    const user = this.userForm.value as Users;
    return user;
  }


  onSubmit() {
    this.userForm.markAllAsTouched();
    if(this.userForm.invalid) return;
    if(this.currentUser.id){
      this.usersService.updateUser(this.currentUser).subscribe();
      return;
    }
    this.usersService.addUser(this.currentUser).subscribe((user) => {

    })
    this.userForm.reset()
  }
}
