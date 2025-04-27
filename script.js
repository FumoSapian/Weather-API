var APIKey = "29486e37c00244ed1968ad8b3f094df4";

function apiCall(){
  const userInput = prompt("Please enter the city whose weather you would like to view ?");
  let api_request = 'api.openweathermap.org/data/2.5/weather?q=$' + userInput + '&appid' + APIKey;
  window.alert(api_request)
}
