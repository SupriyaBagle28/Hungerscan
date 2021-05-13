import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableentry',
  templateUrl: './tableentry.component.html',
  styleUrls: ['./tableentry.component.css']
})
export class TableentryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
this.router.navigate(['/user/menu']);
  }

}
