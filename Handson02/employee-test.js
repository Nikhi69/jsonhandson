"use strict";
exports.__esModule = true;
var skill1 = { id: 1, value: "HTML" };
var skill2 = { id: 1, value: 'CSS' };
var skill3 = { id: 1, value: 'JavaScript' };
var skills = [skill1, skill2, skill3];
var emp = {
    id: 0,
    name: "john",
    salary: 1900,
    permanent: true,
    dept: { id: 101, name: "payroll" },
    skill: skills
};
console.log("id:" + emp.id);
console.log("name:" + emp.name);
console.log("salary:" + emp.salary);
console.log("permanent:" + emp.permanent);
console.log("department id:" + emp.dept.id);
console.log("department name:" + emp.dept.name);
for (var i = 0; i < emp.skill.length; i++) {
    console.log("Skill[" + i + "]: " + (i + 1) + ": " + emp.skill[i].value);
}
console.log("======================");
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(employee) {
        this.emp = employee;
    }
    EmployeeTest.prototype.display = function () {
        console.log("id:" + emp.id);
        console.log("name:" + emp.name);
        console.log("salary:" + emp.salary);
        console.log("permanent:" + emp.permanent);
        console.log("department id:" + emp.dept.id);
        console.log("department name:" + emp.dept.name);
        for (var i = 0; i < emp.skill.length; i++) {
            console.log("Skill[" + i + "]: " + (i + 1) + ": " + emp.skill[i].value);
        }
    };
    return EmployeeTest;
}());
var employeeClass = new EmployeeTest(emp);
employeeClass.display();
