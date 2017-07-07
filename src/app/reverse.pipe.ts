import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // Return a reversed copy if required, else return original
  transform(list: any, sortMode: string): any {
    if (sortMode == 'Bottom To Top') {
      return list.slice().reverse();
    }
    return list;
  }

}
