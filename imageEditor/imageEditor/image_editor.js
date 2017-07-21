$(document).ready(function(){
    var effect;
    var file_name;
    $("#file").change(function(){
        file_name = document.getElementById("file").files[0].name;
        $("#image").attr('src',"assets/images/"+file_name)
    })
    $(".effects").click(function(){
        effect = $(this).html();
        $("#range").css("display","block");
    })
    $("#range").change(function(){
        var range_value = $(this).val();
        $("#image").css("-webkit-filter",effect.toLocaleLowerCase()+'('+range_value+"%"+')')
        /*$("#image").css("-webkit-filter","blur(10px)");*/
        /*console.log(effect.toLocaleLowerCase()+'('+parseInt(range_value)+"px"+')');*/
        console.log(effect.toLowerCase())
        /*console.log("Trying to change");*/
    })
})