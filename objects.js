var playlist = {artist: "song"};

function updatePlaylist (playlist, name, title) {
  playlist.assign({}, {name: 'title'});
  return playlist
}

function removeFromPlaylist (playlist, name) {
  delete playlist.name;
  return playlist;
}
