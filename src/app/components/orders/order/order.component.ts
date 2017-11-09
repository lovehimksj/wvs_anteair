import {Component, OnInit} from '@angular/core';
import {Order} from '../../../constructor/order';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
	private order: Order = new Order();
	constructor() {
	}

	createOrder() {
		console.log(this.order);
	}

	ngOnInit() {
	}

}
