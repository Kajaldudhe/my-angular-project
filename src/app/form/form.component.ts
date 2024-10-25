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
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CallApiService } from '../core/services/call-api.service';
// export interface PeriodicElement {
//   checkbox: any;
//   SrNo: any;
//   AccountType: any;
//   AccountHolder: any;
//   Bank: any;
//   Account: any;
//   Branch: any;
//   Action: any;
  
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {checkbox:'',SrNo: '1', AccountType: 'Saving Account', AccountHolder: 'Rakesh', Bank: 'HDFC', Account: '1001001234', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '2', AccountType: 'Current Account', AccountHolder: 'Nalini', Bank: 'SBI Bank', Account: '2002001567', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '3', AccountType: 'Salary Account', AccountHolder: 'Aarav', Bank: 'CBI Bank', Account: '2112001298', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '4', AccountType: 'Asstes Account', AccountHolder: 'Ritesh', Bank: 'Bank of Baroda', Account: '6566006544', Branch: 'Baroda', Action: ''},
//   {checkbox:'',SrNo: '5', AccountType: 'Expenses Account', AccountHolder: 'Vivian', Bank: 'Bank Of India', Account: '3223004321', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '6', AccountType: 'Income Account', AccountHolder: 'Chahat', Bank: 'Canara Bank', Account: '3456005434', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '7', AccountType: 'Liabilities Account', AccountHolder: 'Ligon', Bank: 'Indian Bank', Account: '2312002345', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '8', AccountType: 'Equity Account', AccountHolder: 'Dezzi', Bank: 'Bank of Maharashtra', Account: '9089007008', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '9', AccountType: 'Cash Account', AccountHolder: 'Beak Yonu', Bank: 'Indian Overseas Bank', Account: '65450015544', Branch: 'Maharashtra', Action: ''},
//   {checkbox:'',SrNo: '10', AccountType: 'Personal Account', AccountHolder: 'Hey-In', Bank: 'Punjab National Bank', Account: '44330013434', Branch: 'Panjab', Action: ''}
// ];

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports:[MatSlideToggleModule,MatButtonModule,MatDividerModule,MatSortModule,MatSnackBarModule,MatSliderModule,MatSidenavModule,MatSelectModule,
    MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatRippleModule,MatRadioModule,MatProgressSpinnerModule,MatPaginatorModule,MatMenuModule,
    MatCardModule,MatCheckboxModule,MatChipsModule,MatNativeDateModule,MatProgressBarModule,MatListModule,MatInputModule,MatIconModule,MatGridListModule,
    MatDatepickerModule,MatDialogModule,MatExpansionModule,MatTreeModule,MatToolbarModule,MatTabsModule,MatTableModule,MatStepperModule,MatFormFieldModule,ReactiveFormsModule,
    FormsModule,CommonModule,TranslateModule
  ]
})
export class FormComponent {
  displayedColumns: string[] = ['checkbox','SrNo', 'AccountType', 'AccountHolder', 'Bank', 'Account', 'Branch', 'Action'];
  dataSource : any;
  isEdit:boolean = false;
  check = new Array();
  filterForm!:FormGroup;
  bankForm!:FormGroup;
  totalPages: any;
  pageNo = 1;
  pageSize = 10;
  organizationArray = new Array()
  AccountTypeArr: any[] = [
    { id: 30, accountName: 'Bank Account' },
    { id: 25, accountName: 'Cash Account' }
  ]

constructor(private fb:FormBuilder,private translate: TranslateService,public callApi:CallApiService){
  translate.setDefaultLang('en');
  translate.use('mr'); 
}

ngOnInit() {
  // this.getData();
  // this.controlForm();
  this.getOrg();

}


  controlForm(){
    this.bankForm = this.fb.group({
      id: [],
      OrganizationId :['',[Validators.required]],
      UserId :['',[Validators.required]],
      underGroupId :[30],
      BankId :['',[Validators.required]],
      BranchName :['',[Validators.required]],
      ifscCode :['',[Validators.required]],
      accountNo :['',[Validators.required]],
      accountHolderName :['',[Validators.required]]
    })
  }


  // getData(){
  //   let formData = this.bankForm.value
  //   this.callApi.setHttp('get','BankAccountRegister/GetAll?BankId='+formData.bankId+'&BranchName='+formData.branchId +'&OrganizationId='+formData.organizationId+'&UnitId='+formData.unitId+'&pageNo='+this.pageNo+'&pageSize='+this.totalPages,false,false,false,'baseURL');
  //   this.callApi.getHttp().subscribe({
  //     next: (res:any) =>{
  //       if(res.statusCode === '200'){
  //       this.dataSource . res.responseData;
  //       this.totalPages = res.responseData1?.totalCount
  //       }
  //     }
  //   })
  // }

  getOrg(){
    this.callApi.setHttp('get','MasterDropdown/GetAllOrganization?UserId=1',false,false,false,'baseURL');
    this.callApi.getHttp().subscribe({
      next: (res:any) =>{
        if (res.statusCode == "200"){
          this.organizationArray = res.responseData
        }
      }
    })
  }
  // getUnit(){
  //   this.callApi.setHttp('get','MasterDropdown/GetAllOrganization?UserId=1',false,false,false,'baseURL');
  //   this.callApi.getHttp().subscribe({
  //     next: (res:any) =>{
  //       if (res.statusCode == "200"){
  //         this.organizationArray = res.responseData
  //       }
  //     }
  //   })
  // }
}
