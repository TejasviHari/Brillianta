user=localStorage.getItem("user");


document.getElementById("user_label").innerHTML="User name: "+user;

function logout(){
    window.location="index.html"
    
}


function english(){
    chosen_course="English"
    localStorage.setItem("course",chosen_course);
    window.location="game_page.html"
}