import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  

  transform(ch : any) {
    let voyelle = ['a','e','i','u','y','o','A','E','I','U','O','Y'];
    
    // ch = ch.toLowerCase()

    for (let i = 0; i < ch.length; i++) {

      for (let j = 0; j < voyelle.length; j++) {
      
        if (ch[i] === voyelle[j]){
          ch = ch.replaceAll(ch[i] , '*')
        }
        console.log(ch)
      }
      

    }

    return ch;
  }

}
