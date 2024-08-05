import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller',
    component: SellerAuthComponent
  },
  // 404 Route (This should be the last route)
  { path: '**', component: SellerAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
