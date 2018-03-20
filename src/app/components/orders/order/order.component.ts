import {Component, OnInit} from '@angular/core';
import {Order} from '../../../constructor/order';
import {UserService} from '../../../service/user/user.service';
import {OrderService} from '../../../service/order/order.service';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    public wareHouseList: any[] = [];
    public order: Order = new Order();
    constructor(private user: UserService, private orderService: OrderService) {
    }

    ngOnInit() {
        this.user.getAllWareHouseByUserName()
            .subscribe(value => {
                this.wareHouseList = value;
                console.log(value)
            }, error2 => {
                console.log(error2);
            })
    }

    createOrder() {
        console.log(this.order);
        this.orderService.createNewOrder(this.order).subscribe( value => {
            console.log(value);
        }, error2 => {
            console.log(error2);
        })
    }

}
