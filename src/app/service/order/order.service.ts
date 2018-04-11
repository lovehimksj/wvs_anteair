import { Injectable } from '@angular/core';
import {RestApi} from '../../package/communication';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class OrderService {

    constructor(private restApi: RestApi) {
    }
<<<<<<< HEAD
=======
    /*"awb_id": "string",
            "catg_pkg": "string",
            "courier_id": 0,
            "cust_order_id": "string",

            "order_status": "string",

            "service_id": 0,

            "walletFundMess": "string",
            "warehouse_id": 0*/

    /*
    customerAddressSecond:undefined
    customerAddressThird:undefined
    customerState:undefined

    itemPrice:undefined
    itemSku:"3123123123123"
    :undefined
    :undefined
    :undefined
    paymentMode:undefined
    :undefined
    warehouse_id:undefined*/
>>>>>>> origin/Developer

    public createNewOrder(account: any): Observable<any> {
        const url = `${environment.Add_Order}`;
        let formData = new FormData();
        formData.append('customer_name', account.customerName);
        formData.append('customer_contact', account.customerContact);
        formData.append('customer_address', account.customerAddressFirst);
        formData.append('customer_address_city', account.customerCity);
        formData.append('customer_address_pin', account.customerPinCode);
        formData.append('pkg_width', account.itemWidth);
        formData.append('pkg_weight', account.itemWeight);
        formData.append('pkg_hight', account.itemHeight);
        formData.append('pkg_length', account.itemLength);
        formData.append('pkg_name', account.itemName);
<<<<<<< HEAD
        formData.append('warehouse_id', account.warehouse_id);
        formData.append('service_id', account.paymentMode);
=======

>>>>>>> origin/Developer
        formData.append('order_quantity', account.itemQuantity);
        formData.append('total_value', account.total_value);
        formData.append('order_type', account.order_type);
        formData.append('pkg_name', account.itemName);
<<<<<<< HEAD
        formData.append('catg_pkg', 'test');
=======

>>>>>>> origin/Developer
        console.log(JSON.stringify(formData));
        return this.restApi.post(url, null, formData);
    }
}
