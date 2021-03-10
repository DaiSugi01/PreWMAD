let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  printAllSongNames: function() {
    // print the names of all the songs to the console
    
    const songIDs = Object.keys(this.songs);
    if (songIDs.length > 0) {
      for (songID of songIDs) {
        console.log(this.songs[songID]["name"]);
      }
    } else {
      console.log("There is no songs yet.")
    }
  },

  printSongName: function(songID) {
    // print the name of a song when given its ID

    if (this.songs.hasOwnProperty(songID)) {
      console.log(this.songs[songID]["name"]);
    } else {
      console.log(`There is no ${songID} in yoru songs.`);
    }

  },

  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID 

    if (this.playlists.hasOwnProperty(playlistID)) {
      console.log(this.playlists[playlistID]["name"]);
    } else {
      console.log(`There is no ${playlistID} in yoru playlists.`);
    }
  },

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists 

    const playlistIDs = Object.keys(this.playlists)
    if (playlistIDs.length > 0) {
      for (playlistID of playlistIDs) {
        console.log(this.playlists[playlistID]["name"]);
      }
    } else {
      console.log("There is no playlists yet.")
    }
  },


  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given

    if (!this.playlists.hasOwnProperty(playlistID)) {
      console.log(`There is no ${playlistID} in your playlists.`);
      return false;
    }

    const songIDs = this.playlists[playlistID]["tracks"]

    if (songIDs.length > 0) {
      for (songID of songIDs) {
        console.log(this.songs[songID]["name"]);
      }
    } else {
      console.log(`There is no track in the playlist ${playlistID}.`);
    }
  },

  addSong: function(name, artist, album) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.

    const uid = this.generateUid();
    const addedSong = {
      id: uid,
      name: name,
      artist: artist,
      album: album
    };
    this.songs[uid] = addedSong;
    console.log(this.songs);
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.

    if (!this.playlists.hasOwnProperty(playlistID)) {
      console.log(`There is no ${playlistID} in your playlist.`);
      return false;
    }

    if (!this.songs.hasOwnProperty(songID)) {
      console.log(`There is no ${songID} in your songs.`);
      return false;
    }

    this.playlists[playlistID]["tracks"].push(songID);
    console.log(this.playlists[playlistID]);
  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.

    const uid = this.generateUid();
    const addedPlaylist = {
      id: uid,
      name: name,
      tracks: arrOfSongs
    };

    this.playlists[uid] = addedPlaylist;
    console.log(this.playlists[uid]);
    console.log(this.playlists[uid]["tracks"]);
  }
}


// Test for functions.

// library.printAllSongNames();
// library.printSongName("s02");
// library.printPlaylistName("p02");
// library.printAllPlaylistNames();
// library.printPlaylistSongs("p01");
// library.addSong("this is a name", "this is an artist", "this is an album");
// library.addSongToPlaylist("s03", "p02");
// library.addPlaylist("This is a new playlist!", ["s01", "s02"]);