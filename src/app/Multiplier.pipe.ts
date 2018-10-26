import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'Multiplier'})
export class Multiplier implements PipeTransform {
  transform(value: number): number {
    //let exp = parseFloat(exponent);
    return value*10;
  }
}