import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PostComponent } from './post/post.component';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    PostComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCarouselModule,
    ScrollingModule,
    ScrollDispatchModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    LoadingBarRouterModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
