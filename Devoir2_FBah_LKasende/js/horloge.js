/***********************************************/
/*         DEVOIR #2 : HORLOGE                 */           
/* Par : Fatoumata Binta Bah & Lisette Kasende */
/***********************************************/

var heure = new Date();  
const son = 'mp3/alarme.mp3';
var element = document.createElement('audio');

//creation d'un nouvel element button d'arret alarm
var bouttonArreter = document.createElement("button");
var texteButton = document.createTextNode("Arreter une alarme");
bouttonArreter.appendChild(texteButton);
var arrete = document.getElementById("alarmeStop");
arrete.appendChild(bouttonArreter);
bouttonArreter.id="arreteClick";

//Creation de l'objet JSON comme paramètre en entrée
var objHorloge = {

     heureCourante:'span_horloge',
     activerDesactiverSon: function (){
          if (Arreter) {
                console.log( 'Nouvelle alarme dans' + AjouterAlarme);
                console.log( 'Son jouer!!!');
          }
      }
};

//Classe et contructor qui  prend paramètre en entrée qui prend un objet 
class Horloge{

      constructor(objHorloge) {
       this.spanHeure = document.getElementById(objHorloge.heureCourante); 
      }

      dateHeureCourante() { 
      var h = heure.getHours();
      var m = heure.getMinutes();
      var s = (heure.getSeconds() <10) ?  + new Date().getSeconds() : new Date().getSeconds();
      this.spanHeure.innerHTML =' Il est ' + h + ' heures ' + m
                                            + ' munites ' + s + ' secondes ';
      }

      ProgrammerNouvelleAlarme(){
        var heureSelect = document.getElementById("alarmeHeures").selectedIndex;
        var minuteSelect = document.getElementById("alarmeMinutes").selectedIndex;
        var secondeSelect = document.getElementById("alarmeSecondes").selectedIndex;
        
        if (heureSelect > 0) {
          console.log("Alarme va sonnner dans: " + heureSelect + ' heures ' + minuteSelect 
                                               + ' munites ' + secondeSelect + ' secondes ');
        } 
        else if(minuteSelect > 0){
          console.log("Alarme va sonnner dans: " + minuteSelect + ' munites ' + secondeSelect + ' secondes ');
        }
        else {
          console.log("Alarme va sonnner dans: " + secondeSelect + ' secondes ');
        }        

        var milisecondes = heureSelect *60*60 + minuteSelect*60 +  secondeSelect ;
 
       return (milisecondes*1000);
      }

      JouerSon(){
          element.setAttribute('src',son);
          element.play();
      }
}

//Instance de la classe Horloge
var horloge = new Horloge(objHorloge);

setInterval(function(){horloge.dateHeureCourante()}, 1000);

document.getElementById("ajouterAlarme").addEventListener("click", function () { 
  setTimeout(horloge.JouerSon, horloge.ProgrammerNouvelleAlarme());
});

//Click du bouton Arrêter Alarme
document.getElementById("arreteClick").addEventListener("click",function(){element.pause()});
