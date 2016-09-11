var $iλ = new XMLHttpRequest();
var reqProto = "GET";
var newsLink = "http://localhost:3000/news/1";
var asyncOption = true;
$iλ.onreadystatechange = function() {
  if (this.readyState == 4) {
    var parsData = JSON.parse(this.responseText);
    process(parsData);
    console.log(parsData);
  }
}
$iλ.open(reqProto, newsLink, asyncOption);
$iλ.send();

function process(parsedData) {
  var data = parsedData;
  var fieldName = Object.getOwnPropertyNames(parsedData);
  var message = data.msg;
  var newsMsgDashiλ = document.getElementById("wallMxsDash");
  var newsMsgDashTextNodeiλ = document.createTextNode(message);
  newsMsgDashiλ.appendChild(newsMsgDashTextNodeiλ);
}