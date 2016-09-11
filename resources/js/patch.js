function namePATCH() {
	var xhttp = new XMLHttpRequest();
	var link = document.getElementById('patchLink').value;
	var updateName = document.getElementById('nameChange').value;
	if ((link == "") || (updateName == "") || ((link) == "" && (updateName == ""))) {
		document.getElementById("error").className = "alert alert-danger";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('error').innerHTML = "<strong>Stop!</strong> You must fill the link and name fields with values, no blanks!";
		refresh(1000);
	} else {
		var reqMethod = "PATCH";
		var async = true;
		var data = {
			name: updateName
		};
		var string = JSON.stringify(data);
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
		document.getElementById('success').innerHTML = "<strong>Success!</strong> You updated the username to: " + updateName + " !";
		refresh(2400);
	}
}

function emailPATCH() {
	var xhttp = new XMLHttpRequest();
	var link = document.getElementById('patchLink').value;
	var updateEmail = document.getElementById('emailChange').value;
	if ((link == "") || (updateEmail == "") || ((link) == "" && (updateEmail == ""))) {
		document.getElementById("error").className = "alert alert-danger";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('error').innerHTML = "<strong>Stop!</strong> You must fill the link and email fields with values, no blanks!";
		refresh(1000);
	} else {
		var reqMethod = "PATCH";
		var async = true;
		var data = {
			email: updateEmail
		};
		var string = JSON.stringify(data);
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
		document.getElementById('success').innerHTML = "<strong>Success!</strong> You updated the email to: " + updateEmail + " !";
		refresh(2400);
	}
}

function refresh(timeoutPeriod) {
	refresh = setTimeout(function() {
		window.location.reload(true);
	}, timeoutPeriod);
}