import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() {
	  $('.navigation').find('li').has('ul.menu-content').addClass('has-sub');
  }

  ngOnInit() {
  	// $(document).ready(function () {
		// $('.navigation').find('li').has('ul.menu-content').addClass('has-sub');
	// });
  }

}
