import {Component, OnInit} from '@angular/core';
import {IBook} from "../../models/book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {BookGenre} from "../../enums/book-genre";

@Component({
  selector: 'bookstore-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit{
  isLoading: boolean;
  isSubmitting: boolean = false;
  currentId: number = -1;
  genreIds: number[] = [];
  bookGenres: typeof BookGenre = BookGenre;
  book: IBook = null!;
  selectedGenre: number = 0;
  submissionError: boolean = false;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) {
    this.isLoading = true;

    this.genreIds = Object.values(BookGenre)
      .filter(value => !isNaN(Number(value)))
      .map(Number);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];

      this.booksService.getBook(params['id']).subscribe(book => {
        this.book = book;
        this.selectedGenre = book.genre;
        this.isLoading = false;
      })
    })
  }

  updateBook() {
    this.isSubmitting = true;

    this.booksService.updateBook(this.currentId, {
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
