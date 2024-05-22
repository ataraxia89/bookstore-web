import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from "./components/home/home.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {FormsModule} from "@angular/forms";
import {AddBookComponent} from "./components/add-book/add-book.component";

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookListComponent,
    EditBookComponent,
    HomeComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
