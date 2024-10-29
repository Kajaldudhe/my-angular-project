import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { BankNameComponent } from "./bank-name/bank-name.component";

const routes:Routes =[
    {path:'',redirectTo:'form',pathMatch:'full'},
    {path:'form',component:FormComponent},
    {path:'bank-name',component:BankNameComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouitngModule{}