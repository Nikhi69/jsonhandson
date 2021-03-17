import { employee } from './../employee/employee';
import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
