import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, maxCount: number): unknown {
    return `${value.substring(0, maxCount)}${value.length > maxCount ? '...' : ''}`;
  }

}
