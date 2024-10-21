import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';

export interface PeriodicElement {
  SrNo: any;
  AccountType: any;
  AccountHolder: any;
  Bank: any;
  Account: any;
  Branch: any;
  Action: any;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SrNo: '1', AccountType: 'Saving Account', AccountHolder: 'Rakesh', Bank: 'HDFC', Account: '1001001234', Branch: 'Maharashtra', Action: ''},
  {SrNo: '2', AccountType: 'Current Account', AccountHolder: 'Nalini', Bank: 'SBI Bank', Account: '2002001567', Branch: 'Maharashtra', Action: ''},
  {SrNo: '3', AccountType: 'Salary Account', AccountHolder: 'Aarav', Bank: 'CBI Bank', Account: '2112001298', Branch: 'Maharashtra', Action: ''},
  {SrNo: '4', AccountType: 'Asstes Account', AccountHolder: 'Ritesh', Bank: 'Bank of Baroda', Account: '6566006544', Branch: 'Baroda', Action: ''},
  {SrNo: '5', AccountType: 'Expenses Account', AccountHolder: 'Vivian', Bank: 'Bank Of India', Account: '3223004321', Branch: 'Maharashtra', Action: ''},
  {SrNo: '6', AccountType: 'Income Account', AccountHolder: 'Chahat', Bank: 'Canara Bank', Account: '3456005434', Branch: 'Maharashtra', Action: ''},
  {SrNo: '7', AccountType: 'Liabilities Account', AccountHolder: 'Ligon', Bank: 'Indian Bank', Account: '2312002345', Branch: 'Maharashtra', Action: ''},
  {SrNo: '8', AccountType: 'Equity Account', AccountHolder: 'Dezzi', Bank: 'Bank of Maharashtra', Account: '9089007008', Branch: 'Maharashtra', Action: ''},
  {SrNo: '9', AccountType: 'Cash Account', AccountHolder: 'Beak Yonu', Bank: 'Indian Overseas Bank', Account: '65450015544', Branch: 'Maharashtra', Action: ''},
  {SrNo: '10', AccountType: 'Personal Account', AccountHolder: 'Hey-In', Bank: 'Punjab National Bank', Account: '44330013434', Branch: 'Panjab', Action: ''}
];

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports:[MatSlideToggleModule,MatButtonModule,MatDividerModule,MatSortModule,MatSnackBarModule,MatSliderModule,MatSidenavModule,MatSelectModule,
    MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatRippleModule,MatRadioModule,MatProgressSpinnerModule,MatPaginatorModule,MatMenuModule,
    MatCardModule,MatCheckboxModule,MatChipsModule,MatNativeDateModule,MatProgressBarModule,MatListModule,MatInputModule,MatIconModule,MatGridListModule,
    MatDatepickerModule,MatDialogModule,MatExpansionModule,MatTreeModule,MatToolbarModule,MatTabsModule,MatTableModule,MatStepperModule,MatFormFieldModule
  ]
})
export class FormComponent {
  displayedColumns: string[] = ['SrNo', 'AccountType', 'AccountHolder', 'Bank', 'Account', 'Branch', 'Action'];
  dataSource = ELEMENT_DATA;
  isEdit:boolean = false
}
