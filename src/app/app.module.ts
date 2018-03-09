import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CookieModule} from 'ngx-cookie';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {routing} from './app.routing';
import {RegisterComponent} from './components/register/register.component';
import {AuthenticationInterceptor} from './package/oAuth/authentication-interceptor.service';
import {CommunicationService, RestApi} from './package/communication';
import {SessionService} from './package/session/session.service';
import {AuthenticationGuard} from './package/guards/authentication.guard';
import {AccountService} from './service/account/account.service';
import {TokenProvider} from './package/oAuth/token.provider';
import {TokenMapper} from './package/mapper/token.mapper';
import {UserMapper} from './package/mapper/user.mapper';
import {UserProvider} from './package/provider/user.provider';
import {UserService} from './service/user/user.service';
import {HomeComponent} from './components/home/home.component';
import {CampaignService} from './service/campaign/campaign.service';
import {CampaignMapper} from './package/mapper/campaign.mapper';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {HeaderComponent} from './components/header/header.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {MerchantBoardingComponent} from './components/merchant-boarding/merchant-boarding.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrdersComponent } from './components/orders/orders.component';
import {NewOrderComponent} from './components/orders/new-order/new-order.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from './guard/auth.guard';
import {AuthenticationService} from './service/auth/authentication.service';
import { KeysPipe } from './pipe/keys.pipe';
import {MasterService} from './service/masterData/master.service';
import {NotificationService} from './package/notification/notification.service';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		ForgotPasswordComponent,
		HeaderComponent,
		SideNavComponent,
		FooterComponent,
		MerchantBoardingComponent,
		DashboardComponent,
		OrderComponent,
		OrderListComponent,
		OrdersComponent,
		NewOrderComponent,
		ProfileComponent,
		KeysPipe
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		FormsModule,
		routing,
		CookieModule.forRoot()
	],
	providers: [
		UserProvider,
		RestApi,
		AuthenticationService,
		CommunicationService,
		SessionService,
		AuthenticationGuard,
		AccountService,
		UserService,
		CampaignService,
		MasterService,
        NotificationService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthenticationInterceptor,
			multi: true,
		},
		TokenProvider,
		TokenMapper,
		CampaignMapper,
		UserMapper
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
