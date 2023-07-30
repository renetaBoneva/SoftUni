import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true, //default value, pure function will memoize
  // pure: false, -> don't memoize pure functions
})
export class ReducePipe implements PipeTransform {

  transform(
    array: number[], 
    reduceFn: (acc: any, curr: number) => any, 
    initialValue: number): unknown {
    return array.reduce(reduceFn, initialValue);
  }

}
