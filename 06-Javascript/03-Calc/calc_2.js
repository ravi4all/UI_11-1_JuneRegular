window.addEventListener("load",init)

var ans = 0;

function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    result = document.getElementById("result");
    buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click",do_opr)
    }
}

function do_opr(){
    /*console.log("Executed");*/
    /*console.log(event.srcElement.innerHTML);*/

    opr = event.srcElement.innerHTML;

    /*console.log(eval(a.value+opr+ b.value))*/

    result.innerHTML = eval(a.value+opr+ b.value);

}