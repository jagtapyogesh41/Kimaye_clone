function login(){
    window.location.href="login.html"
}
document.querySelector("form").addEventListener("submit",sighup)


function sighup(){
 event.preventDefault()
 var flag=true;
 if(document.querySelector("#name").value=="")
  {alert("details are incorrect")
  flag=false}
 else if(document.querySelector("#lastname").value=="") {alert("details are incorrect")
  flag=false}
 else if(document.querySelector("#email").value=="") {alert("details are incorrect")
  flag=false}
 else if(document.querySelector("#password").value=="")  {alert("details are incorrect")
  flag=false}
 
 if(flag){
    var obj={
      name:document.querySelector("#name").value,
      lastname:document.querySelector("#lastname").value,
      email:document.querySelector("#email").value,
      password:document.querySelector("#password").value
  }
  localStorage.setItem("user",JSON.stringify(obj))

  alert("CREATE ACCOUNT SUCCESSFULLY")
  window.location.href="login.html"
 }
  
}