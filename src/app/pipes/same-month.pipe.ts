import { Pipe, PipeTransform } from '@angular/core';
import { customerIF } from '../datamodel/users';

@Pipe({
  name: 'sameMonth'
})
export class SameMonthPipe implements PipeTransform {

  transform(value: customerIF | undefined, appendTo: customerIF): unknown {
    if (!value) {
      return ''
    }
    return (value.birthDate as Date).getMonth() === (appendTo.birthDate as Date).getMonth() 
      ? '\u{1F382}' : ''
  }

}
