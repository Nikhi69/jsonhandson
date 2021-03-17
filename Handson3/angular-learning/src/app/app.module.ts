import { EmployeeService } from './employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, CanActivate } from '@angular/router';
import { MoviesComponent } from './movie.component';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { EditViewtempComponent } from './edit-viewtemp/edit-viewtemp.component';
import { EditEmpReactComponent } from './edit-emp-react/edit-emp-react.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-list/employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    EmployeeComponent,
    EditViewComponent,
    NavbarComponent,
    QuantityIncrementComponent,
    QuantitySelectorComponent,
    EditViewtempComponent,
    EditEmpReactComponent,
    EditEmpFormBuilderComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    LoginComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     

      {
        path:'viewemp',
        component:EmployeeComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      
      {
        path:'empcomp',
        component:EmployeeListComponent
      },
      {
        path:'viewempreact/:id',
        component: EditEmpReactComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'editempbuild',
        component: EditEmpFormBuilderComponent
      },
       {
        path:'editemp',
        component:EditViewComponent
      },
      {
        path:'editempview',
        component:EditViewtempComponent
      },
      {
        path:'users',
        component:UserComponent
      },
      {
        path:'quantinc',
        component:QuantityIncrementComponent
      },
      {
        path:'quantsel',
        component:QuantitySelectorComponent
      }
    ])
  ],
  providers: [EmployeeService,AuthGuard],
  bootstrap: [AppComponent,
    EditViewComponent]
})
export class AppModule { }
