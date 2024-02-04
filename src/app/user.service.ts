import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private existingUserNames = ['admin', 'student', 'teacher'];
  constructor() {}

  checkIfUserNameExist(value: string) {
    return of(this.existingUserNames.some((name) => name === value)).pipe(
      delay(2000)
    );
  }
}
