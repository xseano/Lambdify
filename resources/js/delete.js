function DELETE() {
	var xhttp = new XMLHttpRequest();
	var dataChosen = document.getElementById('dataChosen').value;
	if (dataChosen == "") {
		document.getElementById("error").className = "alert alert-danger";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('error').innerHTML = "<strong>Stop!</strong> You must fill all fields with values, no blanks!";
		refresh(1000);
	} else {
		var link = dataChosen;
		var reqMethod = "DELETE";
		var async = true;
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log(xhttp.responseText);
			}
		}
		xhttp.open(reqMethod, link, async);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send();
		document.getElementById("success").className = "alert alert-success";
		document.getElementById("send").setAttribute("type", "button");
		document.getElementById('success').innerHTML = "<strong>Success!</strong> You deleted the data under the link: " + dataChosen + "!";
		refresh(2400);
	}
}

function refresh(timeoutPeriod) {
	refresh = setTimeout(function() {
		window.location.reload(true);
	}, timeoutPeriod);
}