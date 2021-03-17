import { Skill } from './../employee/skill';
import { employee } from '../employee/employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-viewtemp',
  templateUrl: './edit-viewtemp.component.html',
  styleUrls: ['./edit-viewtemp.component.css']
})
export class EditViewtempComponent implements OnInit {
  skill1:Skill={id:1,value:"HTML"}
  skill2:Skill={id:2,value:'CSS'}
  skill3:Skill={id:3,value:'JavaScript'}
  skills:Skill[]=[this.skill1,this.skill2,this.skill3];
   employee :employee ={
     id: 10,
 name: "john",
 salary:55900,
 permanent:true,
 dept:{id:101, name:"payroll"},
 skill:this.skills,
  dateOfBirth:new Date('12/31/1999')
 };
myDep(event){
  this.employee.dept.id=event.target.value;
  if(event.target.value==1){
    this.employee.dept.name="Payroll";
  }
  if(event.target.value==2){
    this.employee.dept.name="Internal";
  }
  if(event.target.value==3){
    this.employee.dept.name="HR";
  }
}
departments = [
  { id: 1, name: "Payroll" },
  { id: 2, name: "Internal" },
  { id: 3, name: "HR" }
];
onSubmit(){
  console.log(this.employee);
}
  constructor() { }

  ngOnInit(): void {
  }

}
