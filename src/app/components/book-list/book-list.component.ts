import {Component, OnInit} from '@angular/core';
import {IBook} from "../../models/book.model";
import {BookGenre} from "../../enums/book-genre";

@Component({
  selector: 'bookstore-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];

  constructor() {
    this.books = [
      {
        id: 2,
        title: "The Bee Sting",
        author: "Paul Murray",
        publishDate: new Date(2024, 5, 2),
        pages: 656,
        genre: BookGenre.Fiction,
        synopsis: "One of the greatest living comic novelists follows up Skippy Dies and The Mark and the Void with a beautifully crafted bittersweet delight about one family desperately attempting to get through the most trying of times.",
        rating: 4.5,
        isbn: "9780374600303"
      },
      {
        id: 3,
        title: "Butter",
        author: "Asako Yuzuki",
        publishDate: new Date(2024, 2, 29),
        pages: 464,
        genre: BookGenre.Thriller,
        synopsis: "Teeming with searing insights into sexism, obsession and pleasure, this glorious Japanese cult classic revolves around a famed female chef convicted as the serial killer of lonely businessmen and a story-hungry young journalist who wishes to learn the secrets of gourmet from her.",
        rating: 4.5,
        isbn: "9780063236400"
      },
      {
        id: 4,
        title: "Fourth Wing - The Empyrean",
        author: "Rebecca Yarros",
        publishDate: new Date(2024, 3, 26),
        pages: 576,
        genre: BookGenre.Fantasy,
        synopsis: "A thrilling fantasy epic that has taken BookTok by storm, Fourth Wing centres on the bookish Violet's attempts to become a dragon rider amidst the intrigue and deadly danger of the kingdom of Navarre.",
        rating: 4.5,
        isbn: "9781649374042"
      }
    ];
  }

  ngOnInit() {

  }

  protected readonly BookGenre = BookGenre;
}
