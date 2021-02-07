import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlMatcher } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ImpactComponent } from './impact/impact.component';
import { ImpactStoriesComponent } from './impact-stories/impact-stories.component';
import { ImpactChampionsComponent } from './impact-champions/impact-champions.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { TipsComponent } from './tips/tips.component';
import { PsaComponent } from './psa/psa.component';
import { DigitalparentingComponent } from './digitalparenting/digitalparenting.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { AudiovisualsComponent } from './audiovisuals/audiovisuals.component';
import { CaseworkersComponent } from './caseworkers/caseworkers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { FaithleadersComponent } from './faithleaders/faithleaders.component';
import { NewsMainComponent } from './news-main/news-main.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "news", component: NewsComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "impact", component: ImpactComponent },
  { path: "contactus", component: ContactusComponent  },
  { path: "tips", component: TipsComponent },
  { path: "tips/:langCode", component: TipsComponent },
  { path: "tips/:langCode/index.html", component: TipsComponent },
  { path: "caseworkers", component: CaseworkersComponent },
  { path: "psa", component: PsaComponent },
  { path: "digitalparenting", component: DigitalparentingComponent },
  { path: "socialmedia", component: SocialmediaComponent },
  { path: "newsletters", component: NewslettersComponent },
  { path: "webinars", component: WebinarsComponent },
  { path: "audiovisuals", component: AudiovisualsComponent },
  { path: "contributors", component: ContributorsComponent },
  { path: "faithleaders", component: FaithleadersComponent },
  { path: "news-main", component: NewsMainComponent },
  { path: "impactstories", component: ImpactStoriesComponent },
  { path: "impactchampions", component: ImpactChampionsComponent },
  { path: "impactmap", component: MapComponent },

  {
    path: "blog",
    component: BlogComponent,
    pathMatch: "full"
  },
  {
    path: "blog/:slug",
    component: BlogPostComponent,
    pathMatch: "full"
  },
  {

    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, anchorScrolling: "disabled", relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
