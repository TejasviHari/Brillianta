 

function login(){
 pair=document.getElementById("pair_name").value;
 friend=document.getElementById("friend_name").value;
 user_name=document.getElementById("name").value;
localStorage.setItem("pair",pair);
localStorage.setItem("friend",friend);
localStorage.setItem("user",user_name);
window.location="intro.html";
}