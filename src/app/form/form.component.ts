import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {CallApiService} from '../core/services/call-api.service';

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
  displayedColumns: string[] = ['srNo', 'groupName', 'accountHolderName', 'bankName', 'accountNo', 'branchName'];
  dataSource = new Array();
  isEdit:boolean = false;
  check = new Array();
  filterForm!:FormGroup;
  bankForm!:FormGroup;
  totalPages: any;
  pageNo = 1;
  pageSize = 10;
  pageNumber!: number;
  unitArray = new Array();
  bankArray = new Array();
  value:any;
  organizationArray = new Array();
  AccountTypeArr: any[] = [
    { id: 0, accountName: 'Bank Account' },
    { id: 1, accountName: 'Cash Account' }
  ]

constructor(private fb:FormBuilder,private translate: TranslateService,public callApi:CallApiService){
  translate.setDefaultLang('en');
  translate.use('mr'); 
}



ngOnInit() {
  this.filterForm = this.fb.group({
    organizationId :[''],
    unitId :[''],
    bankId :[''],
    branchId :[''],

  })
  this.getOrg();
  this.getUnit();
  this.getBank();
  this.getData();
  this.controlForm();
 

}


  controlForm(){
    this.bankForm = this.fb.group({
      id: [],
      OrganizationId :['',[Validators.required]],
      UserId :['',[Validators.required]],
      underGroupId :[0,[Validators.required]],
      BankId :['',[Validators.required]],
      BranchName :['',[Validators.required]],
      ifscCode :['',[Validators.required]],
      accountNo :['',[Validators.required]],
      accountHolderName :['',[Validators.required]]
    })
  }

  // defaulltForm(){
  
  // }


  getData() {
    let formData = this.filterForm.value;
    let obj = `BankId=${formData.bankId}&BranchName=${formData.branchId}&OrganizationId=${formData.organizationId}&UnitId=${formData.unitId}&pageNo=${this.pageNo}&pageSize=${this.pageSize}`;
    this.callApi.setHttp('GET','BankAccountRegister/GetAll?' + obj , false, false, false, 'baseURL');
    this.callApi.getHttp().subscribe({
        next: (res: any) => {
            if (res?.statusCode == "200") {
                this.dataSource = res.responseData;
                this.totalPages = res.responseData1?.totalCount;
            } else {
                console.error('Error fetching data:', res.message);
            }
        },
        error: (err:any) => {
            console.error('API call failed:', err);
        }
    });
}

    // let formData = this.bankForm.value;
  //   this.callApi.setHttp("get","BankMaster/GetAll",false,false,false,"baseURL");
  //   this.callApi.getHttp().subscribe({
  //     next: (res:any) =>{
  //       if(res.statusCode == "200"){
  //       this.dataSource = res.responseData;
  //       this.totalPages = res.responseData1?.totalCount
  //       }
  //     }
  //   })
  // }

  //     next: (res: any) => {
  //       if (res.statusCode == 200) {
  //         // this.electionArray = res.data1;
  //         this.dataSource = res.responseData;
  //         // console.log(this.electionArray);
                          

  //       console.log(this.totalPages);
  //       }
  //       else {
  //         this.dataSource = [];
  //       }
  //     },
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
  getUnit(){
    this.callApi.setHttp('get','MasterDropdown/GetAllUnit?OrganizationId=1&UserId=1',false,false,false,'baseURL');
    this.callApi.getHttp().subscribe({
      next: (res:any) =>{
        if (res.statusCode == "200"){
          this.unitArray = res.responseData
        }
      }
    })
  }

  getBank(){
    this.callApi.setHttp('get','MasterDropdown/GetAllBank?OrganizationId=1&UserId=1',false,false,false,'baseURL');
    this.callApi.getHttp().subscribe({
      next:(res:any) =>{
        if(res.statusCode == '200'){
          this.bankArray = res.responseData
        }
      }
    })
  }
  
}
