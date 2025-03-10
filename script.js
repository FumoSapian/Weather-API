var APIKey = "29486e37c00244ed1968ad8b3f094df4";
var api_request = 'api.openweathermap.org/data/2.5/weather?q={CityWeather}&appid={APIKey}';

// Modal Code 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}