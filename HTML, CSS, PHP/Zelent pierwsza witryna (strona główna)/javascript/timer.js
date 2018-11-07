function odliczanie(){
	var dzisiaj = new Date();
	var dzien = dzisiaj.getDate();
	if (dzien<10) dzien = "0"+dzien;
	var miesiac = dzisiaj.getMonth()+1; //bo zwraca 0-11
	switch (miesiac){
		case 1: miesiac = "stycznia"; break;
		case 2: miesiac = "lutego"; break;
		case 3: miesiac = "marca"; break;
		case 4: miesiac = "kwietnia"; break;
		case 5: miesiac = "maja"; break;
		case 6: miesiac = "czerwca"; break;
		case 7: miesiac = "lipca"; break;
		case 8: miesiac = "sierpnia"; break;
		case 9: miesiac = "września"; break;
		case 10: miesiac = "października"; break;
		case 11: miesiac = "listopada"; break;
		case 12: miesiac = "grudnia"; break;
		default: miesiac = "error"; break;
	}			
	var rok = dzisiaj.getFullYear();
	var godzina = dzisiaj.getHours();
	if (godzina<10) godzina = "0"+godzina;
	var minuta = dzisiaj.getMinutes();
	if (minuta<10) minuta = "0"+minuta;
	var sekunda = dzisiaj.getSeconds();
	if (sekunda<10) sekunda = "0"+sekunda;
	
	document.getElementById("zegar").innerHTML = dzien+" "+miesiac+" "+rok+" | "+godzina+":"+minuta+":"+sekunda;
	
	setTimeout("odliczanie()",1000);
}	