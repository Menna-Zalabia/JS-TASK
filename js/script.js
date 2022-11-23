var btn = document.querySelectorAll(".item #addToCart")
var content = document.querySelector(".content")
var allproduct = document.querySelector(".pro")
var btn1=document.querySelector("#btn1")
var totalPrice = 0 ;
var products="";

btn.forEach( function (item){
    item.onclick = function (){
        products= item.getAttribute("name")
        allproduct.innerHTML += products+"<br>";
        totalPrice += parseFloat(item.getAttribute("price"))
        content.innerHTML ="The Price "+"= "+totalPrice + " EGP ";
        if(content.innerHTML !=0){
            btn1.style.visibility="visible";
        }
    }
})
btn1.onclick=function(){
    alert("The Payment completed successfully :)")
}

