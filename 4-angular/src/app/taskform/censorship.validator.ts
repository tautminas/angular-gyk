import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function censorshipValidator(
  control: AbstractControl
): ValidationErrors | null {
  const censoredWords = ['hate', 'violence', 'racism'];
  const word = control.value;
  const censored = censoredWords.find((censoredWord) =>
    word.includes(censoredWord)
  );
  return censored ? { censored: { value: censored } } : null;
}
