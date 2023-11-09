function createSong(name, artist, favorite){
  return{
    name: name, 
    artist: artist,
    favorite: favorite || false,
    hasBeenPlayed: false,
  }
}

function playSong(song){
  song.hasBeenPlayed = true
  return song
}

function makePlaylist(name, songs){
  var playList = {
    name: name, 
    songs: songs,
  }
  return playList
}

function addSongToPlaylist(playlist, songs){
  playlist.songs.push(songs)
  return playlist
}

function playSongs(playlist, favorites){
  for( i = 0; i < playlist.songs.length; i++){
    if(!favorites){
      playlist.songs[i].hasBeenPlayed = true;
    }
    else if(playlist.songs[i].favorite === true){
      playlist.songs[i].hasBeenPlayed = true
      
    }
  }
  return playlist
}
module.exports = { 
   createSong, 
   playSong, 
   makePlaylist, 
   addSongToPlaylist, 
   playSongs
};
