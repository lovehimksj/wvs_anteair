import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	private  year: number;
  constructor() { }

  ngOnInit() {
  	this.getYear();
  }

  getYear () {
  	this.year = new Date().getFullYear();
  }

}
