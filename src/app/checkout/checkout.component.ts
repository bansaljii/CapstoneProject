import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CartDisplayService } from '../cart-display.service';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;
  public code!: string;
  public coupons: string[] = ["RKM10", "SRJ20", "DEB15", "PAV30"];
  //public coupons:string[]=[];  
  msg: string = "";
  discount1!: number;
  final1!: number;

  constructor(private cartService: CartService, private discountService: DiscountService, private cartDisplay: CartDisplayService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();

      })
  }

  applyCoupon() {
    this.discountService.loadDiscount().subscribe(res => {
      for (let c of res) {
        this.coupons.push(c.dname);
      }
    }, error => {
      console.log("error is" + error)
    })

    console.log("the coupons is" + this.coupons)

    for (var val of this.coupons) {
      if (val == this.code) {
        if (this.code == "RKM10") {
          this.msg = "discount of 10%";
          this.final1 = this.grandTotal - this.grandTotal * 0.1
          break;

        }
        else if (this.code == "SRJ20") {
          this.msg = "discount of 20%"
          this.final1 = this.grandTotal - this.grandTotal * 0.2
          break;

        }
        else if (this.code == "DEB15") {
          this.msg = "discount of 30%"
          this.final1 = this.grandTotal - this.grandTotal * 0.5
          break;

        }
        else if (this.code = "PAV30") {
          this.msg = "discount of 40%"
          this.final1 = this.grandTotal - this.grandTotal * 0.3
          break;
        }
      }
      else {
        this.msg = "invalid coupon code"
      }
    }

  }


}


