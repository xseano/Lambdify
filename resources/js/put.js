function PUT() {
	var xhttp = new XMLHttpRequest();
	var link = document.getElementById('linkChosen').value;
	var update1 = document.getElementById('update1').value;
	var update2 = document.getElementById('update2').value;
	if ((update1 == "") || (update2 == "") || ((update1) == "" && (update2 == ""))) {
		document.getElementById("error").className = "alert alert-danger";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('error').innerHTML = "<strong>Stop!</strong> You must fill all fields with values, no blanks!";
		refresh(1000);
	} else {
		var reqMethod = "PUT";
		var async = true;
		var data = {
			name: update1,
			email: update2
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
		document.getElementById('success').innerHTML = "<strong>Success!</strong> You updated the username to: " + update1 + " and email to: " + update2 + "!";
		refresh(2400);
	}
}

function refresh(timeoutPeriod) {
	refresh = setTimeout(function() {
		window.location.reload(true);
	}, timeoutPeriod);
}