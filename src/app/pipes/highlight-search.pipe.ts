import { Pipe, PipeTransform} from '@angular/core'
import {DomSanitizer } from '@angular/platform-browser'
import { filter } from 'rxjs/operators';

@Pipe({
    name: "highlightSearch",
})

export class HighlightSearchPipe implements PipeTransform {


    constructor(private sanitizer: DomSanitizer){}
  
    transform( value: any, args: any, filterMetadata: any): any {
        if (!args) {
          return value;
        }
        
        
        const regex = new RegExp(args, 'gi');
        const match = value.match(regex);
       
        if (!match) {
          return value;
        }

        const replacedValue = value.replace(regex, `<span class='highlight'>${match[0]}</span>`);

        
        const count = (replacedValue.match(/highlight/g) || []).length;
        filterMetadata.count = count;

       
        

        return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
      }

     
}