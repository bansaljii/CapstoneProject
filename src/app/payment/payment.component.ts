import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  msg: string = ""

  constructor() { }

  ngOnInit(): void {


  }
  payNow() {
    //console.log("Order Placed Successfully!!!");
    alert("Order Placed Successfully...");
  }

}

