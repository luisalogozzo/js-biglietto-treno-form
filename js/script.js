
// var PrezzoBiglietto = (KmDaPercorrere * 0.21);
// console.log(PrezzoBiglietto);


var ButtonGenera = document.getElementById("genera");
ButtonGenera.addEventListener('click',
function () {

  var InputKm = document.getElementById('km');
  var KmDaPercorrere = InputKm.value;
  console.log(KmDaPercorrere);

  var InputNome = document.getElementById('nome');
  var Nome = InputNome.value;
  console.log(Nome);
//
// var InputFasciaEta = document.getElementById('eta').innerHTML;
// var FasciaEta = InputFasciaEta.value;

  // if (EtaPasseggero < 18) {
  //   var TariffaMinorenni = PrezzoBiglietto - (PrezzoBiglietto * 0.2) ;
  //   document.getElementById('Prezzo-biglietto').innerHTML = TariffaMinorenni
  // } else if (EtaPasseggero > 65) {
  //    var TariffaOver = PrezzoBiglietto - (PrezzoBiglietto * 0.4) ;
  //    document.getElementById('Prezzo-biglietto').innerHTML = TariffaOver
  // } else {
  //    var  TariffaNormale = PrezzoBiglietto;
  //    document.getElementById('Prezzo-biglietto').innerHTML = TariffaNormale
  // }
 }
);
