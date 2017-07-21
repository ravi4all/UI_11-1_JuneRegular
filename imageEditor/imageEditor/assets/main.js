 window.addEventListener("load",init);
    function init(){
         file=document.getElementById("file");
        file.addEventListener("change",change_call);
        image=document.getElementById("image");
        range=document.getElementById("range");
        range_value=range.value;
        a_tag=document.getElementsByClassName("effects");
        for(var i=0;i<a_tag.length;++i){
            a_tag[i].addEventListener("click",effects_show);
        }
    }
    function change_call(){
        var ex=file.files;
        var src=file.files[0].name;
        console.log(ex);
        image.src="assets/images/"+src;
    }
    function effects_show(){
        range.style.display="block";
        var effect_name=event.srcElement.innerHTML;
        console.log(range_value);
        if(effect_name=="brightness"||"contrast"||"grayscale"||"invert"||"opacity"||"sepia"||"saturate"){
            image.style.filter=effect_name+'('+range_value+'%)';
        }
       if(effect_name=="blur"){
            image.style.filter=effect_name+'('+range_value+'px)';;
        }
        else if(effect_name=="none")
        {
             image.style.filter=effect_name;
        }
    }