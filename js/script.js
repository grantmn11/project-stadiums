// API Key and const variables
const API_Key = "1";


const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=';
//const PLAYER_URL = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=';
//'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=';
//const SECOND_URL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=';

let userInput;
let stadiumData;
let newImage;

const $stadiumPic = $('#stadiumPic');
const $location = $('#location');
const $website = $('#website');
const $league = $('#league');
const $year = $('#year');
const $form = $('form');
const $input = $('input[type="text"]');
const $image = $('#image');

$form.on('submit', handleData);


function handleData(evt){
    evt.preventDefault();
    userInput = $input.val();
    //console.log(userInput)
    if(!userInput) return;
    $.ajax(BASE_URL + userInput)
    .then(function(data){
        //console.log(data)
        stadiumData = data;
        render();
    },
    function(error){
        alert(`Stay here`, error)
    });
}

function render(){
    $stadiumPic.text('Here is the teamname: ' + stadiumData.teams[0].strStadium);
    $location.text('Here is the address: ' + stadiumData.teams[0].strStadiumLocation);
    $website.text(`Here is the website for stadium tours: ` + stadiumData.teams[0].strWebsite);
    $league.text('League details: ' + stadiumData.teams[0].strLeague);
    $year.text('This club was established in: ' + stadiumData.teams[0].intFormedYear);
    $image.attr('src',  stadiumData.teams[0].strStadiumThumb);
}













/*function generateUI(){
    return pokemonData.results.map(function(pokemon){
        return `
        <article data-url="${pokemon.url}" class='card flex-ctr outline'>
        <h3>${pokemon.name}</h3>
        </article>`;

/*
// const and variables
const API_KEY = '97483688dedf46a302f696b2b812060b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
//const redirect;
//insert a link to ao new page or a picture for the error
//cached elements references
let userInput;
let weatherData;

const $temp = $('#temp');
const $humidity = $('#humidity');
const $pressure = $('#pressure');
const $form = $('form');
const $input = $('input[type="text"]');


//event listeners
$form.on('submit', handleGetData);


//functions
//q={city name}&appid={API key}'

function handleGetData(evt){
    evt.preventDefault(); //problem is here
    userInput = $input.val();
    console.log(userInput)
    if(!userInput) return;
    $.ajax(BASE_URL + userInput + '&units=metric&appid=' + API_KEY)
    .then(function (data){
        console.log(data)
        weatherData = data;
        render();
        
    }, function(error){
        alert(`As a courtesy you have been redirected. Thank you for visitng. ${location.replace('https://www.weather.com')}`)
    });
}

function render(){
    $temp.text('The Temperature is: ' + weatherData.main.temp)
    $humidity.text('UV index: ' + weatherData.main.humidity)

}

 // add avariable to add an image then add an img src, then in render grab the element and set the attribute $img.attr('src', moviedata.poster)
 //$image $ id
 //render $ attr change src 
 // Constants and variables
let movieData;
let userInput;
// Cached element references
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rating');
const $form = $('form');
const $input = $('input[type="text"]')
// Event listeners
$form.on('submit', handleGetData);
// Functions
function handleGetData(event) {
    event.preventDefault(); // turn off default behavior (page refresh)
    userInput = $input.val();
    if(!userInput) return;
    $.ajax('http://www.omdbapi.com/?apikey=5ceecba4&t=' + userInput) // use s parameter instead of t to get all info
    .then(function(data) {
        movieData = data;
        render();
    }, function(error) {
        console.log('Error', error);
    });
}
function render() {
    $title.text('Movie Title: ' + movieData.Title);
    $year.text('Year Released: ' + movieData.Year);
    $rating.text('MPAA Rating: ' + movieData.Rated);
}

*/

