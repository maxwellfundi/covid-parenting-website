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
        this.tipSheetService.getLanguageByCode(paramMap["langCode"])
          .subscribe((lang) => {
            if (lang) {
              this.tipSheetLang = lang;
            } else {
              this.tipSheetLang = {
                type: 1,
                code: "en",
                name: "English"
              };
            }
          });
      }
    });
    this.redirectUsingQueryParam();
  }

  onLanguageChange(lang: Language) {
    this.router.navigateByUrl("/tips/" + lang.code, { state: { noScroll: true } });
  }

  private redirectUsingQueryParam() {
    this.route.queryParams.subscribe((paramMap) => {
      if (paramMap["langCode"]) {
        this.tipSheetService.getLanguageByCode(paramMap["langCode"])
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
