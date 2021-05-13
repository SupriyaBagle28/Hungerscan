import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../../../service/menu-data.service';


@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

//   public Menudata=[];
//   public Startersdata;
//   public Dessertsdata;
//   openform=false;

//   categoryName:string="";
//   dishName:string="";
//   description:string="";
//   priceHalf:string="";
//   priceFull:string="";

//    constructor(private menuData : MenuDataService) { }
 

//  ngOnInit(): void {
//     this.menuData.getMenu().subscribe(
//       (data)=>{
//         this.displayData(data);
//         console.log(data);
//       }
//     )
// }
//   displayData(data){
//     // this.Menudata = data;
//     // console.log(data);
    
//     this.Startersdata = data.menu.Starters;
//     this.Dessertsdata = data.menu.Desserts;
//     // console.log(data.menu[0].Starters);
// }

// newCategory(){
//   this.openform = !this.openform;
// }

// saveForm(form){
//    console.log(form.value);
// }
  
// toggleMenu(){
  
// }


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


  






  
  
