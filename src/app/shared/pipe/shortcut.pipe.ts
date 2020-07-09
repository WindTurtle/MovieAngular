import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut',
})
export class ShortcutPipe implements PipeTransform {
  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substr(0, limit) + '....';
    }
    return value;
  }
}
