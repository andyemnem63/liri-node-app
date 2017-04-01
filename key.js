console.log('this is loaded');
//Loads the twitter module
var twitter = require('twitter');

//User authentication credentials
var client = new twitter({
  consumer_key: 'THYjJYwnWcZsiOSD0nUntii81',
  consumer_secret: 'IMjkuBQMWDYDatWboq6KbfJwroxi4cFy7uE8N9CpDpwrx8n2Js',
  access_token_key: '2984519260-JstAvQXD5yA7ByT1izPBW3vqksDYgDCq97shIDk',
  access_token_secret: 'GNU9xDgYL5woQzuUaCUKgDQgpNwvQ0AYzrGXiEtEGp8kF'
});

//Search parameters. Searches by userName
//A maximum of 21 tweets can be returned
var params = {screen_name: 'Andy_Em64',
              count:21
            };

//Gets most recent tweets posted by the user indicated by the first parameter
//Second parameter gets data from users screen name
//Third parameter is a callback function, if credentials are valid then provide resonse else provide error
exports.twitter = client.get('statuses/user_timeline', params, function(error, tweets, response) {
       
        //If there is no error
        if (!error) {
            //Return 20 of the users most recent tweets 
            for(var i = 1; i <= 20; i++){
              console.log('============================');
              console.log('TWEET number ' + i);
              console.log(tweets[i]['text']);
              console.log('============================');
            }
        }
        //Else, display an error
        else {
          console.log(error);
        }
});

//Spotify
//=================================================================================
var spotify = require('spotify');

spotify.search({type:'track', query: 'I want it that way'}, function(err, data){
        if(!err){
            console.log(data['tracks']['items'][0]['album']['artists']);
        }
        else{
          console.log(false);
        }
});

