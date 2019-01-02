var haslo = "Siała baba mak";
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var loseSound = new Audio("lose.wav");
var winSound = new Audio("win.wav");

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
    'X','Y','Z','Ż', 'Ź'
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

String.prototype.ustawZnak = function(miejsce, znak){
    if(miejsce > this.length-1){
        return this.toString();
    } else {
        return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
    }
}

function sprawdz(nr){
    var trafiona = false;
    for (i=0 ; i<dlugosc ; i++){
        if (haslo.charAt(i) == litery[nr]){
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }

    if(trafiona){
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#030";
        document.getElementById(element).style.color = "#00c000";
        document.getElementById(element).style.border = "3px solid #00c000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        wypisz_haslo();
    } else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#c00000";
        document.getElementById(element).style.border = "3px solid #c00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
    }    

    if(haslo == haslo1){
        winSound.play();
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + "<br /><br /><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
    }

    if (ile_skuch>=9){
        loseSound.play();
        document.getElementById("alfabet").innerHTML = "Przegrana! " + haslo + "<br /><br /><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
    }
}