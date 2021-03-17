import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {
  
  message:string='';
  click(){
 this.message="click me button clicked!";
}
  constructor() { }

  ngOnInit(): void {
  }

}
