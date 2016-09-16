function POST() {
	var listName = document.getElementById('listName').value;
	var todoTitle = document.getElementById('todoTitle').value;
	var todoDesc = document.getElementById('todoDesc').value;
	var userid = "hhhhadjklsajkdlaskjd";
	if ((listName == "") || (todoTitle == "") || ((todoTitle) == "" && (listName == ""))) {
		document.getElementById("error").className = "alert alert-danger";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('error').innerHTML = "<strong>Stop!<\/strong> You must fill all fields with values, no blanks!";
		refreshPage(1000);
	} else {
		var xhttp = new XMLHttpRequest();
		var link = "http://localhost:3000/users/" + userid + "/todos";
		var reqMethod = "POST";
		var async = true;
		var testArray = { 
			
			name: listName, userId: userid, items: [{id: 1, title: todoTitle, descrp: todoDesc}] 
		
		};
		
		var testJ = JSON.stringify(testArray);
		var jointest = JSON.parse(testJ);
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4) {
				console.log(xhttp.responseText);
			}
		}
		var listNameFormat = listName;
		

		var stringifiedData = JSON.stringify(testArray);
		xhttp.open(reqMethod, link, async);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(stringifiedData);
		document.getElementById("success").className = "alert alert-success";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('success').innerHTML = "<strong>Success!</strong> You sent the username: and email: !";

	}
}

function refreshPage(timeoutPeriod) {
	refresh = setTimeout(function() {
		window.location.reload(true);
	}, timeoutPeriod);
}

