import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-pricing',
  templateUrl: './simple-pricing.component.html',
  styleUrls: ['./simple-pricing.component.scss']
})
export class SimplePricingComponent implements OnInit {

  value_slider:number = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
