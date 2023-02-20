import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/add',component:AddProductComponent},
  {path:'articlesss',component:ArticlesComponentComponent},
  {path:'products/:id', component: ProductDetailComponentComponent},
  {path:'offres',component:OffresEmploiComponentComponent},
  {path:'offers/add',component:AddOfferComponent},
  {path:'templatedriven',component:TemplateDrivenFormComponentComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }