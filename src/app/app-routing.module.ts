import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillingComponent } from './admin/main/billing/billing.component';
import { MenuDetailsComponent } from './admin/main/menu-details/menu-details.component';
import { RestaurantdetailComponent } from './admin/main/restaurantdetail/restaurantdetail.component';
import { UserComponent } from './user/user.component';
import { TableentryComponent } from './user/tableentry/tableentry.component';
import { MenuComponent } from './user/menu/menu.component';



const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children:[
      {path:'billing-dashboard', component:BillingComponent},
      {path:'menu-details', component:MenuDetailsComponent},
      {path:'profile', component:RestaurantdetailComponent},
    ]
   
  },
  {
    path: 'user', component: UserComponent,
    children:[
      {path:'tableentry', component:TableentryComponent},
      {path:'menu', component:MenuComponent},
     
    ]

  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
