import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpInterceptorService } from './service/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminlistComponent,
    CustomerlistComponent,
    UpdatemovieComponent,
    LoginComponent,
    LogoutComponent,
    FavoritesComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule.forRoot([
 
     ])
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
