import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public products: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getWishlist()
      .subscribe(res => {
        this.products = res;
        //this.grandTotal = this.cartService.getTotalPrice();

      })
  }

  removeItem(product: any) {
    this.cartService.removeWishListItem(product);
  }

}
