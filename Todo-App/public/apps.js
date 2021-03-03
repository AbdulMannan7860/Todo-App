var mainList = document.getElementById("mainList");
var TodoInp = document.getElementById("inp");



function addTodo() {
  var inputText = TodoInp.value;
  var text = document.createTextNode(inputText);
  var li = document.createElement("li");
  mainList.appendChild (li);
  li.setAttribute("class", "list");
  li.appendChild(text);
  console.log(li);
  TodoInp.value = " ";

  var btnDiv = document.createElement("div");
  //===Create Delete Button===
  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn");
  deleteBtn.setAttribute("onClick", "deleteTodo(this)");
  var deleteBtnText = "Delete Todo";
  var deleteText = document.createTextNode(deleteBtnText);
  deleteBtn.appendChild(deleteText);
  btnDiv.appendChild(deleteBtn);
  //===Create Edit Button==
  var editBtn =document.createElement('button')
  editBtn.setAttribute('class','btn' )
  editBtn.setAttribute('onClick','editTodo(this)' )
  var editText =document.createTextNode('Edit Todo')
  editBtn.appendChild(editText)
  btnDiv.appendChild(editBtn)








}


function deleteTodo(e){
    e.parentNode.parentNode.remove
}
function editTodo(e){
    var pop = prompt('Enter Text')
    var listText = e.parentNode.parentNode.fristChild.nodeValue = 'Apna Text'
    listText.nodeValue  = pop
}

function deleteAll(){
    mainList.innerHTML = " "
}