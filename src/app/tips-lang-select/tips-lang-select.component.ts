import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Language } from '../tip-sheets/tip-sheets.model';

@Component({
  selector: 'app-tips-lang-select',
  templateUrl: './tips-lang-select.component.html',
  styleUrls: ['./tips-lang-select.component.scss']
})
export class TipsLangSelectComponent implements OnInit, OnChanges {

  @Output() onLanguageChange: EventEmitter<Language> = new EventEmitter();
  @Input() currentLanguage: Language= { type: 1, code: "en", name: "English" };
  @Input() languages: Language[] = [{ type: 1, code: "en", name: "English" }];
  selectedRange: string[] = null; //should always be contained in the letter ranges
  letterRanges: string[][] = [["A", "B"], ["C", "F"], ["G", "J"], ["K", "L"], ["M", "P"], ["R", "S"], ["T", "Z"], ["OTHERS", ""]];
  dropdownLanguages: Language[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //todo. commented out because this component input is designed to be passed when initialising the component only.
    //if the code below is uncommented the output emitted by this component may cause the input  of this component be changed by other components that host this component e.g Tips component

   // if (changes.languages) {
      //this.onLetterRangeClick(this.selectedRange, false);
    //}
  }

  ngOnInit(): void {
    if(this.selectedRange === null){
      this.onLetterRangeClick(this.letterRanges[1], false);
    }else{ 
      this.onLetterRangeClick(this.selectedRange, true);
    }
   
  }

  onLetterRangeClick(range: string[], changeLang: boolean = true) {
    //for "others" do differently
    let bType2: boolean = (range[0] === "OTHERS");
    let lowerLetter: string;
    let higherLetter: string;
    this.selectedRange = range; 

    if (!bType2) {
      lowerLetter = range[0].toLowerCase();
      higherLetter = range[1].toLowerCase();
    }

    let firstLetter: string;
    this.dropdownLanguages = this.languages.filter((lang) => {
      if (bType2) {
        return lang.type === 2;
      } else {
        firstLetter = lang.name.toLowerCase()[0];
        return firstLetter >= lowerLetter && firstLetter <= higherLetter;
      }

    });

    if (changeLang && this.dropdownLanguages.length > 0) {
      this.currentLanguage = this.dropdownLanguages[0]; 
      this.onLanguageChange.emit(this.currentLanguage); 
    }

  }//end method

  onLanguageClick(language: Language) {
    this.currentLanguage = language; 
    this.onLanguageChange.emit(language); 
  }


}
