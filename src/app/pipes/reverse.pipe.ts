import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch : any) {
    
    let newch = ""
    
    for (let i = 0; i < ch.length; i++) {
      newch = newch[i] + newch
    }
    return newch
  }

}
