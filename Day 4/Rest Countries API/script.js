var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" );
    request.send();
request.onload = function () {
    var data = JSON.parse(request.response);

    
    //PART 1 : Use the rest countries API url and display all the country flags in console

    for(i=0;i<data.length;i++)
    {
        console.log(`${data[i].name} - ${data[i].flag}` )
    }
//PART 2 - Use the same rest countries and print all countries name, region, sub region and population

    for(i=0;i<data.length;i++)
    {
        console.log(`Name: ${data[i].name}, Region: ${data[i].Region}, Sub-Region: ${data[i].subregion}, Population:${data[i].population}` )
    }
}   

