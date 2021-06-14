import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent implements OnInit {

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
