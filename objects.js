var playlist = {artist: "song"};

function updatePlaylist (playlist, name, title) {
  return Object.assign({}, playlist, {[name]: title})
}

function removeFromPlaylist (playlist, artistName) {
  list = playlist;
  delete list.artistName;
  return list;
}
