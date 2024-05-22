import { Component } from '@angular/core';
import {IBook} from "../../models/book.model";
import {BookGenre} from "../../enums/book-genre";
import {BooksService} from "../../services/books.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bookstore-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  isSubmitting: boolean = false;
  genreIds: number[] = [];
  bookGenres: typeof BookGenre = BookGenre;
  selectedGenre: number = 0;
  submissionError: boolean = false;

  book: IBook = {
    id: 0,
    title: '',
    author: '',
    publishDate: new Date(),
    pages: 0,
    genre: BookGenre.Other,
    synopsis: '',
    rating: 0,
    isbn: ''
  };

  constructor(
    private booksService: BooksService,
    private router: Router) {
    this.genreIds = Object.values(BookGenre)
      .filter(value => !isNaN(Number(value)))
      .map(Number);
  }

  addBook() {
    this.isSubmitting = true;

    this.booksService.addBook({
      title: this.book.title,
      author: this.book.author,
      publishDate: this.book.publishDate,
      pages: this.book.pages,
      genre: this.selectedGenre,
      synopsis: this.book.synopsis,
      rating: this.book.rating,
      isbn: this.book.isbn
    })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['/books']);
        },
        error: () => {
          this.submissionError = true;
          this.isSubmitting = false;
        }
      })
  }
}
