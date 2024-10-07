fetch('https://run.mocky.io/v3/89ac53b4-f22e-4ca9-9c83-10e2533056e3')

.then(function (response) {
    return response.json();
})

.then(function (responseJson) {
    kerro(responseJson);
})

.catch(function (error) {
    document.getElementById("vastaus").innerHTML = 
    "<p>Tietoa ei pystytä hakemaan</p>";
});

function kerro(data){
    var teksti = ""; 

    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "<div>"; 
        teksti = teksti + "<h3>" + data[i].nimi + "</h3>"; 
        teksti = teksti + "<p>" + data[i].kuvaus + "</p>"; 
        teksti = teksti + "<p><strong>Hinta:</strong> " + data[i].hinta + "</p>"; 
        teksti = teksti + "</div><hr>"; 
    }

    document.getElementById("vastaus").innerHTML = teksti;
}
    