import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { UserService } from '../../user.service';
import { Observable, map } from 'rxjs';

export class UserNameValidator {
  static createValidator(userService: UserService): AsyncValidatorFn | null {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService.checkIfUserNameExist(control.value).pipe(
        map((res: boolean) => {
          return res ? { userNameExist: true } : null;
        })
      );
    };
  }
}
