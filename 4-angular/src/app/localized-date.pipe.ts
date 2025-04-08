import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizedDate',
})
export class LocalizedDatePipe implements PipeTransform {
  transform(value: Date | null): string {
    if (!(value instanceof Date)) {
      throw new Error(
        'Invalid date: localizedDate pipe only accepts Date objects'
      );
    }

    return value.toLocaleDateString('lt-LT', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
