fetch('https://run.mocky.io/v3/4097a58f-23f3-4aa0-9710-d836917dc916')

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

    teksti = "<h1>" + data.otsikko + "</h1>";

    teksti = teksti + "<p>" + data.kuvaus + "</p>";

    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";

    teksti = teksti + "<h3>Opintojakso " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op" + "</h3><ul>";
    for (var i = 0; i < data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
    }
    teksti = teksti + "</ul>";

    teksti = teksti + "<h3>Linkit</h3><ul>";
    for (var i = 0; i < data.tekniikat.length; i++) {
        teksti = teksti + "<li>" + data.tekniikat[i].aihe + " <a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].linkki + "</a></li>";
    }
    teksti = teksti + "</ul>";

    document.getElementById("vastaus").innerHTML = teksti;
}
    