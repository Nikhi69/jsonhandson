import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {
   val=0;
  
  disable=true;
 
  plus(){
    this.val++;
    this.disable=false;
  }
  minus(){
    if(this.val!=0){
    this.disable=false;
    this.val--;
  } 
   
  }
  constructor() { 
    }

  ngOnInit(): void {
  }

}
