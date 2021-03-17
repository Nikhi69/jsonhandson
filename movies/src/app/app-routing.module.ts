import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'adminlist', component:AdminlistComponent},
  {path:'customerlist', component:CustomerlistComponent,canActivate:[AuthGuard]},
  {path:'favorites', component:FavoritesComponent},
  {path:'edit/:id', component:UpdatemovieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
