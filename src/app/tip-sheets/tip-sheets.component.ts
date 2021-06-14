import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Language, TipSheet, LanguageCSVRow } from './tip-sheets.model';
import { TipSheetService } from './tip-sheet.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-tip-sheets',
  templateUrl: './tip-sheets.component.html',
  styleUrls: ['./tip-sheets.component.scss']
})
export class TipSheetsComponent implements OnInit, OnChanges {
  @Input()
  currentLanguage: Language;
  @Input()
  viewAllTipSheets: boolean = true;//was originally false. used to indicate if the component will show all tipsheets
  @Input()
  maxTipSheetsToShow: number = 5;//was originally 6 cause of flex wrap. used to show tipsheets in batches

  tipSheetsByLanguage: { [langCode: string]: TipSheet[] } = {};

  tipSheets: TipSheet[] = [];//holds all the tipsheets from the server
  visibleTipSheets: TipSheet[] = [];//holds the tipsheets being view
  showloadMoreButton: boolean = false;
  tipSheetsSubscription: Subscription;


  constructor(private tipSheetService: TipSheetService, private resourcesService: ResourcesService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentLanguage) {
      this.changeLanguage(changes.currentLanguage.currentValue);
    }
  }

  changeLanguage(language: Language) {
    this.currentLanguage = language;
    if (this.tipSheetsSubscription) {
      this.tipSheetsSubscription.unsubscribe();
    }
    this.tipSheetsSubscription = this.tipSheetService.getTipSheetsByTypeAndCode(language.type + language.code).subscribe((sheets) => {
      this.tipSheets = sheets;
      //console.log("Tip sheets set", sheets);
      this.visibleTipSheets = [];
      if (this.viewAllTipSheets) {
        this.visibleTipSheets = this.tipSheets;
      } else {
        this.onClickViewMoreTipSheets()
      }

      //fetch all resources  with selected language
      this.fetchAndOtherResources(language.code);
    });
  }

  //used by the view more button and when the tip sheets are to to be view in batches
  public onClickViewMoreTipSheets() {
    let startIndex: number;

    if (this.visibleTipSheets.length == 0) {
      startIndex = 0;
    } else {
      if (this.visibleTipSheets.length < this.tipSheets.length) {
        startIndex = this.visibleTipSheets.length;   //from last added  
      } else {
        return;
      }//end inner if

    }//end if

    this.addElementsToVisibleTipSheets(startIndex);
    this.showloadMoreButton = this.visibleTipSheets.length < this.tipSheets.length;
  }//end method

  private addElementsToVisibleTipSheets(startIndex: number) {
    let index: number;
    let counter: number = 0;
    for (index = startIndex; index < this.tipSheets.length; index++) {
      if (counter == this.maxTipSheetsToShow) {
        break;
      }//end if 
      this.visibleTipSheets.push(this.tipSheets[index]);
      counter++;
    }//end for loop
  }//end method


  public objMergedTipsheet: TipSheet = null;
  public arrOtherResources: TipSheet[] = null;

  private fetchAndOtherResources(langCode: string) {

    this.objMergedTipsheet = null; //reset
    this.arrOtherResources = null; //reset array
    
    this.resourcesService.fetchResourcesByLanguage(langCode).subscribe((langResources) => {
      let strResourceType: string;
      let objResourceSheet: TipSheet;
      this.arrOtherResources = []; //initialise array

      langResources.forEach((row) => {
        strResourceType = row.resourceType.toLowerCase();
        objResourceSheet = {
          title: row.resourceTitle,
          thumnailSrc: "",
          pdfSrc: ""
        };

        if (strResourceType === "mergedtipsheet") {
          objResourceSheet.pdfSrc = `assets/tip_sheets/${row.resourceLanguageCode}/${row.resourceFilePrefix}.pdf`;
          this.objMergedTipsheet = objResourceSheet;
          return;
        } else if (strResourceType === "caseworkers") {
          objResourceSheet.pdfSrc = `assets/resources/caseworkers/${row.resourceFilePrefix}.pdf`;
        } else if (strResourceType === "psa" || strResourceType === "psahowto") {
          objResourceSheet.pdfSrc = `assets/resources/psas/${row.resourceFilePrefix}.pdf`;
        } else if (strResourceType === "faithbased") {
          objResourceSheet.pdfSrc = `assets/resources/faithbased/${row.resourceFilePrefix}.pdf`;
        }
        else if (strResourceType === "socialmedia") {
          objResourceSheet.pdfSrc = `assets/resources/socialmedia/${row.resourceFilePrefix}.docx`;
        }
        
        else{
          return;
        }

        this.arrOtherResources.push(objResourceSheet);
     
      });//end for loop

      //if other resources not there. set to null
      if(this.arrOtherResources.length == 0){
        this.arrOtherResources = null;
      } 



    });

  }//end method


  public openTipSheetPDF(tipSheet: TipSheet) {
    window.open(tipSheet.pdfSrc, "__blank");
  }



}//end class

