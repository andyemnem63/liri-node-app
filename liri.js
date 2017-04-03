/*Global Variables
==============================================================*/

var spotify = require('spotify');
var twitter = require('twitter');
var key = require('./key');

var userInput = process.argv[2];
var userChoice = process.argv[3];


/*Functions
==============================================================*/

function twitterData(){

    //User authentication credentials
    var client = new twitter(key.twitterKey);

    //Search parameters. Searches by userName
    //A maximum of 21 tweets can be returned
    var params = {  
                    screen_name: 'Andy_Em64',
                    count:21
                 };

    //Gets most recent tweets posted by the user indicated by the first parameter
    //Second parameter gets data from users screen name
    //Third parameter is a callback function, if credentials are valid then provide resonse else provide error
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
           
            //If there is no error...
            if (!error) {
                //Return 20 of the users most recent tweets 
                for(var i = 1; i <= 20; i++){
                  console.log('TWEET #' + i + ':');
                  console.log(tweets[i]['text']);
                  console.log('============================');
                }
            }
            //Else, display an error
            else {
              console.log(error);
            }
    });
}

function spotifyData(){

    spotify.search({type:'track', query: userChoice}, function(err, data){

            if(!err){
                var artists = data['tracks']['items'][1]['artists'][0]['name'];
                var album = data['tracks']['items'][1]['album']['name'];
                var songPreview = data['tracks']['items'][1]['external_urls']['spotify'];
                var track = data['tracks']['items'][1]['name'];
                //Testing
                // console.log(JSON.stringify(data['tracks']['items'][1]['name'] ,null, 1));
                
                console.log(artists);
                console.log(track);
                console.log(album);
                console.log(songPreview);
            }
            else{
              console.log(err);
            }
    });
}

function movieData(){

  console.log(true);
}
/*Main
==============================================================*/

switch(userInput){
     
      case "my-tweets":
          twitterData();
          break;
     
      case "spotify-this-song":
          spotifyData();
          break;
      
      case "movie-this":
        movieData();
        break;

      default:
          console.log('Error!!');
}