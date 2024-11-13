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
import { UserComponent } from './user/user.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AddBankComponent,
    UserComponent,
    
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
    MatSlideToggleModule,MatButtonModule,MatDividerModule,MatSortModule,MatSnackBarModule,MatSliderModule,MatSidenavModule,MatSelectModule,
    MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatRippleModule,MatRadioModule,MatProgressSpinnerModule,MatPaginatorModule,MatMenuModule,
    MatCardModule,MatCheckboxModule,MatChipsModule,MatNativeDateModule,MatProgressBarModule,MatListModule,MatInputModule,MatIconModule,MatGridListModule,
    MatDatepickerModule,MatDialogModule,MatExpansionModule,MatTreeModule,MatToolbarModule,MatTabsModule,MatTableModule,MatStepperModule,MatFormFieldModule,ReactiveFormsModule,
    FormsModule,CommonModule,TranslateModule,
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
