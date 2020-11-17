let data = document.getElementById('data')
let cases = document.getElementById('Cases')
let deaths = document.getElementById('Deaths')
let recorved = document.getElementById('Recorved')
let countries = document.getElementById('countries')
let germany = document.getElementById('germany')
let france = document.getElementById('france')
let Finland = document.getElementById('Finland')
let Netherlands = document.getElementById('Netherlands')
let china = document.getElementById('china')
let date = document.getElementById('date')

function covidStatus() {
    

fetch('https://api.covid19api.com/summary')  
  .then(response => response.json())
  .then(json => {

    console.log(json)
    console.log(json.Countries)
    console.log(json.Countries[59].Country)
    console.log(json.Countries[58].Country)
    console.log(json.Countries[121].Country)
    console.log(json.Countries[35].Country)
    console.log(json.Countries[63].TotalConfirmed)

    // console.log(json.Global)
    // console.log(json.Global.TotalDeaths)
    // console.log(json.Global.TotalRecovered)
    cases.innerHTML=json.Global.TotalConfirmed
    deaths.innerHTML=json.Global.TotalDeaths
    recorved.innerHTML=json.Global.TotalRecovered
    germany.innerHTML=`<td >${json.Countries[63].Country}</td><td>${json.Countries[63].TotalConfirmed}</td><td>${json.Countries[63].TotalDeaths}</td><td>${json.Countries[63].TotalRecovered}</td>`

    france.innerHTML=`<td>${json.Countries[59].Country}</td><td>${json.Countries[59].TotalConfirmed}</td><td>${json.Countries[59].TotalDeaths}</td><td>${json.Countries[59].TotalRecovered}</td>`

    Finland.innerHTML=`<td>${json.Countries[58].Country}</td><td>${json.Countries[58].TotalConfirmed}</td><td>${json.Countries[58].TotalDeaths}</td><td>${json.Countries[58].TotalRecovered}</td>`

    Netherlands.innerHTML=`<td>${json.Countries[121].Country}</td><td>${json.Countries[121].TotalConfirmed}</td><td>${json.Countries[121].TotalDeaths}</td><td>${json.Countries[121].TotalRecovered}</td>`

    
    china.innerHTML=`<td>${json.Countries[35].Country}</td><td>${json.Countries[35].TotalConfirmed}</td><td>${json.Countries[35].TotalDeaths}</td><td>${json.Countries[35].TotalRecovered}</td>`
    

    // for (let index = 0; index < json.Countries.length; index++) {
    //     // console.log(json.Countries[index].Country)
    //     let DE = json.Countries[index].Country
    //     console.log(DE);
    //     countries.innerHTML=
        
    // }
    date.innerHTML=json.Date
    
  })


}
covidStatus()

function restart() {
    setTimeout(function () {
        location.reload()
    })
}

  