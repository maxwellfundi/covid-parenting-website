export class AnimateHelper{

  static setAndAnimateNumberCounts(htmlTag: any, innerHtmlValue: number){
    for (let i: number = 0; i < htmlTag.length; i++) {
        htmlTag[i].innerHTML = innerHtmlValue;   
    }
    this.animateTags(htmlTag);
  }

  static animateTags(htmlTag: any): void{
    let strNum: string;
    for (let i: number = 0; i < htmlTag.length; i++) {
      strNum = htmlTag[i].innerHTML; 
      this.animateValue(htmlTag[i], 0, parseFloat(strNum.replace(/,/g, '')), 5000);
    }
  }

  static animateValue(obj, start: number, end: number, duration: number): void {
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
}