import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(text: string ,limit:number): unknown {
    return text.split(" ",limit).join(" ");
  }

}
