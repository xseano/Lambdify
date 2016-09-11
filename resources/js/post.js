function POST() {
	var listName = document.getElementById('listName').value;
	var todoTitle = document.getElementById('todoTitle').value;
	var todoDesc = document.getElementById('todoDesc').value;
	if ((listName == "") || (todoTitle == "") || ((todoTitle) == "" && (listName == ""))) {
		document.getElementById("error").className = "alert alert-danger";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('error').innerHTML = "<strong>Stop!<\/strong> You must fill all fields with values, no blanks!";
	} else {
		var xhttp = new XMLHttpRequest();
		var link = "http://localhost:3000/users/hhhhadjklsajkdlaskjd";
		var reqMethod = "POST";
		var async = true;
		var data = {
			todos:{ 
				listName:[
				
				{
					title: todoTitle, descrp: todoDesc
					
					}
				
				]
				
			}
		};
		var string = JSON.stringify(data);
		console.log(string);
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log(xhttp.responseText);
			}
		}
		xhttp.open(reqMethod, link, async);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(string);
		document.getElementById("success").className = "alert alert-success";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('success').innerHTML = "<strong>Success!<\/strong> You sent the username: and email: !";

	}
}

function refresh(timeoutPeriod) {
	refresh = setTimeout(function() {
		window.location.reload(true);
	}, timeoutPeriod);
}

