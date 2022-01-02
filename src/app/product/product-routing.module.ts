import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";

const productRouters: Routes = [
  { path: "product", component: ProductListComponent },
  { path: "product/:id", component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRouters)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
