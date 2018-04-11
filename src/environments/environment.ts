// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
<<<<<<< HEAD
	productionUrlFalse: 'http://172.104.32.57:8383/',
	productionUrlTrue: 'http://172.104.32.57:8383/',
	productionUrlLocal: 'http://172.104.32.57:8383/',
=======
	productionUrlFalse: 'http://localhost:8383/',
	productionUrlTrue: 'http://localhost:8383/',
	productionUrlLocal: 'http://localhost:8383/',
>>>>>>> origin/Developer
	oAuth: 'oauth/token',
	register: 'register',
	Add_Company: 'api/addcompany',
	Add_Bank: 'api/addbank',
	Add_WareHouse: 'api/addwarehouse',
    Get_WareHouse: 'api/getWarehouse',
	Get_All_Company_Type: '/master/common/allcompanytype',
	Get_Services: '/master/common/getservices',
	Get_State: '/master/common/getstate',
<<<<<<< HEAD
	Get_City_By_State: '/master/common/getcity/',
=======
>>>>>>> origin/Developer
    Add_Order: 'api/order',
	addCampaign: 'addc/?',
	addCampaignCreative: 'acc/?',
	addAdvertiserRawCreative: 'addarc/?',
	getAdvertiserCampaigns: 'getac/?',
	getCampaign: 'getc/?',
	getMappedCampaign: 'getamc/?',
	getAdvertiserCreatives: 'getarc/?',
	categoryList: 'categorylist.json',
	getCampaignCreatives: 'getcc/?',
	renderAdvertiserCreative: 'renderarc/?',
	renderAdvertiserCampaignCreative: 'rendercc/?',
	updateStatus: 'us/?',
	updateCampaign: 'uc/?',
	updateCampaignCreative: 'ucc/?',
	getAdvertiserProfile: 'a/?',
	updateAdvertiserDetail: 'ua/?',
	updatePassword: 'upass/?',
	getPublishers: 'getp/?',
	getPublisherProperties: 'getpp/?',
	getPropertyAbilities: 'getpa/?',
	getDashboardCampaigns: 'getdc/?',
	getPropertyCampaigns: 'acfp/?',
	getAdvertiserCampaignAvailableProperties: 'apfc/?',
	updateCampaignForProperty: 'ucfp/?',
	updatePropertyForCampaign: 'upfc/?',
	addPublisher: 'addp/?',
	addAdvertiser: 'adda/?',
	getAdvertiser: 'geta/?',
	editAdPubStatus: 'us/?',
	addPropertyForPublisher: 'addpfp/?',
	updatePublisherProperty: 'upp/?',
	updatePublisherPropertyAbility: 'us/?',
	addPropertyAbility: 'addpa/?',
	editPublisher: 'up/?',
	getReport: 'gr/?',
	downloadReport: 'dr/?',
	createReport: 'cr/?'
};

