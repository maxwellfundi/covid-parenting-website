import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadsheetService } from './shared/services/spreadsheet.service';
import { CaseworkersComponent } from './caseworkers/caseworkers.component';
import { PsaComponent } from './psa/psa.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipSheetsComponent } from './tip-sheets/tip-sheets.component';
import { TipSheetService } from './tip-sheets/tip-sheet.service';
import {WebAnalyticsService} from './web-analytics.service';
import { ContactusComponent } from './contactus/contactus.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BannerComponent } from './banner/banner.component';
import { ParenttextComponent } from './parenttext/parenttext.component';
import { RadioComponent } from './radio/radio.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ParentchatComponent } from './parentchat/parentchat.component';
import { FaithleadersComponent } from './faithleaders/faithleaders.component';
import { NewsComponent } from './news/news.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { SongComponent } from './song/song.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { PartnersFundersComponent } from './partners-funders/partners-funders.component';
import { RegionwiseComponent } from './regionwise/regionwise.component';
import { DisseminationComponent } from './dissemination/dissemination.component';
import { WworeachComponent } from './wworeach/wworeach.component';
import { ImpactStoriesComponent } from './impact-stories/impact-stories.component';
import { ShareYourStoryComponent } from './share-your-story/share-your-story.component';
import { SuggestContentComponent } from './suggest-content/suggest-content.component';
import { NewletterribbonComponent } from './newletterribbon/newletterribbon.component';
import { ResourcesComponent } from './resources/resources.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DigitalparentingComponent } from './digitalparenting/digitalparenting.component';
import { AudiovisualsComponent } from './audiovisuals/audiovisuals.component';
import { NewsMainComponent } from './news-main/news-main.component';
import { ImpactComponent } from './impact/impact.component';
import { ImpactChampionsComponent } from './impact-champions/impact-champions.component';
import { TipsLangSelectComponent } from './tips-lang-select/tips-lang-select.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContributorsComponent,
    CaseworkersComponent,
    PsaComponent,
    HomeComponent,
    TipsComponent,
    TipSheetsComponent,
    ContactusComponent,
    SocialMediaIconsComponent,
    BlogComponent,
    BlogPostComponent,
    BannerComponent,
    ParenttextComponent,
    RadioComponent,
    SocialmediaComponent,
    ParentchatComponent,
    FaithleadersComponent,
    NewsComponent,
    NewslettersComponent,
    SongComponent,
    WebinarsComponent,
    OurworkComponent,
    PartnersFundersComponent,
    RegionwiseComponent,
    DisseminationComponent,
    WworeachComponent,
    ImpactStoriesComponent,
    ShareYourStoryComponent,
    SuggestContentComponent,
    NewletterribbonComponent,
    ResourcesComponent,
    SidebarComponent,
    AboutusComponent,
    DigitalparentingComponent,
    AudiovisualsComponent,
    NewsMainComponent,
    ImpactComponent,
    ImpactChampionsComponent,
    TipsLangSelectComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ScullyLibModule,
    LeafletModule
  ],
  providers: [
    SpreadsheetService,
    TipSheetService,
    WebAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
