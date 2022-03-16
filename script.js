"use strict"
//  let's code now //

fetch("./resultData.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    appendData(data)  // This is a self integration function 
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
    // Put the HTML IDs in Variables
    var name = document.getElementById("name");
    var gender = document.getElementById("gender");
    var street = document.getElementById("street");
    var city = document.getElementById("city");
    var state = document.getElementById("state"); 
    var country = document.getElementById("country");
    var TitleNameCard = document.getElementById("TitleNameCard");
    var email = document.getElementById("email");

    //  Stringify the Data and pass it in a Variable (CONST)
    const nameTitle = JSON.stringify(data.results[0].name.title);
    const nameFirst = JSON.stringify(data.results[0].name.first);
    const nameLast = JSON.stringify(data.results[0].name.last);
    const genderData = JSON.stringify(data.results[0].gender);
    const strName = JSON.stringify(data.results[0].location.street.name);
    const cityData = JSON.stringify(data.results[0].location.city);
    const stateData = JSON.stringify(data.results[0].location.state);
    const countryData = JSON.stringify(data.results[0].location.country);
    const emailData = JSON.stringify(data.results[0].email);

      
   // Just random names to store var //

    var diva = document.createElement("li");
    diva.innerHTML = 'Name: ' + JSON.parse(nameTitle) +" "+ JSON.parse(nameFirst) + " "+ JSON.parse(nameLast);
    name.appendChild(diva);

    var diva = document.createElement("li");
    diva.innerHTML = 'Gender: ' + JSON.parse(genderData);
    gender.appendChild(diva);
  
    var dive = document.createElement("li");
    dive.innerHTML = 'Street: ' + JSON.parse(strName);
    street.appendChild(dive);

    var divae = document.createElement("li");
    divae.innerHTML = 'City: ' + JSON.parse(cityData);
    city.appendChild(divae);

    var divea = document.createElement("li");
    divea.innerHTML = 'State: ' + JSON.parse(stateData);
    state.appendChild(divea);

    var divaw = document.createElement("li");
    divaw.innerHTML = 'Country: ' + JSON.parse(countryData);
    country.appendChild(divaw);

    var divawe = document.createElement("p");
    divawe.innerHTML = JSON.parse(nameTitle) +" "+ JSON.parse(nameFirst) + " "+ JSON.parse(nameLast);;
    TitleNameCard.appendChild(divawe);

    var divawew = document.createElement("span");
    divawew.innerHTML = "my mail is: "  + JSON.parse(emailData);
    email.appendChild(divawew);
};
