var xhttp = new XMLHttpRequest();
        var reqMethod = "GET";
        var linkAroni = "http://localhost:3000/users/hhhhadjklsajkdlaskjd/lists";
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
                    var dataIdz = data[i].id;
                    console.log(dataIdz);
                    getTodoItems(dataIdz, dataNamez, dataLength);
                }
            }
        };
        xhttp.open(reqMethod, linkAroni, asyncAroni);
        xhttp.send();

        function getTodoClone() {
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
                        ii = i + 1;
                        getTodoItems(ii, dataNamez, dataLength);
                    }
                }
            };
            xhttp.open(reqMethod, linkAroni, asyncAroni);
            xhttp.send();
        }

        function getTodoItems(todoListID, dataNames, dataLength) {
            var xhttp = new XMLHttpRequest();
            var reqMethod = "GET";
            var linkAroni = "http://localhost:3000/lists/" + todoListID +
                "/items";
            var asyncAroni = true;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    var parsData = JSON.parse(this.responseText);
                    var unParsData = this.responseText;
                    process(parsData, dataNames, todoListID, dataLength);
                }
            };
            xhttp.open(reqMethod, linkAroni, asyncAroni);
            xhttp.send();
        }

        function process(parsedData, dataNames, numb, dataLengthi) {
            var data = parsedData;
            var da = data;
            var dataLength = parsedData.length;
            for (i = 0; i < dataLength; i++) {
                var nex = data[i];
                //            console.log(nex);
            }
            var fieldName = Object.keys(nex);
            var fieldLength = fieldName.length;
            var i;
            var j;
            var k;
            var y;
            var ranNum2 = Math.floor((Math.random() * 31223431) + 123234212);
            var ranNummy = Math.floor((Math.random() * 6666) + 88712);
            var htmlOutput = "<thead id='" + ranNum2 + "'>";
            var todoListHeader = Object.keys(fieldName);
            for (k = 0; k < fieldLength; k++) {
                var fieldNamRaw = fieldName[k];
                if ((fieldNamRaw == "id") || (fieldNamRaw == "descrp") || (
                    fieldNamRaw == "title")) {
                    var fieldnam = switchFieldName(fieldNamRaw);
                    var fieldNameCount = 0;
                    fieldNameCount++;
                    htmlOutput += "<th>" + fieldnam + "<\/th>";
                }
            }
            htmlOutput += "<th>Options<\/th>";
            htmlOutput += "</thead>";
            var num = 0;
            createTabz(nex, dataLength, nex, htmlOutput, fieldnam, dataNames,
                data, numb);
        }
        
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function createTabz(chos, lengthField, nex, htmlOutput, fieldnam, dataNames, datar, numb) {
            var ranNumb = Math.floor((Math.random() * 3112231) + 5673512);
            var ranNumb1 = Math.floor((Math.random() * ranNumb) + 633512);
            var ranNumb2 = Math.floor((Math.random() * 31122) + ranNumb1);
            var ranNumb3 = Math.floor((Math.random() * ranNumb1) + ranNumb2);
            var ranNumb4 = Math.floor((Math.random() * ranNumb) + ranNumb3);
            var ranNumb11 = Math.floor((Math.random() * 60) + 10);
            var randomNumInt = getRandomInt(ranNumb11, ranNumb1 + ranNumb4);
            htmlOutput += "<tbody id='" + ranNumb3 + "'>";
            for (y = 0; y < lengthField; y++) {
                var nexAroni = datar[y];
                var todos = nexAroni.descrp;
                var todoID = nexAroni.id;
                var todoTitle = nexAroni.title;
                var testyla = y * ranNumb11;
                var theadID = ranNumb;
                var ranny = ranNumb11+=ranNumb11;
                var rannn = ranNumb4 + y;
                var pls = randomNumInt + y;
                var listNpos = "" + numb + "-" + y + "";
                console.log(listNpos);
                var to = nexAroni;
                htmlOutput += "<tr id='" + rannn + "'><td style='color: #66ffff;'>" + y +
                "</td><td id='" + pls + "' style='color: #ff6600;'>" + todoTitle +
                "</td><td id='" + ranNumb1 + "' style='color: #00cc66;'>" + todos + "</td><td id='" + ranny + "'>" +
                "<ul class=dropdown><a aria-expanded=false aria-haspopup=true class=dropdown-toggle data-toggle=dropdown href=# role=button>Options</a><ul class=dropdown-menu style=background-color:#282924><li><input type='submit' class='btn btn-warning btn-block' onclick='editTodo(" + ranNumb1 + ", " + ranNumb2 + ", " + ranny + ", " + todoID + ", " + numb + ")' value='Edit'></input><li><input class='btn btn-danger btn-block' onclick='deleteTodo(" + ranNumb3 + ", " + rannn + ", " + todoID + ")' type='submit' value='Delete'></input></ul>";
            }
            htmlOutput += "</tbody>"
            var list = document.createElement("li");
            var htmll = "<a>";
            var addStuff = document.createTextNode(htmll);
            var something = document.getElementById("tabHTML");
            something.appendChild(list);
            var ranNum1 = Math.floor((Math.random() * 31231) + 12312);
            var ranNum = String.fromCharCode(ranNum1);
            list.id = ranNum;
            var aaa = document.createElement("a");
            var text1 = dataNames.replace(/Λ/g, " ");
            var text = document.createTextNode(text1);
            //console.log(text);
            aaa.appendChild(text);
            var somethingg = document.getElementById(list.id);
            somethingg.appendChild(aaa);
            aaa.id = String.fromCharCode(ranNum1 - (ranNum1 / 2 + 56));
            var yu = dataNames;
            var listidd = dataNames.id;
            document.getElementById(aaa.id).setAttribute("onclick",
                "openListTab(event, '" + yu + "')");
            aaa.className = "nav";
            htmll += aaa;
            htmll += "</a>";
            creatTablez(yu, numb, htmlOutput, testyla, ranNumb3);
        }
        var tableNam;

        function creatTablez(namee, listid, iun, todoID, theadID) {
            var para = document.createElement("div");
            var htmll = "<table>";
            var node = document.createTextNode(htmll);
            var element = document.getElementById("l");
            var ranNum = Math.floor((Math.random() * 3112231) + 5673512);
            var newDiv = document.createElement("div");
            newDiv.appendChild(para);
            newDiv.id = "" + namee + "Parent";
            //newDiv.className = "";
            element.appendChild(newDiv);
            para.id = namee;
            para.className = "tab-content";
            var aaa = document.createElement("table");
            var node123 = document.createTextNode("");
            aaa.appendChild(node123);
            var element2 = document.getElementById(para.id);
            element2.appendChild(aaa);
            aaa.id = namee + ranNum;
            aaa.className = "table";
            tableNam = aaa.id;
            iun.id = ranNum + 89 - 32;
            //var theadID = ranNum;
            aaa.innerHTML = iun;
            //"<tbody id='" + theadID + "'>" + iun + "</tbody>";
            htmll += aaa;
            htmll += "</table>";
            var button = document.createElement("input");
            var buttonParent = document.getElementById(para.id);
            buttonParent.appendChild(button);
            var buttonPlus = document.createTextNode("Add new todo");
            button.appendChild(buttonPlus);
            button.className = "alert alert-info";
            button.id = "addRowButton" + ranNum;
            var text1 = namee.replace(/-/g, " ");
            console.log(text1);
            document.getElementById(button.id).setAttribute("onclick",
                "createTableRow(" + theadID + ", " + todoID + ", " + text1 +
                ", " + listid + ")");
            document.getElementById(button.id).setAttribute("type", "submit");
            document.getElementById(button.id).setAttribute("value",
                "Add New Todo");
            document.getElementById(aaa.id).setAttribute("cellspacing", "0");
            document.getElementById(aaa.id).setAttribute("width", "100%");
        }

        function refresh(timeoutPeriod) {
            refresh = setTimeout(function() {
                window.location.reload(true);
            }, timeoutPeriod);
        }

        function deleteTodo(tbodyID, tableRowID, realTodoID) {
            var tbody = document.getElementById(tbodyID);
            var tbodyChildren = tbody.childNodes;
            var tbodyChildrenLength = tbodyChildren.length;
            for (var i = 0; i < tbodyChildrenLength; i++) {
                var childIDS = tbodyChildren[i].id;
                console.log(childIDS);
                if (childIDS == tableRowID) {
                    var matchingRowPos = i;
                    console.log(matchingRowPos);
                }
            }
            tbody.deleteRow(matchingRowPos);
            var xhttp = new XMLHttpRequest();
            var link = "http://localhost:3000/items/" + realTodoID;
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
            console.log("Success");
        }
        
        

        function editTodo(descrpCellID, titleCellID, optionCellid, realtodoid, listid) {
            
            
            var description = document.getElementById(descrpCellID);
            var title = document.getElementById(titleCellID);
            var option = document.getElementById(optionCellid);
            
            
            document.getElementById(description.id).setAttribute("contenteditable", "true");
            document.getElementById(title.id).setAttribute("contenteditable", "true");
            
            var dropdownString = "<input class='btn btn-success' onclick='updateCurrentTodo(" + realtodoid + ", " + title.id + ", " + description.id + ", " + listid + ", " + optionCellid + ")' name='submit' type='submit'  align='right' value='Save!'>";
            
            console.log(document.getElementById(title.id).setAttribute("contenteditable", "true"));
            console.log(document.getElementById(description.id).setAttribute("contenteditable", "true"));
            
            option.innerHTML = dropdownString;

             
            
        } 
        
        function updateCurrentTodo(idTodo, idTitle, idDescription, idList, optioncellid) {
        var xhttp = new XMLHttpRequest();
        var listid = idList;
        var uid = "hhhhadjklsajkdlaskjd";
        var userid = uid;
        var option = document.getElementById(optioncellid);
        var todoIDD = idTodo;
        var titlee = document.getElementById(idTitle).innerHTML;
        var descriptionn = document.getElementById(idDescription).innerHTML;
        var link = "http://localhost:3000/items/" + todoIDD;
        var reqMethod = "PATCH";
        var async = true;
        var testArray = {
            id: todoIDD,
            listId: listid,
            userId: uid,
            title: titlee,
            descrp: descriptionn
        };
        var testJ = JSON.stringify(testArray);
        var jointest = JSON.parse(testJ);
        var stringifiedData = JSON.stringify(testArray);
        xhttp.open(reqMethod, link, async);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(stringifiedData); 
        
        var dropdownString = "<ul class=dropdown><a aria-expanded=false aria-haspopup=true class=dropdown-toggle data-toggle=dropdown href=# role=button>Options</a><ul class=dropdown-menu style=background-color:#282924><li><a onclick=main() style=color:#006666>Edit</a><li><a onclick=main() style=color:#c00>Delete</a></ul>";  
         option.innerHTML = dropdownString;
        
        }

        function openListTab(eventType, dataNamez) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("nav");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active",
                    "");
                tablinks[i].style = ("background-color: #fff;", "");
            }
            document.getElementById(dataNamez).style.display = "block";
            eventType.currentTarget.className += " active";
            eventType.currentTarget.style = "background-color: #fff;";
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
            var divIDraw = divID;
            console.log(divIDraw);
            var text1 = (divIDraw.id).replace(/ /g, "-");
            console.log(text1);
            var testva = text1;
            var table = document.getElementById(tableID);
            var ranNum = Math.floor((Math.random() * 332231) + 566612);
            var ranNum2 = Math.floor((Math.random() * 345345) + 576512);
            var ranNum3 = Math.floor((Math.random() * ranNum) + ranNum2);
            var ranNumbb = Math.floor((Math.random() * 2342) + 324234);
            var ranNumbb1 = Math.floor((Math.random() * 2342) + ranNum3);
            var childNodes = table.childNodes;
            var childNodeLength = table.childNodes.length;
            var childNodeLengthPlus = childNodeLength++;
            console.log(childNodeLength);
            var rowCreate = document.createElement("tr");
            var rowParent = document.getElementById(tableID);
            rowParent.appendChild(rowCreate);
            var idCell = rowCreate.insertCell(0);
            idCell.id = childNodeLengthPlus;
            idCell.style = "color: #66D9EF;";
            var titleCell = rowCreate.insertCell(1);
            titleCell.id = ranNum2;
            titleCell.style = "color: #ff6600;";
            var descrpCell = rowCreate.insertCell(2);
            descrpCell.id = ranNum3;
            descrpCell.style = "color: #00cc66;";
            var optionCell = rowCreate.insertCell(3);
            optionCell.id = ranNumbb;
            document.getElementById(titleCell.id).setAttribute(
                "contenteditable", "true");
            document.getElementById(descrpCell.id).setAttribute(
                "contenteditable", "true");
            idCell.innerHTML = childNodeLengthPlus;
            titleCell.innerHTML = "Title";
            descrpCell.innerHTML = "Description";
            var listys = listID;
            console.log(testva.id);
            optionCell.innerHTML = "<input class='btn btn-success' id='send" +
                ranNumbb1 + "' name='submit' onclick='sendStuff(" + testva.id +
                ", " + idCell.id + ", " + titleCell.id + ", " + descrpCell.id +
                ", " + listys + ", " + optionCell.id + ", " + ranNumbb1 +
                ")' type='submit'  align='right' value='Save!'>";
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
            document.getElementById(aa.id).setAttribute("aria-haspopup", "true");
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
            document.getElementById(deleteLable.id).setAttribute("href", "#");
            var editLableParent = document.getElementById(editLable.id);
            editLableParent.appendChild(ii1);
            ii1.id = "ii1";
            ii1.className = "fa fa-pencil";
            var deleteLableParent = document.getElementById(deleteLable.id);
            deleteLableParent.appendChild(ii2);
            ii2.id = "ii2";
            ii2.className = "fa fa-pencil";
        }
        
        function main() {
            refresh(100);
        }

        function sendStuff(tableid, id, title, desc, listidd, optionCellID, inputID) {
            //var listName = tableid.id;
            var ranNum = Math.floor((Math.random() * 3112231) + 5673512) + id;
            var ranNum1 = Math.floor((Math.random() * ranNum) + ranNum + 6);
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
            var dropdownString =
                "<ul class=dropdown><a aria-expanded=false aria-haspopup=true class=dropdown-toggle data-toggle=dropdown href=# role=button>Options</a><ul class=dropdown-menu style=background-color:#282924><li><a onclick=main() style=color:#006666>Edit</a><li><a onclick=main() style=color:#c00>Delete</a></ul>";
            var inputid = "send" + inputID;
            var inputCell = document.getElementById(inputID);
            var optionCell = document.getElementById(optionCellID);
            optionCell.innerHTML = (dropdownString);
            var userid = "hhhhadjklsajkdlaskjd";
            if (todoTitle == "") {} else {
                var xhttp = new XMLHttpRequest();
                var link = "http://localhost:3000/lists/" + listIdt + "/items";
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
                //var listNameFormat = listName;
                var stringifiedData = JSON.stringify(testArray);
                xhttp.open(reqMethod, link, async);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send(stringifiedData);
                /*
                    document.getElementById("success").className = "alert alert-success";
                    document.getElementById("send").setAttribute("type", "button");
                    document.getElementById('success').innerHTML =
                        "<strong>Success!</strong> You added a new todo with the title: " +
                        todoTitle + " and description: " + todoDesc + "!";
                        */
            }
        }

        function getListLength() {
            var xhttp = new XMLHttpRequest();
            var reqMethod = "GET";
            var linkAroni = "http://localhost:3000/lists";
            var asyncAroni = true;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    var parsData = JSON.parse(this.responseText);
                    var unParsData = this.responseText;
                    var da = parsData;
                    var data = parsData;
                    var dataLength = data.length;
                    console.log(dataLength);
                    createNewTodoList(dataLength);
                }
            };
            xhttp.open(reqMethod, linkAroni, asyncAroni);
            xhttp.send();
            //createNewTodoList(dataLength);
        }

        function createNewTodoList(listLen) {
            var ranNum = Math.floor((Math.random() * 3112231) + 5673512);
            var ranNum1 = Math.floor((Math.random() * ranNum) + ranNum + 6);
            var ranNum2 = Math.floor((Math.random() * ranNum) + ranNum1);
            var listN = listLen += 1;
            var newListName1 = document.getElementById("newListName").value;
            var newListName = newListName1.split(' ').join('Λ');
            console.log(newListName);
            //var rLength = len;
            var userid = "hhhhadjklsajkdlaskjd";
            var xhttp = new XMLHttpRequest();
            var link = "http://localhost:3000/lists";
            var reqMethod = "POST";
            var async = true;
            var testArray = {
                id: listN,
                name: newListName,
                userId: userid
            };
            var testJ = JSON.stringify(testArray);
            var jointest = JSON.parse(testJ);
            var stringifiedData = JSON.stringify(testArray);
            xhttp.open(reqMethod, link, async);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(stringifiedData);
            //refresh(55555);
            //createFirstTodoObject(listN, userid);
            getObjectsInListLength(listN, userid);
        }

        function getObjectsInListLength(listId, userID) {
            var xhttp = new XMLHttpRequest();
            var listid = listId;
            var reqMethod = "GET";
            var linkAroni = "http://localhost:3000/items";
            var asyncAroni = true;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    var parsData = JSON.parse(this.responseText);
                    var unParsData = this.responseText;
                    var da = parsData;
                    var data = parsData;
                    var dataLength = data.length;
                    console.log(dataLength);
                    createFirstTodoObject(listid, userID, dataLength);
                }
            };
            xhttp.open(reqMethod, linkAroni, asyncAroni);
            xhttp.send();
            //createNewTodoList(dataLength);
        }

        function createFirstTodoObject(listIID, uid, objectLengths) {
            var xhttp = new XMLHttpRequest();
            var listid = listIID;
            var userid = uid;
            var nextObject = objectLengths += 1;
            var link = "http://localhost:3000/lists/" + listid + "/items";
            var reqMethod = "POST";
            var async = true;
            var testArray = {
                id: nextObject,
                listId: listid,
                userId: uid,
                title: "Lambdify Title Test",
                descrp: "Lambdify Description Test"
            };
            var testJ = JSON.stringify(testArray);
            var jointest = JSON.parse(testJ);
            //var listNameFormat = listName;
            var stringifiedData = JSON.stringify(testArray);
            xhttp.open(reqMethod, link, async);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(stringifiedData);
        }