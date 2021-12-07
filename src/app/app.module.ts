import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomeComponent } from './component/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng-lts/button';
import {CalendarModule} from 'primeng-lts/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {KnobModule} from 'primeng-lts/knob';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng-lts/table';
import { ArticleViewComponent } from './component/article-view/article-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    KnobModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
