pair=localStorage.getItem("pair");
user=localStorage.getItem("user");
friend=localStorage.getItem("friend");
document.getElementById("disclaimer").innerHTML="Nice Game"+pair+"!!";
document.getElementById("description").innerHTML=user+" and "+friend;


function logout(){
    window.location="index.html"
    
}

function next(){
    window.location="intro.html"
    
}