import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false
})
export class JoinPipe implements PipeTransform {

  transform(value: any[], prop: string): string {
    return value.map(item => item[prop]).join(', ');
  }

}
