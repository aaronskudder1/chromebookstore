import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';
import { KidspassgenComponent } from './kidspassgen/kidspassgen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Application Database" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog" },
  { path: 'cart', component: CartComponent, title: "Cart" },
  { path: 'sign-in', component: SignInComponent },
  { path: 'form-controls', component: TemplateFormControlsComponent },
  { path: 'kidspassgen', component: KidspassgenComponent, title: "Kids Password Generator" }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }