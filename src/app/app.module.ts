import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BankNameComponent } from "./bank-name/bank-name.component";
import { AddBankComponent } from './bank-name/add-bank/add-bank.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AddBankComponent,
    
  ],
  imports: [
    BrowserModule,
    FormComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatRadioModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    BankNameComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
