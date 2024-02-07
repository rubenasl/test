import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo',
  standalone: true
})
export class YesNoPipe implements PipeTransform {

  transform(value: any): any {
    return value ? 'Completada' : "Pendiente";
  }

}
