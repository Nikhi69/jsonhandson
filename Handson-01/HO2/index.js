var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
    document.getElementById("demo").innerHTML = myObj.firstname+" "+myObj.lastname;
  }
};
xmlhttp.open("GET", "index.text", true);
xmlhttp.send();



