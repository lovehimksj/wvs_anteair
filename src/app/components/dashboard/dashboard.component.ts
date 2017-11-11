import { Component, OnInit } from '@angular/core';
import {OrderListComponent} from "../orders/order-list/order-list.component";
import {OrderComponent} from "../orders/order/order.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
