import { Skill } from './skill';
import { Department } from './department';
import { Component, OnInit } from '@angular/core';
import {employee} from "./employee";

@Component({
  selector: 'view-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

})
export class EmployeeComponent implements OnInit {
 
 skill1:Skill={id:1,value:"HTML"}
 skill2:Skill={id:2,value:'CSS'}
 skill3:Skill={id:3,value:'JavaScript'}
 skills:Skill[]=[this.skill1,this.skill2,this.skill3];
  emp :employee ={
    id: 10,
name: "john",
salary:55900,
permanent:true,
dept:{id:101, name:"payroll"},
skill:this.skills,
 dateOfBirth:new Date('12/31/1999')
};
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
