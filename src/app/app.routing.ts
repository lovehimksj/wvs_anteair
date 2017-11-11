import {Routes, RouterModule} from '@angular/router';
import {MerchantBoardingComponent} from "./components/merchant-boarding/merchant-boarding.component";
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OrdersComponent} from './components/orders/orders.component';
import {NewOrderComponent} from './components/orders/new-order/new-order.component';
import {ProfileComponent} from './components/profile/profile.component';

export const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'merchantBoarding', component: MerchantBoardingComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'orders', component: OrdersComponent},
	{path: 'addOrder', component: NewOrderComponent},
	{path: 'profile', component: ProfileComponent},
	// otherwise redirect to home
	{path: '**', redirectTo: ''}
];


export const routing = RouterModule.forRoot(appRoutes);
