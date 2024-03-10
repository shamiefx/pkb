import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface GoogleBooksResponse {
  items: Array<{
    volumeInfo: {
      title: string;
      authors?: string[];
    };
    saleInfo: {
      country: string;
    };
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<GoogleBooksResponse> {
    const apiBooks = 'https://www.googleapis.com/books/v1/volumes?q=javascript';
    return this.http.get<GoogleBooksResponse>(apiBooks);
  }

  getPkbAPI(){
    const dataG = 'http://192.168.50.141:8000/api/customers/601203035208';
    return this.http.get<GoogleBooksResponse>(dataG);
  }


  addBook(books: any){
    console.log('Books: ',books);
    return this.http.put('http://192.168.50.141:8000/api/customers/601203035208', books);
  }

  getCustomerByIc(icNo: number){
    // console.log('Books: ',books);
    return this.http.get(`http://192.168.50.141:8000/api/customers/${icNo}`);
  }

}
