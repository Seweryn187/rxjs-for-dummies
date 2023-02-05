import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeSpacebarToDivider'
})
export class ChangeSpacebarToDividerPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll(' ', '-');
  }

}
