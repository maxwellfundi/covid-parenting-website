import { Injectable } from '@angular/core';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { Language, LanguageCSVRow, TipSheet } from './tip-sheets.model';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipSheetService {

  private languagesByCode: { [langTypeCode: string]: Language };
  private sortedLanguages: Language[];
  private tipSheetsByLanguage: { [langTypeCode: string]: TipSheet[] };

  constructor(private spreadsheetService: SpreadsheetService) {
    this.fetchTipSheets();
  }

  private fetchTipSheets(): Observable<{ [langCode: string]: TipSheet[] }> {
    return this.spreadsheetService.getCSVObjects("assets/tip_sheets/tipSheetNames.csv")
      .pipe(shareReplay(1), map((rows: LanguageCSVRow[]) => {
        this.languagesByCode = {};
        this.tipSheetsByLanguage = {};
        rows.forEach((row) => {
          let langTypeCode = row.languageCode ? (row.languageType + row.languageCode.toLowerCase().trim()) : null;
          if (langTypeCode !== null) {
            if (!this.tipSheetsByLanguage[langTypeCode]) {
              this.tipSheetsByLanguage[langTypeCode] = [];
              let lang: Language = {
                type: row.languageType,
                code: row.languageCode,
                name: row.languageName
              };
              this.languagesByCode[langTypeCode] = lang;
            }

            this.tipSheetsByLanguage[langTypeCode].push({
              title: row.title,
              thumnailSrc: `assets/images/tip_sheet_thumbnails/${row.tipSheetNumber}.webp`,
              pdfSrc: `${environment.pdfBaseUrl}${row.languageCode}/${row.tipSheetNumber}.pdf`
            });

          }
        });


        //set sorted languages
        this.sortedLanguages = Object.keys(this.languagesByCode)
          .map((code) => this.languagesByCode[code])
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        return this.tipSheetsByLanguage;
      })

      );
  }

  public getLanguages(): Observable<Language[]> {
    if (this.sortedLanguages) {
      return of(this.sortedLanguages);
    }
    return this.fetchTipSheets()
      .pipe(
        map(() => {
          return this.sortedLanguages;
        })
      );
  }

  public searchForLanguageByName(langName: string): Observable<Language> {

    if (this.languagesByCode) {
      return of(Object.keys(this.languagesByCode)
        .map((code) => this.languagesByCode[code])
        .find((lang) => lang.name.toLowerCase().indexOf(langName.toLowerCase()) > -1));
    }
    return this.fetchTipSheets()
      .pipe(
        map(() => {
          return Object.keys(this.languagesByCode)
            .map((code) => this.languagesByCode[code])
            .find((lang) => lang.name.toLowerCase().indexOf(langName.toLowerCase()) > -1);
        })
      );
  }

  public getLanguageByTypeAndCode(langTypeCode: string): Observable<Language> {

    if (this.languagesByCode && this.languagesByCode[langTypeCode]) {
      return of(this.languagesByCode[langTypeCode]);
    } else {
      return this.fetchTipSheets()
        .pipe(
          map(() => {
            return this.languagesByCode[langTypeCode];
          })
        );
    }

  }

  public getTipSheetsByTypeAndCode(langTypeCode: string): Observable<TipSheet[]> {
    if (this.tipSheetsByLanguage && this.tipSheetsByLanguage[langTypeCode]) {
      return of(this.tipSheetsByLanguage[langTypeCode]);
    }
    return this.fetchTipSheets()
      .pipe(
        map(() => {
          return this.tipSheetsByLanguage[langTypeCode];
        })
      );
  }

}
