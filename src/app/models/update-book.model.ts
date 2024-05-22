import {BookGenre} from "../enums/book-genre";

export interface IUpdateBook {
  title: string;
  author: string;
  publishDate: Date;
  pages: number;
  genre: BookGenre;
  synopsis: string;
  rating: number;
  isbn: string;
}
