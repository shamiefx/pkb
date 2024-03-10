import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listOfBooks: any[] = [];

  detailOfCusttomer: any;

  constructor(
    private bookService: BooksService,
    private router: Router
  ) {
    this.getBooks()
    this.getCustomer();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(r => {
      console.log(r);
      this.listOfBooks = r.items;  // Extract the 'items' array from the response
    });

  }

  getPkb(){
    const testData = this.bookService.getPkbAPI().subscribe(re => {
      console.log(re);
      this.detailOfCusttomer = re
    });    
  }

  goToRegister(){
    this.router.navigateByUrl('register');
  }

  getCustomer(){
    
    const testData = this.bookService.getCustomerByIc(601203035108).subscribe(re => {
      console.log(re);
      this.detailOfCusttomer = re
    });
  }
}
