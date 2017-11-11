export class Order {
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
	itemQuantity: string;
	itemPrice: string;
	itemHeight: string;
	itemWidth: string;
	itemWeight: string;
	itemLength: string;
	codDue: string;
	orderType: string;

	constructor(paymentMode?: number,
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
				itemQuantity?: string,
				itemPrice?: string,
				itemHeight?: string,
				itemWidth?: string,
				itemWeight?: string,
				itemLength?: string,
				codDue?: string,
				orderType?: string
	) {
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
		this.codDue = codDue;
		this.orderType = orderType;

	}
}
