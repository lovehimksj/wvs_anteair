import {Routes, RouterModule} from '@angular/router';
import {MerchantBoardingComponent} from "./components/merchant-boarding/merchant-boarding.component";
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OrdersComponent} from './components/orders/orders.component';
import {NewOrderComponent} from './components/orders/new-order/new-order.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AdminAuthGuard, AuthenticationGuard} from './package/guards/authentication.guard';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';

export const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'merchantBoarding', component: MerchantBoardingComponent},
	{path: 'dashboard', component: DashboardComponent, canActivate : [AuthenticationGuard]},
	{path: 'orders', component: OrdersComponent, canActivate : [AuthenticationGuard]},
	{path: 'addOrder', component: NewOrderComponent, canActivate : [AuthenticationGuard]},
	{path: 'profile', component: ProfileComponent, canActivate : [AuthenticationGuard]},
<<<<<<< HEAD
	{path: 'admin', children: [
	    {path: 'dashboard', component: AdminDashboardComponent}
	    ]
    },
=======
>>>>>>> origin/Developer
	// otherwise redirect to home
	{path: '**', redirectTo: ''}
];


export const routing = RouterModule.forRoot(appRoutes);
