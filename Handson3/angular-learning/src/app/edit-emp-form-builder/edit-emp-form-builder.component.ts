
import { Department } from './../employee/department';
import { Skill } from './../employee/skill';
import { employee } from '../employee/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,FormArray  } from '@angular/forms';
@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {
  
//   skill1:Skill={id:1,value:"HTML"}
//   skill2:Skill={id:2,value:'CSS'}
//   skill3:Skill={id:3,value:'JavaScript'}
//   skills:Skill[]=[this.skill1,this.skill2,this.skill3];
//    employee :employee ={
//      id: 10,
//  name: "john",
//  salary:55900,
//  permanent:true,
//  dept:{id:101, name:"payroll"},

//  skill:this.skills,
//   dateOfBirth:new Date('12/31/1999')
//  };
//  departments = [
//     { id: 1, name: "Payroll" },
//     { id: 2, name: "Internal" },
//     { id: 3, name: "HR" }
//   ];
  empForm = this.fb.group({
    name : ['John',Validators.required],
    salary:['50000'],
    permanent : [''],
    skill:this.fb.array([
      this.fb.control('')

    ]),
    
  });
  get skill(){
    return this.empForm.get('skill') as FormArray;
  }

get name() { return this.empForm.get('name'); }

get salary() { return this.empForm.get('salary'); }

get department(){
  return this.empForm.get('departments');
}
onSubmit(){
  console.log(this.empForm.value);
}
  constructor(private fb : FormBuilder) { }

  addSkill(){
    let ilen=this.skill.length;
    const newskill = this.fb.group({
      id :[ilen+1],
      value:['']
    })
    // this.skill.push(newskill);
    this.skill.push(this.fb.control(''));
  }
  ngOnInit(): void {
  }

}
