import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore'
//import { first } from 'rxjs/operators'
import { pageList} from "src/app/search/index"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchterm: string;
  filterMetadata = {count: 0}
  public contentList;
  public contentListBackup: any[];


  // constructor(private afs: AngularFirestore) { }

  async ngOnInit(){

    this.contentList = await this.initializeItems();

  }

  async initializeItems(): Promise<any>{
    //Make query to firestore
    // const contentList = await this.afs.collection('pages').valueChanges().pipe(first()).toPromise();
   const contentList = pageList;
    this.contentListBackup = contentList;
    return contentList;
  }

  async filterList($event){
    this.contentList = this.contentListBackup;
    const searchTerm = $event.target.value;

    if(!searchTerm){
      return;
    }

    this.contentList = this.contentList.filter(currentContent => {
      if(currentContent.name && searchTerm){
        return (currentContent.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentContent.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    })
    
  }

}
