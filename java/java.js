var tab = document.getElementById('tableau');
var cells = tab.getElementsByTagName("td");
for (var i=0 ; i<9 ; i++){
  cells[i].onclick=clickCell;
}


var player1 = true;





function clickCell(e){
  // alert(e.target);// affiche HTMLTableCellElement
  // e.target represente la cellule clike
if (tableau[e.target.id.replace(/[^0-9]+/,"")] == 4){
  player1 = player1 ? false : true;
  e.target.className=(player1 ? "player1" : "player2") ;
  tableau[e.target.id.replace(/[^0-9]+/,"")]=!player1;}
  winn();

}
var tableau = [4 , 4 , 4 , 4 ,4 , 4 , 4 , 4 , 4];

function winn(){
  var tableau2 = new Array(8)
   tableau2[0] = tableau[0] + tableau[1] + tableau[2];
   tableau2[1] = tableau[3] + tableau[4] + tableau[5];
   tableau2[2] = tableau[6] + tableau[7] + tableau[8];

   tableau2[3] = tableau[0] + tableau[3] + tableau[6];
   tableau2[4] = tableau[1] + tableau[4] + tableau[7];
   tableau2[5] = tableau[2] + tableau[5] + tableau[8];
   tableau2[6] = tableau[0] + tableau[4] + tableau[8];
   tableau2[7] = tableau[2] + tableau[4] + tableau[6];

   for (var j = 0 ; j<8 ; j++){

     if  (tableau2[j]==3){
     scoreplayer1++;
     console.log(scoreplayer1);
     document.getElementById("p1").innerHTML="score player 1 =" +scoreplayer1;
     document.getElementById('winner').children[0].innerHTML="Player 1 WINN ! GG WP !"
     stop();
     document.getElementById("winner").style.display="flex";

   }


     if  (tableau2[j]==0){
     scoreplayer2++;
     document.getElementById("p2").innerHTML="score player 2 =" +scoreplayer2;
     document.getElementById('winner').children[0].innerHTML="Player 2 WINN ! GG WP !"
     stop();
     document.getElementById("winner").style.display="flex";
   }

     if (tableau2[j]==3 || tableau2[j]==0)
     finish=true;

   }
   matchnul++;		
   if (matchnul ==9 && !finish){
  scorenul++;
  document.getElementById("score").innerHTML="score nul =" +scorenul;
  document.getElementById('winner').children[0].innerHTML="Match nul recommencez !"
  stop();
  document.getElementById("winner").style.display="flex";

 }


 }
 var finish = false;
 var matchnul = 0;

 var scoreplayer1 = 0;
 var scoreplayer2 = 0;
 var scorenul = 0;


 function stop(){
   for (var i=0 ; i<9 ; i++){
     cells[i].onclick="";
   }
 }
 function start(){
   finish = false;
   matchnul = 0;
   player1 = 0;
   tableau = [4 , 4 , 4 , 4 ,4 , 4 , 4 , 4 , 4];
 for ( var p = 0 ; p<9 ; p++){
 cells[p].className="";
 cells[p].onclick=clickCell;}
 document.getElementById("winner").style.display="none";

 }
