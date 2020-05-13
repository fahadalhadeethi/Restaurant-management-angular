import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyManagementComponent } from './money-management/money-management.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { TablesComponent } from './tables/tables.component';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
  {path : "moneymanagment" , component:MoneyManagementComponent},
  {path : "Orders" , component:OrdersComponent},
  {path : "NewOrder" , component:NewOrderComponent},
  {path : "NewCategory" , component:NewCategoryComponent},
  {path : "Tables" , component:TablesComponent},
  {path : "Notes" , component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
