// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);


    
//     // var result = data.split(/(?!})(?={)/).map(function(v, i) { return JSON.parse(this.responseText); });
  
//     // console.log("FirstName:"+myObj.firstname+"\nLastName:"+myObj.lastname+"\nSalary:"+myObj.salary+"\nPermanent Staff:"+myObj.permanentstaff);
//     // console.log("Department Id:"+myObj.department[0].departmentid+"\nDepartment Name:"+myObj.department[0].departmentname);
//     // document.getElementById("demo").innerHTML = myObj.firstname+" "+myObj.lastname;
//   }
// };
// xmlhttp.open("GET", "index.text", true);
// xmlhttp.send();

var emp=`{
  "firstname":"John",
  "lastname":"Stoke",
  "salary":5200,
  "permanentstaff":"true",
  "department":[
      {"departmentid":3,"departmentname":"payroll"}
  ],
  "skills":[
    {"id":1,"value":"HTML"},
    {"id":2,"value":"CSS"},
    {"id":3,"value":"JavaScript"}
  ]
}`;
let myObj = JSON.parse(emp);
console.log("FirstName "+myObj.firstname);
console.log("LastName "+myObj.lastname);
console.log("Salary "+myObj.salary);
console.log("Permanent STaff "+myObj.permanentstaff);
console.log("Department Id "+myObj.department.departmentid);
console.log("Department Name "+myObj.department.departmentname);
for(let i=0;i<myObj.skills.length;i++){
  console.log("Skill "+(i+1)+":"+myObj.skills[i].id+","+myObj.skills[i].value);
}
// var keys=Object.keys(myObj);
// for(var i=0; i<keys.length;i++){
//   var key=keys[i];
//   console.log(key,myObj[key]);
// }


// console.log("FirstName:"+myObj.firstname+"\nLastName:"+myObj.lastname+"\nSalary:"+myObj.salary+"\nPermanent Staff:"+myObj.permanentstaff);
// console.log("Department Id:"+myObj.department[0].departmentid+"\nDepartment Name:"+myObj.department[0].departmentname);  

