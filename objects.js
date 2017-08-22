var playlist = {artist: "song"};

function updatePlaylist (playlist, name, title) {
  return Object.assign({}, playlist, {[name]: value})
}

function removeFromPlaylist (playlist, name) {
  delete playlist.name;
  return playlist;
}
