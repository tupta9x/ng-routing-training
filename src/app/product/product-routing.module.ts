import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { CheckEditGuard } from "../check-edit.guard";
import { ProductEditComponent } from "../product-edit/product-edit.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product.component";

const productRouters: Routes = [
  {
    path: "product",
    component: ProductComponent,
    children: [
      { path: "", component: ProductListComponent },
      {
        path: ":id",
        canActivate: [AuthGuard],
        children: [
          { path: "", component: ProductDetailComponent },
          { path: "edit", component: ProductEditComponent, canDeactivate: [CheckEditGuard] }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(productRouters)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
