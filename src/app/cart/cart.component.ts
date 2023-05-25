import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartDisplayService } from '../cart-display.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  //public finalTotal !: number;

  constructor(private cartService: CartService,private cartDisplayService:CartDisplayService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();

      })
  }

  checking(){
    this.cartService.getProducts()
    .subscribe(res => {
      console.log("the elements are after click checking is");
      console.log(res);
      console.log(res.length-1)
       res.forEach((element: any) => {
          this.cartDisplayService.storeCartDetails(element).subscribe(p=>{
            console.log(p)
          },error=>{
            console.log(error)
          })
        });
    })

  }

  // Removing the item from the cart
  removeItem(product: any) {
    this.cartService.removeCartItem(product);
  }
  //After Removing cart is empty
  emptycart() {
    this.cartService.removeAllCart();
  }

  // Updating the cart with required products
  updatecart() {
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandTotal = this.grandTotal;
  }
  // Increasing the Quantity of the products
  inc(product: any) {
    product.quantity += 1;
    this.updatecart();
  }

  // Decreasing the Quantity of the products

  des(product: any) {
    if (product.quantity != 1) {
      product.quantity -= 1;
      this.updatecart();
    }
  }

}

