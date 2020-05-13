import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatachangeService } from './datachange.service';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneyManagementComponent } from './money-management/money-management.component';
import { InputViewComponent } from './input-view/input-view.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { TablesComponent } from './tables/tables.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyManagementComponent,
    InputViewComponent,
    OrdersComponent,
    OrderDetailsComponent,
    NewOrderComponent,
    NewCategoryComponent,
    TablesComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatachangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
