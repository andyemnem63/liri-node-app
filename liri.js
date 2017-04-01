
//If the 2 index input is the string my-tweets then....
if(process.argv[2] === "my-tweets"){
	//Gets key module and display 20 tweetss
	require('./key').twitter;
}
//If the 2 index input is the string my-tweets then....
else if(process.argv[2] === "spotify-this-song"){
	console.log(true);
}

