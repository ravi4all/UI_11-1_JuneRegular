window.addEventListener("load", init);

function init(){
    song_name = document.getElementById("box_1");
    movie_name = document.getElementById("box_2");
    singer = document.getElementById("box_3");
    document.getElementById("add").addEventListener("click",add_song);
    document.getElementById("delete").addEventListener("click",delete_song);
    document.getElementById("save").addEventListener("click",save_song);
    document.getElementById("load").addEventListener("click",load_song);
}

function save_song(){
    if(window.localStorage){
        var json = JSON.stringify(song_obj.songList);
        localStorage.setItem('data',json);
    }
    else {
        console.log("Not supported")
    }
}

function load_song(){
    if(window.localStorage){
        var json = JSON.parse(localStorage.data);
        song_obj.songList = json;
        print_song()
    }
    else {
        console.log("Not supported")
    }
}

function add_song(){
    var ul = document.getElementById("item_list");
    var li = document.createElement("li");
    song_obj.add_song(song_name.value,movie_name.value,singer.value);
    li.innerHTML = song_obj.id + " " + song_name.value + " " + movie_name.value + " " + singer.value;
    ul.appendChild(li);
    li.addEventListener("click",mark_song)
}

function mark_song(){
    /*console.log(event.srcElement);*/
    event.srcElement.classList.toggle("selected");
    var current_song = event.srcElement.innerHTML.split(" ")[0];
    /*console.log(current_song);*/
    song_obj.toggle_song(current_song);
}

function delete_song(){
    song_obj.delete_song();
    print_song();
}

function print_song(){
    var ul = document.getElementById("item_list");
    ul.innerHTML = "";
    song_obj.songList.forEach(function(obj){
        var li = document.createElement("li");
        li.innerHTML = obj.id + " " + obj.name + " " + obj.movie + " " + obj.singer;
        ul.appendChild(li);
        li.addEventListener("click",mark_song);
    })
}