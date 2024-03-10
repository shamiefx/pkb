import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formSaya!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookSrv: BooksService,
    private loadingCtl: LoadingController
  ) { }

  get name() {
    return this.formSaya.get('name');
  }

  get address() {
    return this.formSaya.get('address');
  }
  
  ngOnInit() {
    this.formSaya = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(12)]],
      address: ['', [Validators.required, Validators.email]]
    });
  }

  async save(){
    const loading = await this.loadingCtl.create(
      {
        message: 'Trying to save data...',
        duration: 3000,
        spinner: 'circles',
      }
    );

    try{
      loading.present();
         this.bookSrv.addBook(this.formSaya.value);
    } catch(error){ 
console.log(error);

    } finally{
      this.loadingCtl.dismiss()
    }
    
  }
}
