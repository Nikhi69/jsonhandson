import { employee } from './employee/employee';

import { Injectable } from '@angular/core';
import { Department } from './employee-list/department';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  departments:Department[] = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];
 employeeList:employee[]= 
 [{
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

  },{
    id:2,
    name:"nikhil",
    salary:70000,
    permanent:true,
    dept:this.departments[2],
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
  dateOfBirth:new Date('12/07/1999')
  },{
    id:3,
    name:"nitish",
    salary:70000,
    permanent:true,
    dept:this.departments[2],
    skill:[{
      id:1,
      value:"Angular"    
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
  dateOfBirth:new Date('19/07/1999')
  },{
    id:4,
    name:"manish",
    salary:65000,
    permanent:true,
    dept:this.departments[0],
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
      value:"Ruby"
    }
  ],
  dateOfBirth:new Date('12/12/1998')
  },{
    id:5,
    name:"raj",
    salary:50000,
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
  dateOfBirth:new Date('10/07/1999')
  }]

  getAllEmployees():employee[]{
    return this.employeeList;
  }
 getEmployee(employeeId: number): employee{
for(var emp of this.employeeList){
  if(employeeId==emp.id){
    return emp;
  }
}
    return null;
 }
  constructor() { }
}
