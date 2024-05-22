import {Component, OnInit} from '@angular/core';
import {IBook} from "../../models/book.model";
import {BookGenre} from "../../enums/book-genre";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'bookstore-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  bookGenre = BookGenre;
  isLoading: boolean;

  constructor(private booksService: BooksService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
      this.isLoading = false;
    });
  }

  deleteBook(book: IBook) {
    if (confirm('Are you sure you want to delete ' + book.title + '?')) {
      this.isLoading = true;

      this.booksService.deleteBook(book.id).subscribe(() => {
        this.books = this.books.filter(b => b.id !== book.id);
        this.isLoading = false;
      });
    }
  }
}
