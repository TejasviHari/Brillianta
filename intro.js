user=localStorage.getItem("user");


document.getElementById("user_label").innerHTML="User name: "+user;

function logout(){
    window.location="index.html"
    
}