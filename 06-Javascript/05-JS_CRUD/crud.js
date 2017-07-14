window.addEventListener("load", init);

function init(){
    song_name = document.getElementById("box_1");
    movie_name = document.getElementById("box_2");
    singer = document.getElementById("box_3");
    document.getElementById("add").addEventListener("click",add_song);
}

function add_song(){
    ul = document.getElementById("item_list");
    li = document.createElement("li");
    li.innerHTML = song_name.value + " " + movie_name.value + " " + singer.value;
    ul.appendChild(li);
    li.addEventListener("click",mark_song)
}

function mark_song(){
    /*console.log(event.srcElement);*/
    event.srcElement.classList.toggle("selected");
}

function delete_song(){

}