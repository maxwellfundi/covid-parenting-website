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
          return this.spliceWords(value);
        }
        
        
        const regex = new RegExp(args, 'gi');
        const match = value.match(regex);
       
        if (!match) {
          return this.spliceWords(value);
        }

        const replacedValue = value.replace(regex, `<span class='highlight'>${match[0]}</span>`);


        let count = (replacedValue.match(/highlight/g) || []).length;
        //this.findHighlight()
        console.log("am counting",match.reduce((count, row) => count + row.length, 0));

        filterMetadata.count = count;       
        

        return this.sanitizer.bypassSecurityTrustHtml(this.spliceWords(replacedValue))
      }

      spliceWords(words: string){
        return words.split(" ").splice(0,35).join(" ");
      }

      findHighlight(){
          let mat = document.getElementsByClassName("highlight")
          console.log("dg", mat)
      }
     
}