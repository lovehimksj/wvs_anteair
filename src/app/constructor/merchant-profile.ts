export class MerchantProfile {
	user_id: number;
	company_name: string;
	account_number: string;
	account_name: string;
	account_type_id: number;
	ifsc_code: string;
	branch_name: string;
	brand_name: string;
	service_check: any;
	company_type_id: number = null;
	city_id: number = null;
	website: string;
	address: string;
	vendor_name: string;
	address_one: string;
	address_two: string;
	warehouse_pin: string;
	warehouse_state_id: number;
	warehouse_city_id: number;
	contact_name: string;
	contact_number: string;
	default_pickup: string;
	default_billing: string;
	pin: string;
	state_id: number = null;
	cancel_cheque_mul: object;
	company_id_proof_mul: object;
	address_proof_mul: object;
	pancard_mul: object;
	gstin_mul: object;
	wareHouse_address_proof_mul: object;
	tan_number_mul: object;

	constructor(user_id?: number,
				company_name?: string,
				brand_name?: string,
				website?: string,
				account_number?: string,
				account_name?: string,
				account_type_id?: number,
				ifsc_code?: string,
				branch_name?: string,
				address?: string,
				pin?: string,
				state_id?: number,
				city_id?: number,
				service_check?: any,
				vendor_name?: string,
				address_one?: string,
				address_two?: string,
				warehouse_pin?: string,
				warehouse_state_id?: number,
				warehouse_city_id?: number,
				contact_name?: string,
				contact_number?: string,
				default_pickup?: string,
				default_billing?: string,
				company_type_id?: number,
				company_id_proof_mul?: object,
				address_proof_mul?: object,
				cancel_cheque_mul?: object,
				pancard_mul?: object,
				gstin_mul?: object,
				tan_number_mul?: object,) {
		this.user_id = user_id;
		this.company_name = company_name;
		this.brand_name = brand_name;
		this.account_number = account_number;
		this.account_name = account_name;
		this.account_type_id = account_type_id;
		this.ifsc_code = ifsc_code;
		this.branch_name = branch_name;
		this.website = website;
		this.address = address;
		this.pin = pin;
		this.state_id = state_id;
		this.service_check = service_check;
		this.company_type_id = company_type_id;
		this.city_id = city_id;
		this.vendor_name = vendor_name;
		this.address_one = address_one;
		this.address_two = address_two;
		this.warehouse_pin = warehouse_pin;
		this.warehouse_state_id = warehouse_state_id;
		this.warehouse_city_id = warehouse_city_id;
		this.contact_name = contact_name;
		this.contact_number = contact_number;
		this.default_pickup = default_pickup;
		this.default_billing = default_billing;
		this.company_id_proof_mul = company_id_proof_mul;
		this.address_proof_mul = address_proof_mul;
		this.cancel_cheque_mul = cancel_cheque_mul;
		this.pancard_mul = pancard_mul;
		this.gstin_mul = gstin_mul;
		this.tan_number_mul = tan_number_mul;
	}
}

export class ServiceType {
	serviceType: any;

	constructor() {
		this.serviceType = ['COD', 'PREPAID', 'Same day', 'air', 'surface', 'Full trcuk load', 'Train', 'Bulk', 'Cold chain', 'Internationa'];
	}
}
