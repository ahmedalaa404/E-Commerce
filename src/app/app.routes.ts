import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { ProductsComponent } from './Component/products/products.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';

export const routes: Routes = [

    {path:"",redirectTo:"register",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"cart",component:CartComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"brands",component:BrandsComponent},
    {path:"Product",component:ProductsComponent },
    {path:"categories",component:CategoriesComponent},
    {path:"**",component:NotfoundComponent},
];
