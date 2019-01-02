var hasla_wszystkie; //wszystkie hasla jako tablica
var haslo = "";
var haslo1 = "";
var ile_skuch = 0;
var ukryta_litera = "\u2022";
var litery = [
    'A', 'Ą', 'B', 'C', 'Ć',
    'D','E', 'Ę', 'F', 'G', 
    'H','I', 'J', 'K', 'L', 
    'Ł','M','N','Ń','O',
    'Ó','P','Q','R','S',
    'Ś','T','U','V','W',
    'X','Y','Z','Ż', 'Ź'
];

//pliki audio
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var loseSound = new Audio("lose.wav");
var winSound = new Audio("win.wav");

window.onload = start;

function start(){  
    schowaj_instrukcje();
    document.getElementById("newgame").setAttribute("onclick", "location.reload()");
    document.getElementById("rules").setAttribute("onclick", "pokaz_instrukcje()")
    zaladuj_hasla("hasla.txt");//zaladowanie hasel z pliku    
    haslo = losujHaslo().toUpperCase();//wylosowanie hasla    
    ukryj_haslo(haslo);//skitranie hasla

    var tresc_diva = "";
    for (i=0; i<35; i++){
        var element = "lit" + i;
        tresc_diva += '<div class="litera" id="' + element + '" + onclick="sprawdz(' + i + ')">' + litery[i] + '</div>';
        if (i%7 == 6) {
            tresc_diva += '<div style="clear:both;"></div>';
        }
    }
    document.getElementById("alfabet").innerHTML = tresc_diva; //wypisanie kafelków z literami  
    wypisz_haslo(); //wypisanie ukrytego hasla
}

function zaladuj_hasla(filePath){
	var txtFile;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	    txtFile = new XMLHttpRequest();
	} else {// code for IE6, IE5
	    txtFile = new ActiveXObject("Microsoft.XMLHTTP");
	}
	txtFile.open("GET",filePath,false);
	txtFile.send();
	var txtDoc=txtFile.responseText;
    hasla_wszystkie = txtDoc.split("\r\n"); // values in lines[0], lines[1]...
}

function losujHaslo(){
    var ile_hasel = hasla_wszystkie.length;
    var id_hasla = Math.floor(Math.random()*ile_hasel);
    return hasla_wszystkie[id_hasla];
}

function ukryj_haslo(haslo) {
    var dlugoscHasla = haslo.length
    haslo1 = "";
    for (i=0; i<dlugoscHasla; i++){
        if(!haslo.charAt(i).match(/[a-zA-ZąĄćĆęĘłŁŃńśŚóÓźŹżŻ]/)){
            haslo1 += haslo.charAt(i);
        } else {
            haslo1 += ukryta_litera;
        }
    }
}

function wypisz_haslo(){
    document.getElementById("plansza").innerHTML = haslo1;
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
    for (i=0 ; i<haslo.length ; i++){
        if (haslo.charAt(i) == litery[nr]){
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona) trafiona_execute(nr);
    else chybiona_execute(nr);
    if (haslo == haslo1) you_win_execute(); 
    if (ile_skuch>=9) you_lose_execute();    
}

function trafiona_execute(nr){
    yes.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#030";
    document.getElementById(element).style.color = "#00c000";
    document.getElementById(element).style.border = "3px solid #00c000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");
    wypisz_haslo();
}

function chybiona_execute(nr){
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

function you_win_execute(){
    winSound.play();
    document.getElementById("alfabet").innerHTML = 
        "Tak jest! Podano prawidłowe hasło: " 
        + haslo 
        + "<br /><br /><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
}

function you_lose_execute(){
    loseSound.play();
    document.getElementById("alfabet").innerHTML = 
        "Przegrana! Hasło było następujące:" 
        + haslo 
        + "<br /><br /><span class='reset' onclick='location.reload()'>JESZCZE RAZ?</span>";
}

function pokaz_instrukcje(){   
    var instrukcja = "<p>Na ekranie wykropkowane zostało hasło, będące polskim przysłowiem.</p>"
        + "<p> Twoim zadaniem jest odgadnięcie tego hasła litera po literze. Uważaj jednak - wybór niepoprawnej litery przybliża Cię do stryczka. Gdy zostaniesz powieszony - przegrywasz.</p>";
    var zamkniecie = '<div id="close" onclick="schowaj_instrukcje">ZAMKNIJ INSTRUKCJE</div>';
    document.getElementById("instruction").innerHTML = instrukcja + zamkniecie;
    document.getElementById("instruction").setAttribute("style", "position: fixed;left: 25%;top: 15%;width: 50%;background-color:green;z-index:100;padding: 20px 40px; font-size: 20px;");
    document.getElementById("close").setAttribute("onclick", "schowaj_instrukcje()");
    document.getElementById("close").setAttribute("style", "cursor: pointer;font-size:20px;padding: 5px;");

}

function schowaj_instrukcje(){
    document.getElementById("instruction").setAttribute("style", "position: fixed;left: 0%;top: 0%;width: 0%");
    document.getElementById("instruction").innerHTML = "";
}