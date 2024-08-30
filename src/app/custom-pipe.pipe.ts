import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(obj: any, ...args: unknown[]): unknown {
    if (obj.gender=='M') {
      return args[0] + " Mr " + obj.name;
    } else {
      return args[0] + " Mrs " + obj.name;
    }
  }

}