import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class ValidatorsService {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public isValidField(form: FormGroup, field: string){
    return form.controls[field].errors
    && form.controls[field].touched
  }

  // Verificamos si ambas contraseñas son iguales.
  public isConfirmedPassword(password1: string, password2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordValue1 = formGroup.get(password1)?.value;
      const passwordValue2 = formGroup.get(password2)?.value;

      if(passwordValue1 !== passwordValue2){
        formGroup.get(password2)?.setErrors({notEqual: true});
        return {notEqual: true};
      }

      formGroup.get(password2)?.setErrors(null);
      return null;

    }
  }

}
