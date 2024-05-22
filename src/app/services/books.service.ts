import { Injectable } from '@angular/core';
import {IBook} from "../models/book.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUpdateBook} from "../models/update-book.model";
import {ICreateBook} from "../models/create-book.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('/api/books');
  }

  public getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>('api/books/' + id);
  }

  public addBook(createdBook: ICreateBook): Observable<IBook> {
    return this.http.post<IBook>('api/books', createdBook);
  }

  public updateBook(id: number, updatedBook: IUpdateBook): Observable<IBook> {
    return this.http.put<IBook>('api/books/' + id, updatedBook);
  }

  public deleteBook(id: number): Observable<any> {
    return this.http.delete('api/books/' + id);
  }
}
