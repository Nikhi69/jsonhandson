import { employee } from './../employee/employee';
import { EmployeeService } from './../employee.service';
// import { employee } from './../employee-list/employee';
import { Department } from './../employee/department';
import { Skill } from './../employee/skill';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-edit-emp-react',
  templateUrl: './edit-emp-react.component.html',
  styleUrls: ['./edit-emp-react.component.css']
})
export class EditEmpReactComponent implements OnInit {
  skill1:Skill={id:1,value:"HTML"}
  skill2:Skill={id:2,value:'CSS'}
  skill3:Skill={id:3,value:'JavaScript'}
  skills:Skill[]=[this.skill1,this.skill2,this.skill3];
  empForm;

get name() { return this.empForm.get('name'); }

get salary() { return this.empForm.get('salary'); }

// get departments(){
//   return this.empForm.get('departments');
// }
onSubmit(){
  console.log(this.empForm.value);
}
constructor(private route : ActivatedRoute,private employeeService : EmployeeService) { 
 
}

employee;
departments:any = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ];
  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log("EmployeeId selected is ",employeeId);
    this.employee=this.employeeService.getEmployee(parseInt(employeeId));
    
    this.empForm=new FormGroup({
      'name': new FormControl(this.employee.name,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]),
      'salary': new FormControl(this.employee.salary, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      'permanent': new FormControl(this.employee.permanent,[Validators.required]),
      'departments' : new FormControl(this.employee.dept)  
    
  });
  }

}
