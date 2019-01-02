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

window.onload = wypisz_haslo;

function start(){
    
}