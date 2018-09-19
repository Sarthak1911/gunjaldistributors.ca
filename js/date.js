//Get reference to the year in the DOM
const YEAR = document.querySelector('#year');

var getYear = function(){

    var date = new Date();

    dateString = date.toDateString();

    year = dateString.slice(dateString.length - 4, dateString.length);

    YEAR.innerHTML = year;    

}

//Set the YEAR value on window load

window.addEventListener("load", getYear, false);




