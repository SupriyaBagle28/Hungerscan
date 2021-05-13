import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';


@Component({
  selector: 'app-categorytabs',
  templateUrl: './categorytabs.component.html',
  styleUrls: ['./categorytabs.component.css']
})
export class CategorytabsComponent implements OnInit {

  menu = [];

  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.userservice.getdata().subscribe(
      (menudata) => {
        this.menu = menudata.menu;
        console.log(menudata);
      }
    );
  }

}
