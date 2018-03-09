export class Order {
    warehouse_id: number;
	paymentMode: number;
	customerName: string;
	customerAddressFirst: string;
	customerAddressSecond: string;
	customerAddressThird: string;
	customerCity: string;
	customerState: string;
	customerPinCode: string;
	customerContact: string;
	itemSku: string;
	itemName: string;
	itemQuantity: number;
	itemPrice: number;
	itemHeight: number;
	itemWidth: number;
	itemWeight: number;
	itemLength: number;
    total_value: number;
    order_type: string;

	constructor(paymentMode?: number,
                warehouseId?: number,
				customerName?: string,
				customerAddressFirst?: string,
				customerAddressSecond?: string,
				customerAddressThird?: string,
				customerCity?: string,
				customerState?: string,
				customerPinCode?: string,
				customerContact?: string,
				itemSku?: string,
				itemName?: string,
				itemQuantity?: number,
				itemPrice?: number,
				itemHeight?: number,
				itemWidth?: number,
				itemWeight?: number,
				itemLength?: number,
				codDue?: number,
				orderType?: string
	) {
		this.warehouse_id = warehouseId;
		this.paymentMode = paymentMode;
		this.customerName = customerName;
		this.customerAddressFirst = customerAddressFirst;
		this.customerAddressSecond = customerAddressSecond;
		this.customerAddressThird = customerAddressThird;
		this.customerCity = customerCity;
		this.customerState = customerState;
		this.customerPinCode = customerPinCode;
		this.customerContact = customerContact;
		this.itemSku = itemSku;
		this.itemName = itemName;
		this.itemQuantity = itemQuantity;
		this.itemPrice = itemPrice;
		this.itemHeight = itemHeight;
		this.itemWidth = itemWidth;
		this.itemWeight = itemWeight;
		this.itemLength = itemLength;
		this.total_value = codDue;
		this.order_type = orderType;

	}
}
