function checkPin() {
  const pinInput=document.getElementById("pin").value;
  if(pinInput==="121") {
    location.href="page2.html";
  } else {
    alert("Incorrect PIN 😔");
  }
}

function saveName() {
  const name=document.getElementById("name").value.trim();
  if(!name) {
    alert("Enter your name 💛"); return;
  }
  localStorage.setItem("bfName",name);
  location.href="page3.html";
}

function loadName(){
  document.getElementById("greetName").innerText=localStorage.getItem("bfName");
}

function toggleTask(el){
  el.classList.toggle("done");
}
