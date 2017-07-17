var song_obj = {
    id : 0,
    songList : [],

    add_song : function(name,movie,singer){
        this.id++;
        var obj = new Song(this.id,name,movie, singer);
        this.songList.push(obj);
        console.log(this.songList);
    },

    toggle_song : function(id){
        var new_data = this.songList.filter(function(obj){
            return obj.id == id;
        })
        new_data[0].selected = !new_data[0].selected;
        console.log(new_data)
    },

    delete_song : function(){
        this.songList = this.songList.filter(function(obj){
            return obj.selected == false;
        })
    }

}