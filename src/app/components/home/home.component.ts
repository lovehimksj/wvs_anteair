import {Component, OnInit} from '@angular/core';
// import {CurrentUser} from '../../constructor/current-user';
import {UserProvider} from '../../package/provider/user.provider';
import {Router} from '@angular/router';
declare var swal:any;
declare var jquery:any;
declare var $ :any;

declare var swal: any;
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private userProvider: UserProvider,
                private router: Router) {
    }

    ngOnInit() {
        console.log(this.userProvider.getCurrentUser());
        if (this.userProvider.getCurrentUser()) {
            if (this.userProvider.getCurrentUser().scope === 'ROLE_USER') {
                if ((!this.userProvider.getCurrentUser().onboardStatus && !this.userProvider.getCurrentUser().is_approved) || (this.userProvider.getCurrentUser().onboardStatus && !this.userProvider.getCurrentUser().is_approved)) {
                    this.router.navigateByUrl('/profile');
                } else if (this.userProvider.getCurrentUser().onboardStatus && this.userProvider.getCurrentUser().is_approved) {
                    this.router.navigateByUrl('/dashboard');
                }
            }
            else if(this.userProvider.getCurrentUser().scope === 'ROLE_ADMIN') {
                this.router.navigateByUrl('/admin/dashboard');
            }
        } else {
            this.router.navigateByUrl('/')
        }


        /*=========================================================================================
        File Name: sweet-alerts.js
        Description: A beautiful replacement for javascript alerts
        ----------------------------------------------------------------------------------------
        Item Name: Robust - Responsive Admin Theme
        Version: 1.2
        Author: GeeksLabs
        Author URL: http://www.themeforest.net/user/geekslabs
    ==========================================================================================*/
        $(document).ready(function () {

<<<<<<< HEAD
            // $('#basic-alert').on('click',function(){
            //   swal("Here's a message!");
            // });
            //
            // $('#with-title').on('click',function(){
            //   swal("Here's a message!", "It's pretty, isn't it?");
            // });
            //
            // $('#html-alert').on('click',function(){
            //   swal({
            // 	  title: 'HTML <small>Title</small>!',
            // 	  text: 'A custom <span style="color:#F6BB42">html<span> message.',
            // 	  html: true
            //   });
            // });
            // $('#type-success').on('click',function(){
            //   swal("Good job!", "You clicked the button!", "success");
            // });
        });
        // console.log(this.userProvider.getCurrentUser());
    }
=======
  ngOnInit() {
  	console.log(this.userProvider.getCurrentUser());
  	if (this.userProvider.getCurrentUser()) {
  		if ((!this.userProvider.getCurrentUser().onboardStatus && !this.userProvider.getCurrentUser().is_approved) || (this.userProvider.getCurrentUser().onboardStatus && !this.userProvider.getCurrentUser().is_approved)) {
  			this.router.navigateByUrl('/profile');
		} else if (this.userProvider.getCurrentUser().onboardStatus && this.userProvider.getCurrentUser().is_approved) {
			this.router.navigateByUrl('/dashboard');
		} else {
			this.router.navigateByUrl('/')
		}
	}


	  /*=========================================================================================
      File Name: sweet-alerts.js
      Description: A beautiful replacement for javascript alerts
      ----------------------------------------------------------------------------------------
      Item Name: Robust - Responsive Admin Theme
      Version: 1.2
      Author: GeeksLabs
      Author URL: http://www.themeforest.net/user/geekslabs
  ==========================================================================================*/
	  $(document).ready(function(){

		  // $('#basic-alert').on('click',function(){
			//   swal("Here's a message!");
		  // });
          //
		  // $('#with-title').on('click',function(){
			//   swal("Here's a message!", "It's pretty, isn't it?");
		  // });
          //
		  // $('#html-alert').on('click',function(){
			//   swal({
			// 	  title: 'HTML <small>Title</small>!',
			// 	  text: 'A custom <span style="color:#F6BB42">html<span> message.',
			// 	  html: true
			//   });
		  // });
		  // $('#type-success').on('click',function(){
			//   swal("Good job!", "You clicked the button!", "success");
		  // });
	  });
  	// console.log(this.userProvider.getCurrentUser());
  }
>>>>>>> origin/Developer
}
