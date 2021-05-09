import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myslice'
})
export class MySlicePipe implements PipeTransform {

  transform(value: string, start: number = 0, end: number = value.length - 1): string {
    return value.slice(start, end);
  }

}
