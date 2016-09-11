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
	  console.log(data);
	  var fieldName = Object.getOwnPropertyNames(parsedData);
	  console.log(fieldName);
	  var newsID = data.id;
	  var date = data.date;
	  var time = ((data.time).toUpperCase());
	  var title = data.title;
	  var message = data.msg;
	  var dataLength = Object.keys(data).length;
	  var fieldLength = fieldName.length;
	  
		var newsTitle = document.getElementById("newsTitle");
	  var newsTitleTextNode = document.createTextNode(title);
	  newsTitle.appendChild(newsTitleTextNode);
	  
	var newsDate = document.getElementById("newsDT");
	  var newsDateTextNode = document.createTextNode("Posted on " + date +
	    " at " + time + ".");
	  newsDate.appendChild(newsDateTextNode);
	  var newsMsg = document.getElementById("newsMessage");
	  var newsMsgTextNode = document.createTextNode(message);
	  newsMsg.appendChild(newsMsgTextNode);
	
	}