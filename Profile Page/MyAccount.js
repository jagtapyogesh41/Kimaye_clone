var out=JSON.parse(localStorage.getItem("user"))
console.log(out)
bag=out.name+" "+out.lastname
var username=document.querySelector(".username")
username.innerText=bag
var usernam=document.querySelector(".usernam")
usernam.innerText=bag
var use=document.querySelector(".use")
use.innerText=bag
var email=document.querySelector(".id")
email.innerText=out.email


var addout=JSON.parse(localStorage.getItem("address"))
console.log(addout)
var bag1=addout.first+" "+addout.last;
var bag2=addout.add2+","+addout.city+","+addout.state+"-"+addout.zip
document.querySelector(".use").innerText=bag1;
document.querySelector(".a1").innerText=addout.add1;
document.querySelector(".a2").innerText=bag2;
document.querySelector(".mo").innerText=addout.mob; 

