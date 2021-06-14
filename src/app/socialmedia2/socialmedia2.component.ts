import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-socialmedia2',
  templateUrl: './socialmedia2.component.html',
  styleUrls: ['./socialmedia2.component.scss']
})
export class Socialmedia2Component implements OnInit {

  public imgOpen: boolean;
  public imgOpenedSrc: SafeResourceUrl;
  public imgOpenedAltText: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public openImage(event: Event) {
    let img = (event.target as HTMLImageElement)
    this.imgOpen = true;
    this.imgOpenedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(img.src) ;
    this.imgOpenedAltText = img.alt
  }

  public closeImage() {
    this.imgOpen = false;
  }

}
