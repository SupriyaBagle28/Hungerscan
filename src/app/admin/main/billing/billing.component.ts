import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../../service/menu-data.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

 
  //this is the repeated code for menudata component not for billing one


  public Startersdata;
  public Dessertsdata;
  openform=false;
  opened = false;
  addcategory = false;

  id:number;
  categoryName:string="";
  dishName:string="";
  description:string="";
  priceHalf:string="";
  priceFull:string="";
  type: string="";
  menudata=[];

  constructor(private menuData : MenuDataService) { }

  ngOnInit(): void {
    this.menuData.getMenu().subscribe(
      (data)=>{
       this.menudata = data.menu
        console.log(this.menudata);
      }
    )
}
  // displayData(data){
    // this.Menudata = data;
    // console.log(data);
    
    // this.Startersdata = data.menu.Starters;
    // this.Dessertsdata = data.menu.Desserts;
    // console.log(data.menu[0].Starters);
// }

newItem(){
  this.openform = !this.openform;
}

saveForm(formdata){
  
  console.log(formdata.value);
}

cancelForm(){

}

edit(){
  
}

delete(id){
  console.log(id);
  
  this.menuData.deleteitem(id).subscribe(
    data=>{console.log(data)
  
  });
  
}

addCategory(){
  console.log("click");

 this.addcategory = !this.addcategory;
}



}
  
