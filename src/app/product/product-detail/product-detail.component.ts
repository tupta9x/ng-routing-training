import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
     // this.activatedRoute.paramMap.subscribe(params => {
    //   console.log(params);
    //   const id = params.get('id');
    //   this.productService.findProductById(id).subscribe(
    //     product => this.product = product
    //   );
    // });
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.productService.findProductById(id))
    ).subscribe(product => this.product = product);
    // const paramMap = this.activatedRoute.snapshot.paramMap;
    // const id = paramMap.get('id');
    // this.productService.findProductById(id).subscribe(product => this.product = product);

  }

  backToList() {
    this.router.navigate(['/product']);
  }

}
