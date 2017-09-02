![Build status](https://travis-ci.org/adoolaeghe/music-safari.svg?branch=master)

# Music Safari
A web app that uses Spotify's and Google's api to share music based on your current location.
The app uses Javascript, Jquery, Node.js, Firebase and was tested using Jasmine.
#### Visit [Music Safari](https://music-safari.herokuapp.com/)

# Setup
- Clone the repo
- Install [node.js](https://nodejs.org/en/)
- Run ```npm install``` to install the app's dependencies
- To start the server run ```node app.js```
- Visit localhost:8888 in your broswer

## Technologies Used
[Firebase Realtime Database](https://firebase.google.com/docs/database/web/start)
- Used to store tracks and their locations.

[Google API](https://developers.google.com/maps/documentation/javascript/tutorial)
- Used to get location of the user and allow a user to tag their music of choice to their location.

[Spotify API](https://developer.spotify.com/web-api/)
- Used to authenticate a user and search songs to be added to the map.

## Screenshots

 - Homepage

![Imgur](http://i.imgur.com/wmEUhjk.png)

- Login page

![Imgur](https://i.imgur.com/lGvVTaw.png)

- Songs added by others to the map

![Imgur](http://i.imgur.com/3pqsIFq.png)

- Search for a song

![Imgur](http://i.imgur.com/6FTVDce.png)

 - Add it to the map

![Imgur](https://i.imgur.com/PnTtxqS.png)

# Contributors
 - [Annalaise Gibbons](https://github.com/annalaise)
 - [Antoine Doolaeghe](https://github.com/adoolaeghe)
 - [Funmi Adewodu](https://github.com/funmia)
 - [James Ransome](https://github.com/jransome)

# Further Implementation
- Add functionality to delete a song from the map
- Ability to generate playlists by picking songs from different locations
- Allow users to add a caption before adding a song to the map.
