var playlist = {artist: "song"};

function updatePlaylist (list, name, title) {
  list.assign({}, {name: 'title'});
  return list
}

function removeFromPlaylist (list, name) {
  delete list.name;
  return list;
}
