import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

 

  private initMap() {
    this.map = L.map('map',{
      zoomDelta:0.25,
      zoomSnap:0.25,
      minZoom: 2,
      maxZoom:4,
      dragging: true
    }).setView([0.0, 0], 2);

    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png',{
      maxZoom: 20,
      attribution:'Map data © OpenStreetMap contributors'
    });


    const myIcon = L.icon({
      iconUrl:'assets/icon/favicon.png',
      iconSize:[18, 18]
    })
    L.marker([-10.25, 33.30], {icon: myIcon}).addTo(this.map)
    .bindPopup('What this initiative has done to my family is so profound. I am able to appreciate the world of children, and I think I am learning good parenting. It has also challenged me to look at this crazy time I have found myself i through the positive lens of hope.<br> <b style = "color:#5dbcd2;">- Parent in Malawi from Without Orphans </b><br><br> We understand that it is very hard for parents to adjust to the new norm, as they will have their children at home more than they are used to due to schools being closed. [The COVID-19 parenting resources] not only bring relief as we parent, but also challenge parenting in general, for some of us have failed miserably to parent well. It will leave a lasting impact and is amazing we have learnt this through a church in our community. <br> <b style = "color:#5dbcd2;">- Parent from Malawi</b> <br><br> Thanks to parenting tips materials, family relationships are being enhanced.Most of our 23 local church partners have testified to how parents have been awakened to what should be natural and fun in families. Thriving social life relationships in most families have, unfortunately, been non-existent; and thanks to Covid19 as it has simply exposed this fact..<br> <b style = "color:#5dbcd2;">- World Without Orphans, Malawi </b><br><br> If I have found these (tips) helpful, for sure they should be for all parents and caregivers in our village. They are also applicable to people of all faiths, and I will highly recommend to the village head so we could advocate across our community. They are timely.<br> <b style = "color:#5dbcd2;">- Counsellor to village Headman Mphamba in Malawi </b><br><br> Regular radio broadcasts for 11 million')
    .openPopup();

    L.marker([40, 139.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('This isnt just something that helps with the corona disaster, its something that helps with the whole emergency situations. Let us be positive, Im sure that means praising yourself with the little things, not just your kids, but yourself as well.<br> - <b style = "color:#5dbcd2;">Comments on online article, Unicef Japan</b> ')
    .openPopup();

    L.marker([7.10, 37.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('The messages are important and guiding especially this time when adolescents are at home. <br> <b style = "color:#5dbcd2;">- Catholic Relief Services (CRS), Kenya </b><br><br> Safaricom ringtones of COVID-19 parenting song')
    .openPopup();

  
    L.marker([47, 10.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('The children of the world have an urgent need for safe havens right now, in both a spiritual and physical sense. Spiritual support - through this kind of creative engagement designed especially for children -can give a renewed sense of hope to families and churches alike.<br> <b style = "color:#5dbcd2;">- WCC Interim General Secretary Rev. Prof. Dr Ioan Sauca about the Church Leaders Pack </b>')
    .openPopup();

    L.marker([27, 76.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>India:</b> Food parcels and phone based support by community workers')
    .openPopup();

    L.marker([16, 120.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Phillipines:</b> National Government and UNICEF webinars for caseworkers and families')
    .openPopup();

    L.marker([32, 71.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Pakistan.png"/></br><b>Pakistan:</b> National television broadcasts')
    .openPopup();

    L.marker([40, 73.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Kyrgyzstan.png"/></br><b>Kyrgyzstan:</b> Cartoon videos on national television reaching over 2 million people')
    .openPopup();

    L.marker([20, 103.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Laos:</b> National Government and UNICEF speakers in 5,800 villages for 50% of population')
    .openPopup();

    L.marker([16, 103.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Thailand.png"/></br><b>Thailand:</b> Government distributed leaflets in Health Promotion hospitals throughout the country')
    .openPopup();

    L.marker([42, 10.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Montenegro:</b> Emergency phone lines, webinars, food parcels')
    .openPopup();

    L.marker([-31.5, 19.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>South Africa:</b> National radio broadcasts in 7 languages')
    .openPopup();

    L.marker([-25, -55.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Paraguay:</b> 1million reached online with the First Lady’s support')
    .openPopup();

    L.marker([15, -85.40], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Guatemala:</b> Ministries of Health and Education')
    .openPopup();
    tiles.addTo(this.map);

  }

}
