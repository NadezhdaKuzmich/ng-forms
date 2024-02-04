import { AbstractControl } from '@angular/forms';

export function AgeValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (control.value >= 18) {
    return null;
  } else {
    return { age: true };
  }
}
