import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';


import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './admin/main/main.component';
import { NavComponent } from './admin/nav/nav.component';
import { BillingComponent } from './admin/main/billing/billing.component';
import { MenuDetailsComponent } from './admin/main/menu-details/menu-details.component';
import { RestaurantdetailComponent } from './admin/main/restaurantdetail/restaurantdetail.component';
import { UserComponent } from './user/user.component';
import { TableentryComponent } from './user/tableentry/tableentry.component';
import { MenuComponent } from './user/menu/menu.component';
import { MainnavbarComponent } from './user/mainnavbar/mainnavbar.component';
import { SubnavbarComponent } from './user/subnavbar/subnavbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CategorytabsComponent } from './user/categorytabs/categorytabs.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent,
    NavComponent,
    BillingComponent,
    MenuDetailsComponent,
    RestaurantdetailComponent,
    UserComponent,
    TableentryComponent,
    MenuComponent,
    MainnavbarComponent,
    SubnavbarComponent,
    CategorytabsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
