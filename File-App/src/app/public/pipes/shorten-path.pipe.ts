import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenPath'
})
export class ShortenPathPipe implements PipeTransform {

  transform(value: string, args : string): string {

    if (args === undefined) {
      return value;
    }

    if(value.includes(args)){
      let index = value.indexOf(args);
      value = "...\\"+value.substring(index,value.length);
    }

    return value;
  }

}
