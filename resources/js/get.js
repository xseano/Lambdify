var xhttp = new XMLHttpRequest();
        var reqMethod = "GET";
        var linkAroni =
            "http://localhost:3000/users/hhhhadjklsajkdlaskjd/lists";
        var asyncAroni = true;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                var parsData = JSON.parse(this.responseText);
                var unParsData = this.responseText;
                var da = parsData;
                var data = parsData;
                var dataLength = data.length;
                for (var i = 0; i < dataLength; i++) {
                    var dataNamez = data[i].name;
                    ii = i+1;
                    getTodoItems(ii, dataNamez, dataLength);
                    //console.log(data);
                    
                }
            }

            
        };
        
        xhttp.open(reqMethod, linkAroni, asyncAroni);
        xhttp.send();
        
        function getTodoItems(todoListID, dataNames, dataLength) {
            var xhttp = new XMLHttpRequest();
            var reqMethod = "GET";
            var linkAroni = "http://localhost:3000/lists/" + todoListID + "/items";
            //console.log(todoListID);
            var asyncAroni = true;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    var parsData = JSON.parse(this.responseText);
                    var unParsData = this.responseText;
                    //console.log(parsData);
                    process(parsData, dataNames, todoListID, dataLength);
                }
                    
                
            };
            xhttp.open(reqMethod, linkAroni, asyncAroni);
            xhttp.send();
        }

        function process(parsedData, dataNames, numb, dataLengthi) {
            var data = parsedData;
            var da = data;
            //console.log(parsedData);
            var dataLength = parsedData.length;
            for (i = 0; i < dataLength; i++) {
                var nex = data[i];
                console.log(nex);
                
               //var fieldName = Object.keys(nex);
                
            }
            console.log(data.length);
            
                var fieldName = Object.keys(nex);
            //var fieldName = Object.keys(nex);
            //console.log(fieldName);
            
            
            /*
            var todoListNames = Object.keys(nex).filter(function(nameee) {
                return nameee.indexOf("name") === 0;
            });
            */
            var fieldLength = fieldName.length;
            var i;
            var j;
            var k;
            var y;
           // var todoListNameLength = todoListNames.length;
            var ranNum2 = Math.floor((Math.random() * 31223431) + 123234212);
            var ranNummy = Math.floor((Math.random() * 6666) + 88712)
            var htmlOutput = "<tr id='" + ranNum2 + "'>";
            //var todoPropNames = todoListNames;
            //var todoPropNamesLen = todoListNameLength;
            var todoListHeader = Object.keys(fieldName);
            //var todoListHeaderLength = todoListHeader.length;
            for (k = 0; k < fieldLength; k++) {
                var fieldNamRaw = fieldName[k];
                
                if ((fieldNamRaw == "id") || (fieldNamRaw == "descrp") || (fieldNamRaw == "title")) {
                var fieldnam = switchFieldName(fieldNamRaw);
                var fieldNameCount = 0;
                fieldNameCount++;
                //console.log(fieldNamRaw);
                htmlOutput += "<th>" + fieldnam + "<\/th>";
                
                }
            }
            htmlOutput += "<th>Options<\/th>";
            htmlOutput += "<\/thead></tr>";
           // for (j = 0; j < dataLength; j++) {
                var num = 0;
                //var nex = data[j];
                //console.log(todoListHeader);
                createTabz(nex, dataLength, nex, htmlOutput, fieldnam, dataNames, data, numb);
                
            //}
        }
        
        

        function createTabz(chos, lengthField, nex, htmlOutput, fieldnam, dataNames, datar, numb) {
           for (y = 0; y < lengthField; y++) {
                var nexAroni = datar[y];
                var todos = nexAroni.descrp;
                var todoID = nexAroni.id;
                var todoTitle = nexAroni.title;
                console.log(nexAroni);
                var to = nexAroni;
                htmlOutput += "<td>" + todoID +
                    "</td><td contenteditable='true'>" + todoTitle +
                    "</td><td contenteditable='true'>" + todos +
                    "</td><td><input class='btn btn-default' id='send' name='submit' onclick='POST()' type='submit' value='Create!'></td></tr>";
            }
            //htmlOutput += "</tbody>";
            var list = document.createElement("li");
            var htmll = "<a>";
            var addStuff = document.createTextNode(htmll);
            var something = document.getElementById("tabHTML");
            something.appendChild(list);
            var ranNum1 = Math.floor((Math.random() * 31231) + 12312);
            var ranNum = String.fromCharCode(ranNum1);
            list.id = ranNum;
            var aaa = document.createElement("a");
            var text = document.createTextNode(dataNames);
            aaa.appendChild(text);
            var somethingg = document.getElementById(list.id);
            somethingg.appendChild(aaa);
            aaa.id = String.fromCharCode(ranNum1 - (ranNum1 / 2 + 56));
            var yu = dataNames;
            var listidd = dataNames.id;
            document.getElementById(aaa.id).setAttribute("onclick",
                "openCity(event, '" + yu + "')");
            aaa.className = "tablinks";
            htmll += aaa;
            htmll += "</a>";
            creatTablez(yu, numb, htmlOutput, todoID);
        }
        var tableNam;

        function creatTablez(namee, listid, iun, todoID) {
            var para = document.createElement("div");
            var htmll = "<table>";
            var node = document.createTextNode(htmll);
            var element = document.getElementById("l");
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
            tableNam = aaa.id;
            iun.id = ranNum + 89 - 32;
            var theadID = ranNum;
            aaa.innerHTML = "<tbody id='" + theadID + "'>" + iun + "</tbody>";
            var button = document.createElement("button");
            var buttonParent = document.getElementById(para.id);
            buttonParent.appendChild(button);
            /*
            aaa.innerHTML += "<input class='form-control' id='titleNew' name='titleNew' placeholder='Title' type='text'>";
            aaa.innerHTML += "<input class='form-control' id='descriNew' name='descriNew' placeholder='Description' type='text'>";
            */
            
            var buttonPlus = document.createTextNode("Add new todo");
            button.appendChild(buttonPlus);
            button.id = "addRowButton" + ranNum;
            document.getElementById(button.id).setAttribute("onclick",
                "createTableRow(" + theadID + ", " + todoID + ", " + namee + ", " + listid + ")");
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
                tablinks[i].className = tablinks[i].className.replace(
                    " active", "");
            }
            
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        function switchFieldName(fn) {
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
                    fn = "Error";
                    break;
            }
            return (fn);
        }

        function createTableRow(tableID, todoID, divID, listID) {
            var table = document.getElementById(tableID);
            var ranNum = Math.floor((Math.random() * 332231) + 566612);
            var ranNum2 = Math.floor((Math.random() * 345345) + 576512);
            var ranNum3 = Math.floor((Math.random() * ranNum) + ranNum2);
            var childNodes = table.childNodes;
            var childNodeLength = table.childNodes.length;
            //console.log(childNodes);
            var childNodeLengthPlus = childNodeLength++;
            var rowCreate = document.createElement("tr");
            var rowParent = document.getElementById(tableID);
            rowParent.appendChild(rowCreate);
            var idCell = rowCreate.insertCell(0);
            idCell.id = childNodeLengthPlus;
            var titleCell = rowCreate.insertCell(1);
            titleCell.id = ranNum2;
            var descrpCell = rowCreate.insertCell(2);
            descrpCell.id = ranNum3;
            var optionCell = rowCreate.insertCell(3);
            optionCell.id = ranNum3;
            document.getElementById(titleCell.id).setAttribute(
                "contenteditable", "true");
            document.getElementById(descrpCell.id).setAttribute(
                "contenteditable", "true");
            idCell.innerHTML = childNodeLengthPlus;
            titleCell.innerHTML = "Title";
            descrpCell.innerHTML = "Description";
            var testva = divID;
            var listys = listID;
            console.log(listID);
            optionCell.innerHTML = "<input class='btn btn-default' id='send' name='submit' onclick='sendStuff(" + testva.id + ", " + idCell.id + ", " +titleCell.id+", " + descrpCell.id + ", " + listys + ")' type='submit' value='Save!'>";
            
        }

        function iterateNum(htmlOutput) {
            htmlOutput += "<tbody id='";
            for (var r = 0; r < 1; r++) {
                var ranNum = Math.floor((Math.random() * 3112231) + 5673512);
                var out = ranNum;
                htmlOutput += out;
            }
            htmlOutput += "'>";
            return (htmlOutput);
        }

        function createOptionDropdown() {
            var list0 = document.createElement("li");
            list0.className = "dropdown";
            list0.id = "list0";
            var aa = document.createElement("a");
            var ii = document.createElement("i");
            var ii1 = document.createElement("i");
            var ii2 = document.createElement("i");
            var ul0 = document.createElement("ul");
            var editList = document.createElement("li");
            var editLable = document.createElement("a");
            var deleteList = document.createElement("li");
            var deleteLable = document.createElement("a");
            var parentList = document.getElementById(list0.id);
            aa.id = "aa1";
            aa.className = "dropdown-toggle";
            parentList.appendChild(aa);
            var parentListAA = document.getElementById(aa.id);
            document.getElementById(aa.id).setAttribute("aria-expanded",
              "false");
            document.getElementById(aa.id).setAttribute("aria-haspopup",
              "true");
            document.getElementById(aa.id).setAttribute("data-toggle",
              "dropdown");
            document.getElementById(aa.id).setAttribute("href", "#");
            document.getElementById(aa.id).setAttribute("role", "button");

            parentListAA.appendChild(ii);
            ii.id = "ii1";
            ii.className = "fa fa-user";
            parentList.appendChild(ul0);
            ul0.id = "ul00";
            ul0.className = "dropdown-menu";
            var parentListUL = document.getElementById(ul0.id);
            parentListUL.appendChild(editList);
            parentListUL.appendChild(deleteList);
            editList.id = "editList";
            deleteList.id = "deleteList";
            var editListParent = document.getElementById(editList.id);
            var deleteListParent = document.getElementById(deleteList.id);
            editListParent.appendChild(editLable);
            deleteListParent.appendChild(deleteLable);
            editLable.id = "editListLable";
            document.getElementById(editLable.id).setAttribute("href", "#");
            deleteLable.id = "deleteListLable";
            document.getElementById(deleteLable.id).setAttribute("href",
                "#");
            var editLableParent = document.getElementById(editLable.id);
            editLableParent.appendChild(ii1);
            ii1.id = "ii1";
            ii1.className = "fa fa-pencil";
            var deleteLableParent = document.getElementById(deleteLable.id);
            deleteLableParent.appendChild(ii2);
            ii2.id = "ii2";
            ii2.className = "fa fa-pencil";
            /*

          <li class="dropdown">
            <a aria-expanded="false" aria-haspopup="true" class=
            "dropdown-toggle" data-toggle="dropdown" href="#" role=
            "button">
            <i class="fa fa-user"></i> 
            Links</a>
            
            <ul class="dropdown-menu">
              <li>
                <a href="documentation.html">
                <i class=
                "fa fa-camera"></i> Documentation</a>
              </li>
              <li>
                <a href="{githubRepoLink}"><i class=
                "fa fa-pencil"></i> Github Repository</a>
              </li>
              <li>
                <a href="index.html"><i class="fa fa-home"></i>
                Home</a>
              </li>
            </ul>
          </li>
          */
        }
        function sendStuff(tableid, id, title, desc, listidd) {
          var listName = tableid.id;
          var ranNum = Math.floor((Math.random() * 3112231) + 5673512) + id;
          var ranNum1 = Math.floor((Math.random() * ranNum) + ranNum+6);
          var ranNum2 = Math.floor((Math.random() * ranNum) + ranNum1);
          var todoid = ranNum2;
          var listIdt = listidd;
          var todoTitle = document.getElementById(title).innerHTML;
          var todoDesc = document.getElementById(desc).innerHTML;
        console.log(title);
        console.log(todoTitle);
        console.log(desc);
        console.log(todoDesc);
        console.log(listIdt);
          var userid = "hhhhadjklsajkdlaskjd";
          if ((listName == "") || (todoTitle == "") || ((todoTitle) == "" && (listName == ""))) {
            //refreshPage(1000);
          } else {
            var xhttp = new XMLHttpRequest();
            var link = "http://localhost:3000/lists/1/items";
            var reqMethod = "POST";
            var async = true;
            var testArray = { 
                
                id: todoid,
                listId: listIdt,
                userId: userid,
                title: todoTitle,
                descrp: todoDesc
            
            };
            
            var testJ = JSON.stringify(testArray);
            var jointest = JSON.parse(testJ);
            xhttp.onreadystatechange = function() {
              if (xhttp.readyState == 4) {
                //console.log(xhttp.responseText);
              }
            }
            var listNameFormat = listName;
            

            var stringifiedData = JSON.stringify(testArray);
            xhttp.open(reqMethod, link, async);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(stringifiedData);
           
          }
        }