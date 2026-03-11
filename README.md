# Ex03 To-Do List using JavaScript
## Date:11-03-2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
```
index.html:
<!DOCTYPE html>
<html>
<head>
<title>Todo App</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h2>Todo List</h2>

<input type="text" id="task">
<button onclick="addTask()">Add</button>

<ul id="list"></ul>

<footer>
HARISHBALA J - 212224223002
</footer>

<script src="script.js"></script>

</body>
</html>C

```
```
script.js:
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

```
```
style.css:
body{
font-family: Arial;
text-align:center;
}

li{
margin:10px;
}

.completed{
text-decoration: line-through;
color:gray;
}

```

## OUTPUT
![alt text](<Screenshot 2026-03-11 160941.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
