//Topic: Album 

// Define the make_album function

function make_album(artist: string, title: string, tracks?: number): Record<string, string | number> {
    const album: Record<string, string | number> = {
        "artist": artist,
        "title": title
    };

    if (tracks) {
        album["tracks"] = tracks;
    }

    return album;
}

// Create BTS albums

const bts_albums = [
    make_album("BTS", "Love Yourself: Answer", 25),
    make_album("BTS", "Map of the Soul: 7", 19),
    make_album("BTS", "BE", 8)
];

// Print the information of BTS albums

for (const album of bts_albums) {
    console.log(album);
}
