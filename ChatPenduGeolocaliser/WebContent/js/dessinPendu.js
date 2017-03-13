function dessinePendu(etape)
{
	var canvas  = document.querySelector('#canvas');
	var context = canvas.getContext('2d');

// pied potence
context.beginPath();
context.lineWidth='3';
context.moveTo(5,380);
context.lineTo(105,380);
context.stroke(); 
}
function dessinePendu2()
{
 // poteau potence
context.beginPath();

context.moveTo(55,380);
context.lineTo(55,10);
context.stroke(); 
}
function dessinePendu3()
{
// poteau horizontale potence
context.beginPath();
context.moveTo(55,10);
context.lineTo(180,20);
context.stroke(); 
}
function dessinePendu4()
{
// corde
context.lineTo(180,51);
context.stroke(); 
}
function dessinePendu5()
{
// corps
context.beginPath();
context.moveTo(180,150);
context.lineTo(180,300);
context.stroke(); 
}
function dessinePendu6()
{

context.beginPath(); // Le cercle extérieur
context.arc(178, 100, 50, 0, Math.PI * 2); // Ici le calcul est simplifié
context.stroke();

// bouche triste
context.beginPath();
context.arc(178, 150, 40,3.7,5.7);
context.fill();
context.stroke();

context.beginPath(); // L'œil gauche
context.arc(158, 95, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context.stroke();

context.beginPath(); // L'œil droit
context.arc(198, 95, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context.stroke();

context.beginPath(); // Oreille gauche
context.arc(143, 95, 20,2.4,4.2 );
context.stroke();

context.beginPath(); // Oreille droite
context.arc(213, 95, 20,5.2,0.8 );
context.stroke();



}
function dessinePendu7()
{
 // bras droit
context.beginPath();
context.moveTo(180,180);
context.lineTo(240,220);
context.stroke(); 
}
function dessinePendu8()
{
// Bras gauche
context.beginPath();
context.moveTo(180,180);
context.lineTo(120,220);
context.stroke(); 
}
function dessinePendu9()
{
// jambe droite
context.beginPath();
context.moveTo(180,300);
context.lineTo(240,350);
context.stroke();
}
function dessinePendu10()
{
// jambe gauche
context.beginPath();
context.moveTo(180,300);
context.lineTo(120,350);
context.stroke();
}