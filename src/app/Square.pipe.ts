import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'Square'})
export class Square implements PipeTransform {
  transform(value: number): number {
    //let exp = parseFloat(exponent);
    return Math.pow(value, 2);
  }
}