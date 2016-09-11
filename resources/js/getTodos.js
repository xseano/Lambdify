var xhttp = new XMLHttpRequest();
var reqMethod = "GET";
var linkAroni = "http://localhost:3000/users/hhhhadjklsajkdlaskjd";
if (linkAroni == "") {
  document.getElementById("error").className = "alert alert-danger";
  document.getElementById("send").setAttribute("type", "button");
  document.getElementById('error').innerHTML =
    "<strong>Stop!</strong> You must fill the link field with a value, no blanks!";
  refresh(1000);
} else {
  var asyncAroni = true;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      var parsData = JSON.parse(this.responseText);
	  console.log(parsData);
      process(parsData);
    }
  }
  xhttp.open(reqMethod, linkAroni, asyncAroni);
  xhttp.send();
}


function process(parsedData) {
    var data = parsedData;
    var gay = true;
    console.log(data);
      var da = [data];
      console.log(da);
      var dataLength = da.length;
      for (i = 0; i < dataLength; i++) {
        var nex = da[i];
        console.log(nex);
      }
	  var todoObjects = nex.todos;
      var fieldName = Object.getOwnPropertyNames(nex);
      console.log(todoObjects);