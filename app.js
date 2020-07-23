
var list = document.getElementById("list")

function addTodo(){
    var items = document.getElementById("todo_items")

var li = document.createElement("li");
var liText = document.createElement("LABEL");
liText.innerHTML = items.value;

li.setAttribute("class", "listitems")
li.appendChild(liText);

var txttext=document.createElement("input")
txttext.setAttribute("type", "text");
txttext.setAttribute("value", items.value);
txttext.setAttribute("style", "display:none;");
txttext.setAttribute("class", "input2")
li.appendChild(txttext);

var delBtn = document.createElement("button")
var delText = document.createTextNode("Delete Item")
delBtn.appendChild(delText)
delBtn.setAttribute("onclick", "deleteItem(this)")
delBtn.setAttribute("class", "btn")
li.appendChild(delBtn)

var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick", "EditItem(this)")
editBtn.setAttribute("class", "btn")
li.appendChild(editBtn)

    list.appendChild(li)
    todo_items.value = ""

}

function deleteItem(e){
    e.parentNode.remove();
}

function dltAll(){
    list.innerHTML = ""
}

function EditItem(e){
        e.parentNode.firstChild.nodeValue = " "
        var x = e.parentElement.firstChild;
        var a=e.parentElement.firstChild.nextSibling;
        if (x.style.display === "none") {
            x.style.display = "inline";
            e.innerText="Edit";
          } else {
            x.style.display = "none";
            e.innerText="Update";
          }

          if (a.style.display === "none") {
            a.style.display = "inline";
          } else {
            a.style.display = "none";
            x.innerHTML=a.value;
            
          }

}