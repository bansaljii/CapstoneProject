import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === 'Home' || a.category === 'Grocery' || a.category === 'Mobiles' || a.category === 'Fashion' || a.category === 'Beauty' || a.category === 'Appliances' || a.category === 'Sports' || a.category === 'Eletronics') { }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList);
      });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

  }

  addtowishList(product: any) {
    console.log("wishlist");
    console.log(product);
    this.cartService.addtowishlist(product)
  }
  //Adding products into cart
  addtocart(product: any) {
    this.cartService.addtoCart(product);
  }
  //filtering the products
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }

}
