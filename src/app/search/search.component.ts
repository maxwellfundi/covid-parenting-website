import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable, Subject, combineLatest } from 'rxjs'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchterm: string;

  startAt = new Subject();
  endAt = new Subject();

  webpages;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  lastKeypress: number = 0;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    combineLatest([this.startobs, this.endobs]).subscribe((value)=>{
       this.firequery(value[0], value[1]).subscribe((webpages)=>{
        this.webpages = webpages;
       })
    })
  }

  search($event){
    if($event.timeStamp - this.lastKeypress > 200){
      let q = $event.target.value;
      this.startAt.next(q);
      this.endAt.next(q + '\uf8ff')
    }

    this.lastKeypress = $event.timeStamp

  }

  firequery(start, end){
    return this.afs.collection('pages', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
  }
}
