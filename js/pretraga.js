function pretragaPredmet() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("pretraga-predmet");
    filter = input.value.toUpperCase();
    table = document.getElementById("lijeva-tabela");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

function pretragaNastavnik(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("pretraga-nastavnik");
  filter = input.value.toUpperCase();
  table = document.getElementById("lijeva-tabela");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function pretragaGodina(broj) {

  var prva=document.getElementById(prvagodina);
  var druga= document.getElementById(drugagodina);
  if(broj=='1') {
    prva.style.display=("");
    //document.getElementById(prvagodina).display.style("");
  } else if(broj=='2') {
    //document.getElementById(drugagodina).display.style("");
    druga.style.display=("");
  }
}

function postaviElemente() {
}


