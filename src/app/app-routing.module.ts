import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {AddBookComponent} from "./components/add-book/add-book.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home - BookStore'},
  { path: 'books', component: BookListComponent, title: 'Book List - BookStore', pathMatch: 'full'},
  { path: 'books/:id/edit', component: EditBookComponent, title: 'Edit Book - BookStore'},
  { path: 'books/add', component: AddBookComponent, title: 'Add New Book'},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
