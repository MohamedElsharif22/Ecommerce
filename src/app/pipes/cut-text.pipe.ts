import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(text:string): unknown {
    return text.split(' ').slice(0,2).join(' ');
  }

}
