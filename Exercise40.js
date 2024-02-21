//Topic: Album

// Define the make_album function
function make_album(artist, title, tracks) {
    var album = {
        "artist": artist,
        "title": title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}

// Create BTS albums
var bts_albums = [
    make_album("BTS", "Love Yourself: Answer", 25),
    make_album("BTS", "Map of the Soul: 7", 19),
    make_album("BTS", "BE", 8)
];

// Print the information of BTS albums
for (var _i = 0, bts_albums_1 = bts_albums; _i < bts_albums_1.length; _i++) {
    var album = bts_albums_1[_i];
    console.log(album);
}
