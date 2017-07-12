window.addEventListener("load",init)

var ans = 0;

function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    result = document.getElementById("result");
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
    document.getElementById("div").addEventListener("click",div);
    document.getElementById("mul").addEventListener("click",mul);
}

function add(){
    ans = parseInt(a.value) + parseInt(b.value);
    result.innerHTML = ans;
}

function sub(){
    ans = parseInt(a.value) - parseInt(b.value);
    result.innerHTML = ans;
}

function div(){
    ans = parseInt(a.value) / parseInt(b.value);
    result.innerHTML = ans;
}

function mul(){
    ans = parseInt(a.value) * parseInt(b.value);
    result.innerHTML = ans;
}