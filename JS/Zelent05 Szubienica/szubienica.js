var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";

for (i=0; i<dlugosc; i++){
    if(haslo.charAt(i)==" "){
        haslo1 += " ";
    } else {
        haslo1 += "-";
    }
}

function wypisz_haslo(){
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = [
    'A', 'Ą', 'B', 'C', 'Ć',
    'D','E', 'Ę', 'F', 'G', 
    'H','I', 'J', 'K', 'L', 
    'Ł','M','N','Ń','O',
    'Ó','P','Q','R','S',
    'Ś','T','U','V','W',
    'X','Y','Z','Ź', 'Ż'
];

function start(){
    var tresc_diva = "";

    for (i=0; i<35; i++){
        var element = "lit" + i;
        tresc_diva += '<div class="litera" id="' + element + '" + onclick="sprawdz(' + i + ')">' + litery[i] + '</div>';
        if (i%7 == 6) {
            tresc_diva += '<div style="clear:both;"></div>';
        }
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}

function sprawdz(nr){
    alert(nr);
}