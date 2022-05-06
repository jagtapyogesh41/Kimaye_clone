function create(){
    window.location.href="sighup.html"
}
var data=JSON.parse(localStorage.getItem("user"))||{}
document.querySelector("form").addEventListener("submit",login)

function login(){
    var profile=document.querySelector("#mail").value
    var password=document.querySelector("#password").value

    if(profile==data.email){

        if(password==data.password)
        {
            alert("login succesful")
        }
        else
        {
            alert("wrong password / Forget your password")
        }
    }
    else
    {
        alert("Error: Incorrect email or password.")
    }
}