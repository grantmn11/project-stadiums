// API Key and const variables



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















