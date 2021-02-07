import { Injectable } from '@angular/core';
import { SpreadsheetService } from './shared/services/spreadsheet.service';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

export type Resource = {
  resourceType: string;
  resourceTitle: string;
  resourceFilePrefix: string;
  resourceLanguageCode: string;
};

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private arrResources: Resource[] = [];

  constructor(private spreadsheetService: SpreadsheetService) {

    //get all the resources and fill to the array
    this.fetchAllResources().subscribe((resources) => {
      this.arrResources = resources;
      //console.log("RESOURCES LOADED: " + resources.length);
    });

  }

  private fetchAllResources(): Observable<Resource[]> {
    return this.spreadsheetService.getCSVObjects("assets/resources/resources_list.csv")
      .pipe(
        shareReplay(1),
        map((rows: Resource[]) => {
          return rows;
        }));
  }//end method

  public fetchResourcesByType(resourceType: string): Observable<Resource[]> {
    let arr: Resource[] = [];
    this.arrResources.forEach((row) => {
      try {
        if (row.resourceType === resourceType) {
          arr.push(row);
        }
      } catch (ex) {
        console.log("Error in fetching resource: "+ resourceType+"| Error:" + (ex as Error).message);
      }

    });

    return of(arr);
  }//end method

  public fetchResourcesByLanguage(langCode: string): Observable<Resource[]> {
    let arr: Resource[] = [];
    this.arrResources.forEach((row) => {
      try {
        if (row.resourceLanguageCode.toLowerCase() === langCode) {
          arr.push(row);
        }
      } catch (ex) {
        //console.log("Error in fetching resources by language: " +(ex as Error).message);
      }

    });

    return of(arr);
  }//end method



}//end class
