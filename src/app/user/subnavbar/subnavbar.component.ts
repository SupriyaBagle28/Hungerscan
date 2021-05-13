import { Component, Input, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';


@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {

  @Input()
  categoryData;
  menudata;
  showdescription = false;
 x=0;
  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
    console.log(this.categoryData);
    this.menudata = this.categoryData.dishes;

  }

  toggleDescription() {
    this.showdescription= !this.showdescription;

}



increment(){
  
}

decrement(){

}

}
