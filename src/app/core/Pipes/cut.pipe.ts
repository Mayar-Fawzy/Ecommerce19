import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(text: string | null | undefined, limit: number): unknown {
    if (!text) {
      return ''; // Return empty string if text is null or undefined
    }
    return text.split(" ", limit).join(" ");
  }

}
