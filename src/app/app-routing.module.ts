import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { BankNameComponent } from "./bank-name/bank-name.component";
import { UserComponent } from "./user/user.component";

const routes:Routes =[
    {path:'',redirectTo:'user',pathMatch:'full'},
    {path:'form',component:FormComponent},
    {path:'bank-name',component:BankNameComponent},
    {path:'user', component:UserComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouitngModule{}