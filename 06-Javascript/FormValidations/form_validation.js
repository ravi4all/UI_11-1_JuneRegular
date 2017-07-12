span = document.getElementsByTagName("span")

function blank_check(){
    a = document.getElementById("box_1");
    if(a.value.length == 0){
        span[0].innerHTML = "You cannot leave this field blank";
    }
    else {
        span[0].innerHTML = "";
    }
}

function strength_check(){
    pwd_box = document.getElementById("box_2");

    if(pwd_box.value.length == 0){
        span[1].innerHTML = "Fill this first";
        span[1].className = "";
    }
    else if(pwd_box.value.length >0 && pwd_box.value.length <=4) {
        span[1].innerHTML = "Weak";
        span[1].className = "red";
    }
    else if(pwd_box.value.length >4 && pwd_box.value.length <=8) {
        span[1].innerHTML = "Average";
        span[1].className = "yellow";
    }
    else if(pwd_box.value.length >8) {
        span[1].innerHTML = "Strong";
        span[1].className = "green";
    }
    else {
        span[1].innerHTML = "";
        span[1].className = ""
    }

}

function conf_pwd(){
    conf_box = document.getElementById("box_3");

    if(pwd_box.value == conf_box.value){
        span[2].innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    }
    else {
        span[2].innerHTML = "Password do not match";
    }
}