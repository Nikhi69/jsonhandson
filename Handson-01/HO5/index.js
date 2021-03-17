function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let myObj = JSON.parse(this.responseText);
var keys=Object.keys(myObj);
for(var i=0; i<keys.length;i++){
  var key=keys[i];
  document.getElementById("demo").innerHTML = key+" "+myObj[key];
  console.log(key,myObj[key]);
}
    //   var myObj = JSON.stringify(this.responseText);
    //   console.log(myObj.length);
    //   var length=myObj.length;
      
    //     var string=null;
    //     for(var x=1;x<length;x++){
    //       string=string+"<br>"+myObj[x].first_name+myObj[x].last_name;
    //     }
    //     console.log(string);
    //     document.getElementById("demo").innerHTML = string;
    }
  };
  xhttp.open("GET", "https://reqres.in/api/users", true);
  xhttp.send();
}




