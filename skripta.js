//ZADATAK 4
//traži profesora po klasi i označi ga žutom bojom, a onda i u drugom dijelu (druga godina) traži profesora po toj istoj klasi i označi ga (pozivajući prave funkcije u pravo vrijeme)
function vensadaprvagodina() {
    var element = document.getElementsByClassName("profesorVO");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="yellow"; 
    }
}

function vensadadrugagodina() {
    var element = document.getElementsByClassName("profesorVO");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="transparent";  
    }
}

function vedranprvagodina() {
    var element = document.getElementsByClassName("profesorVLJ");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="yellow"; 
    }
}

function vedrandrugagodina() {
    var element = document.getElementsByClassName("profesorVLJ");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="transparent";  
    }
}

function ribicprvagodina() {
    var element = document.getElementsByClassName("profesorSR");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="yellow"; 
    }
}

function ribicdrugagodina() {
    var element = document.getElementsByClassName("profesorSR");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="transparent";  
    }
}

function juricprvagodina() {
    var element = document.getElementsByClassName("profesorZJ");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="yellow"; 
    }
}

function juricdrugagodina() {
    var element = document.getElementsByClassName("profesorZJ");
    for (var x = 0; x < element.length; x++) {
      element[x].style.backgroundColor="transparent";  
    }
}

//ZADATAK2
function sortiraj() {
  var i = document.getElementById("icr");
  var m = document.getElementById("mur2");
  var o = document.getElementById("obp");
  var r = document.getElementById("rp");
  m.after(i);
  o.after(m);
  r.after(o);
}

function prvaGodina() {
  var x = document.getElementById("icr").style.display="none"; //neće prikazati predmet druge godine
}

//kada se klikne na ovo dugme na stranici, iz nekog razloga zaštopa i treba se refresh-ovat da bi se pojavio ispravan rezultat
function drugaGodina() {
  var predmet = document.getElementsByClassName("prva-godina"); //ne prikazuje predmete prve godine, a prepoznaje ih po klasi prva-godina
  for (var x = 0; x < predmet.length; x++) {
      predmet[x].style.display="none"; 
    }
}

function sviPredmeti() {
  var predmeti = document.getElementsByClassName("svi-predmeti"); //prikazuje sve predmete prepoznavajući ih po istoj klasi
  for (var x = 0; x < predmeti.length; x++) {
    predmeti[x].style.display="grid";  
  }
}
  
  