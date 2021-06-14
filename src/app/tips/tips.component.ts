import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { Observable } from 'rxjs';
import { Language } from '../tip-sheets/tip-sheets.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TipSheetService } from '../tip-sheets/tip-sheet.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent {

  tipSheetLang: Language = {
    type: 1,
    code: "en",
    name: "English"
  };
  languages: Language[] = [];

  constructor(private route: ActivatedRoute, private tipSheetService: TipSheetService, private router: Router) {
   
    this.tipSheetService.getLanguages().subscribe((languages) => {
      this.languages = languages;
    });

    this.route.params.subscribe((paramMap) => {
      if (paramMap["langCode"]) { 
        this.tipSheetService.getLanguageByTypeAndCode(paramMap["langCode"])
          .subscribe((lang) => {
            if (lang) {
              this.tipSheetLang = lang;
            }
          });
      }
    });
    //this.redirectUsingQueryParam();
  }

  onLanguageChange(lang: Language) {
    this.tipSheetLang = lang;
    //commented out because it is not necessary
    //this.router.navigateByUrl("/tips/"  + lang.type + lang.code, { state: { noScroll: true } });
  }

  //No longer used. left here for future refernce. not used because for now query parameters are not used
  private redirectUsingQueryParam() {
    this.route.queryParams.subscribe((paramMap) => {
      if (paramMap["langCode"]) {
        this.tipSheetService.getLanguageByTypeAndCode(paramMap["langCode"])
          .subscribe((lang) => {
            if (lang) {
              this.router.navigateByUrl("/tips/" + lang.code);
            }
          });
      } else if (paramMap["langName"]) {
        this.tipSheetService.searchForLanguageByName(paramMap["langName"])
          .subscribe((lang) => {
            if (lang) {
              this.router.navigateByUrl("/tips/" + lang.code);
            }
          });
      }
    });
  }

}
