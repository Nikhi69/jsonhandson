
var emp=`{
  "firstname":"John",
  "lastname":"Stoke",
  "salary":5200,
  "permanentstaff":"true",
  "department":[
      {"departmentid":3,"departmentname":"payroll"}
  ]
}`;
var myObj = JSON.parse(emp);
console.log("FirstName:"+myObj.firstname+"\nLastName:"+myObj.lastname+"\nSalary:"+myObj.salary+"\nPermanent Staff:"+myObj.permanentstaff);
console.log("Department Id:"+myObj.department[0].departmentid+"\nDepartment Name:"+myObj.department[0].departmentname);  

