import { Component, ElementRef, OnInit } from '@angular/core';
import { ImpactService, ImpactSummary } from './impact.service';
import { AnimateHelper} from '../../app/utils/animateHelper'

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent extends AnimateHelper implements OnInit{

  public strCurrentDate: string = "";
  public arrRegionSummaries: ImpactSummary[] = [];
  public arrDisseminationSummaries: ImpactSummary[] = [];
  public totalRegionSummary: number = 0;
  public totalDisseminationSummary: number = 0;

  constructor(private elem: ElementRef, private impactStoriesService: ImpactService) {
    super();
    this.strCurrentDate = new Date().toLocaleDateString();

    impactStoriesService.fetchImpactSummaries().subscribe((impactsummaries) => {
      impactsummaries.forEach((impactsummary) => {
        if (impactsummary.impactType.toUpperCase() === "REGION") {
          this.arrRegionSummaries.push(impactsummary)
          this.totalRegionSummary = this.totalRegionSummary + impactsummary.impactNumber;
        } else {
          this.arrDisseminationSummaries.push(impactsummary)
          this.totalDisseminationSummary = this.totalDisseminationSummary + impactsummary.impactNumber;
        }
      });


      ImpactComponent.setAndAnimateNumberCounts(this.elem.nativeElement.querySelectorAll('.total-dissemination'), this.totalDisseminationSummary);
      ImpactComponent.setAndAnimateNumberCounts(this.elem.nativeElement.querySelectorAll('.total-region'), this.totalRegionSummary);

    });


  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
  }//end method

 /*

  private setAndAnimateNumberCounts(htmlTag: any, innerHtmlValue: number){
    for (let i: number = 0; i < htmlTag.length; i++) {
        htmlTag[i].innerHTML = innerHtmlValue;   
    }
    this.animateTags(htmlTag);
  }

  private animateTags(htmlTag: any): void{
    let strNum: string;
    for (let i: number = 0; i < htmlTag.length; i++) {
      strNum = htmlTag[i].innerHTML; 
      this.animateValue(htmlTag[i], 0, parseFloat(strNum.replace(/,/g, '')), 5000);
    }
  }

  private animateValue(obj, start: number, end: number, duration: number): void {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }//end method
*/

}
