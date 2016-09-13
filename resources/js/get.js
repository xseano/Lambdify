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
            ////console.log(this.responseText);
            process(parsData);
        }
    };
    xhttp.open(reqMethod, linkAroni, asyncAroni);
    xhttp.send();
}

function process(parsedData) {
        var data = parsedData;
        ////console.log(data);
        /*
        if (JSON.stringify(data).startsWith("[")) {
                var da = data;
                ////console.log(da);
                var dataLength = da.length;
                for (i = 0; i < dataLength; i++) {
                        var nex = da[i];
                        ////console.log(nex);
                }
                var fieldName = Object.getOwnPropertyNames(nex);
                ////console.log(fieldName);
                var fieldLength = fieldName.length;
                var i;
                var j;
                var k;
                var y;
                var htmlOutput = "<thead><tr>";
                var userName = fieldName[4];
                var todoPos = fieldName[2];
                document.getElementById("dataTable").className =
                        "table table-striped";
                htmlOutput += "<th>#<\/th>";
                for (k = 2; k < fieldName.length; k += 2) {
                        var fieldnam = fieldName[k];
                        htmlOutput += "<th>" + fieldnam + "<\/th>";
                }
                htmlOutput += "<\/tr><\/thead><tbody>";
                for (i = 0; i < dataLength; i++) {
                        var nex = data[i];
                        var num = 0;
                        num++;
                        htmlOutput += "<tr><td>" + num + "</td>";
                        for (j = 2; j < fieldName.length; j += 2) {
                                var fieldn = fieldName[j];
                                if (fieldn == "todos") {
                                        for (y = 0; y < nex[fieldn].length; y++) {
                                                var todos = nex[fieldn][y].todo;
                                                var to = nex[fieldn][y];
                                                var todoLength = todos.length;
                                                htmlOutput += "<td>" + todos + "</td>";
                                        }
                                } else {
                                        htmlOutput += "<td>" + nex[fieldn] + "</td>";
                                }
                                ////console.log(nex[fieldn]);
                        }
                        htmlOutput += "</tr>";
                }
                htmlOutput += "<\/tbody>";
                
                 document.getElementById("success").className =
                 "alert alert-success fade in";
                 document.getElementById('success').innerHTML =
                 "<strong>Success!</strong>";

                 document.getElementById("dataTable").innerHTML = htmlOutput;
                 } else if (JSON.stringify(data).startsWith("{")) {
                        */
        var da = [data];
        console.log(da[0]);
        var dataLength = da.length;
        for (i = 0; i < dataLength; i++) {
            var nex = da[i];
            ////console.log(nex);
        }
        // var todoObjects = nex.todos;
        //var parsTodoObjects = JSON.parse(todoObjects);
        var fieldName = Object.getOwnPropertyNames(nex);
        ////console.log(fieldName);
        var fieldLength = fieldName.length;
        var i;
        var j;
        var k;
        var y;
        var todoListNames = Object.keys(data).filter(function (nameee) {
            return nameee.indexOf("todos") === 0;
        });
        var todoListNameLength = todoListNames.length;
        ////console.log(todoListNames.length);
        var htmlOutput = "<thead><tr>";
        var userName = fieldName[4];
        var todoPos = fieldName[2];
        var firstListObject = nex.todos_list2[0];
        ////console.log(firstListObject);
        //////console.log(Object.getOwnPropertyNames(firstListObject));
        var todoPropNames = todoListNames;
        ////console.log(todoPropNames);
        
        var todoPropNamesLen = todoListNameLength;
        ////console.log(todoPropNames);
        var todoListHeader = Object.getOwnPropertyNames(firstListObject);
        
        var todoListHeaderLength = todoListHeader.length;
        ////console.log(todoListHeaderLength);
        for (k = 0; k < todoListHeaderLength; k++) {
            var fieldNamRaw = todoListHeader[k];
            var fieldnam = switchFieldName(fieldNamRaw);
            ////console.log(fieldnam);
            htmlOutput += "<th>" + fieldnam + "<\/th>";
        }
        
        htmlOutput += "<\/tr><\/thead><tbody>";
        for (i = 0; i < dataLength; i++) {
            var nex = da[i];
            ////console.log(nex);
            var num = 0;
            htmlOutput += "<tr>";
            for (j = 0; j < todoPropNamesLen; j++) {
                var fieldn = todoPropNames[j];
               // //console.log(fieldn);
                num++;
                //var fieldnr = fieldn.split("todos_");
                //var fieldn = fieldnr[j];
                console.log(fieldn);
                createTabz(fieldn, todoPropNamesLen, nex, htmlOutput, fieldnam);
                var o;
            }
        }
}

        function createTabz(chos, todoPropNamesLen, nex, htmlOutput, fieldnam) {
            for (y = 0; y < todoPropNamesLen; y++) {
                var nexAroni = nex[chos][y];
                //console.log(chos);
                var todos = nexAroni.descrp;
                var todoID = nexAroni.id;
                var todoTitle = nexAroni.title;
                ////console.log(nexAroni);
                var to = nexAroni;
                //var todoLength = todos.length;
                htmlOutput += "<td>" + todoID + "</td><td>" + todoTitle + "</td><td>" +
                    todos + "</td></tr>";
            }
            
            if (chos.startsWith("todos_")) {
                chos = chos.split("todos_").join('');
            }
            htmlOutput += "<\/tbody>";
            var list = document.createElement("li");
            var htmll = "<a>";
            var addStuff = document.createTextNode(htmll);
            var something = document.getElementById("tabHTML");
            ////console.log(something.appendChild(list));
            something.appendChild(list);
            var ranNum = Math.floor((Math.random() * 31231) + 12312);
            list.id = ranNum;
            var aaa = document.createElement("a");
            var text = document.createTextNode(chos);
            aaa.appendChild(text);
            var somethingg = document.getElementById(list.id);
            somethingg.appendChild(aaa);
            aaa.id = ranNum - (ranNum / 2 + 56);
            var yu = chos;
            document.getElementById(aaa.id).setAttribute("onclick",
                "openCity(event, '" + yu + "')");
            aaa.className = "tablinks";
            htmll += aaa;
            htmll += "</a>";
            creatTablez(yu, htmlOutput);
        }

        function creatTablez(namee, iun) {
            var para = document.createElement("div");
            var htmll = "<table>";
            var node = document.createTextNode(htmll);
            var element = document.getElementById("l");
            ////console.log(element.appendChild(para));
            var ranNum = Math.floor((Math.random() * 3112231) + 5673512);
            element.appendChild(para);
            para.id = namee;
            para.className = "tabcontent";
            var aaa = document.createElement("table");
            var node123 = document.createTextNode("");
            aaa.appendChild(node123);
            var element2 = document.getElementById(para.id);
            element2.appendChild(aaa);
            aaa.id = namee + ranNum;
            aaa.className = "table table-striped";
            htmll += aaa;
            htmll += "</table>";
            aaa.innerHTML = iun;
        }

        function myCreateFunction() {
            var table = document.getElementById("dataTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "NEW CELL1";
            cell2.innerHTML = "NEW CELL2";
        }

        function POST() {
            var newTodo = document.getElementById('newTodo').value;
            if ((newTodo == "")) {
                document.getElementById("error").className = "alert alert-danger";
                document.getElementById("send").setAttribute("type", "button");
                document.getElementById('error').innerHTML =
                    "<strong>Stop!<\/strong> You must fill all fields with values, no blanks!";
                refresh(1000);
            } else {
                var xhttp = new XMLHttpRequest();
                var link = "http://localhost:3000/users/hhhhadjklsajkdlaskjd"; //connect user id
                var reqMethod = "POST";
                var async = true;
                var data = {
                    test: newTodo
                };
                var string = JSON.stringify(data);
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        ////console.log(xhttp.responseText);
                    }
                };
                xhttp.open(reqMethod, link, async);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send(string);
                document.getElementById("success").className = "alert alert-success";
                document.getElementById("send").setAttribute("type", "button");
                document.getElementById('success').innerHTML =
                    "<strong>Success!<\/strong> You sent the username: " + newTodo +
                    " and email: " + newTodo + "!";
            }
        }

        function refresh(timeoutPeriod) {
            refresh = setTimeout(function() {
                window.location.reload(true);
            }, timeoutPeriod);
        }

        function myDeleteFunction() {
            document.getElementById("dataTable").deleteRow(0);
        }

        function refresh(timeoutPeriod) {
            refresh = setTimeout(function() {
                window.location.reload(true);
            }, timeoutPeriod);
        }

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }
        
        function switchFieldName (fn) {
            switch (fn) {
                case "descrp":
                    fn = "Description";
                    break;
                case "title":
                    fn = "Title";
                    break;
                case "id":
                    fn = "ID";
                    break;
                default:
                    fn = "Workpl0x";
                    break;
                    
            }
            return(fn);
            
        }