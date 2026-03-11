function addTask(){

let task=document.getElementById("task").value;

let li=document.createElement("li");

li.innerHTML = task + " <button onclick='removeTask(this)'>Delete</button>";

li.onclick=function(){
li.classList.toggle("completed");
}

document.getElementById("list").appendChild(li);

document.getElementById("task").value="";

}

function removeTask(btn){
btn.parentElement.remove();
}