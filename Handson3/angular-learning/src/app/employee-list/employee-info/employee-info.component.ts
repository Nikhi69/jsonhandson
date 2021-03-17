import { Department } from './../../edit-view/department';
import { employee } from './../../edit-view/employee';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  departments:Department[] = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];

  @Input() employee:employee={
    id:1,
    name:"john",
    salary:56656,
    permanent:true,
    dept:this.departments[1],
    skill:[{
      id:1,
      value:"Python"    
    },
    {
      id:2,
      value:"HTML"
    },
    {
      id:3,
      value:"Java"
    }
  ],
  dateOfBirth:new Date('12/31/1999')

  };
  constructor() { }

  ngOnInit(): void {
  }

}
