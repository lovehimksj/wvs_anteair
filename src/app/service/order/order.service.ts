import { Injectable } from '@angular/core';
import {RestApi} from '../../package/communication';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class OrderService {

    constructor(private restApi: RestApi) {
    }

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
        formData.append('warehouse_id', account.warehouse_id);
        formData.append('service_id', account.paymentMode);
        formData.append('order_quantity', account.itemQuantity);
        formData.append('total_value', account.total_value);
        formData.append('order_type', account.order_type);
        formData.append('pkg_name', account.itemName);
        formData.append('catg_pkg', 'test');
        console.log(JSON.stringify(formData));
        return this.restApi.post(url, null, formData);
    }
}
