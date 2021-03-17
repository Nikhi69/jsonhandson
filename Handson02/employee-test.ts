import { Skill } from './skill';
import {employee} from "./employee";



let skill1:Skill={id:1,value:"HTML"}
let skill2:Skill={id:1,value:'CSS'}
let skill3:Skill={id:1,value:'JavaScript'}
let skills:Skill[]=[skill1,skill2,skill3];
const emp :employee ={
        id: 10,
    name: "john",
    salary:1900,
    permanent:true,
    dept:{id:101,name:"payroll"},
    skill:skills
};
console.log("id:"+emp.id);
console.log("name:"+emp.name);
console.log("salary:"+emp.salary);
console.log("permanent:"+emp.permanent);
console.log("department id:"+emp.dept.id);
console.log("department name:"+emp.dept.name);
for(let i = 0; i < emp.skill.length; i++){

    console.log("Skill["+i+"]: " + (i + 1) + ": " + emp.skill[i].value)

}

console.log("======================");
class EmployeeTest{
    emp:employee;

    constructor(employee:employee){
        this.emp=employee;
    }
display(){
    console.log("id:"+emp.id);
console.log("name:"+emp.name);
console.log("salary:"+emp.salary);
console.log("permanent:"+emp.permanent);
console.log("department id:"+emp.dept.id);
console.log("department name:"+emp.dept.name);
for(let i = 0; i < emp.skill.length; i++){

    console.log("Skill["+i+"]: " + (i + 1) + ": " + emp.skill[i].value)

}
}

}

let employeeClass =new EmployeeTest(emp);
employeeClass.display();
