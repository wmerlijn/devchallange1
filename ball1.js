var ctx = canvas.getContext('2d');
ctx.fillStyle = "url('https://images-ext-2.discordapp.net/external/JHbcYZmPv00szciZsyk-neYxOt8SgycLnb7me8stj6Y/https/i.pinimg.com/originals/6c/4d/d6/6c4dd66bf2f7aee116675e0499cfb569.jpg')";
var interval = window.setInterval(animate, 1000 / 30);	//Frames Per Second in milliseconden
var balls = [];	//Array om uiteindelijk alle virussen in te stoppen
var level = 1;	//Level variabele die ++ gaat wanneer je de finish aanraakt. Virus=Level
var death = 0;	//Het aantal keer dat je dood bent gegaan. Death++ als je de muur, border of virus aanraakt
var keyStatus = {	//Status waar de key zich in bevind
	up:    false,	//Standaard waarden dat de key niet is ingedrukt
	down:  false,	//Standaard waarden dat de key niet is ingedrukt
	left:  false,	//Standaard waarden dat de key niet is ingedrukt
	right: false	//Standaard waarden dat de key niet is ingedrukt
};
function drawLevel() { // score tekenen aan de hand van het level waar je zit
    ctx.font = "78px Arial";	//Font van je text
    ctx.fillStyle = "#0095DD";	//Kleuren stijl van je text
    ctx.fillText("Level: "+level, 800, 70);	//Het invullen van de text, x y cordinaten en het level printen op het canvas
}
function drawDeaths() { // Het aantal keer dat je dood bent gegaan tekenen
    ctx.font = "30px Arial";	//Font van je text
    ctx.fillStyle = "#0095DD";	//Kleuren stijl van je text
    ctx.fillText("Deaths: "+death, 860, 120);	//Het invullen van de text, x y cordinaten en het aantal deaths printen op het canvas
}
generateWalls();	//Roept de functie generateWalls aan
generateBalls(level);	//Roept de functie generateBalls aan

function generateBalls(level) {	//Genereert de ballen en hun standaar waarden
	balls = [];	//Hier worden de virussen ingestopt
	for(var i = 0 ; i < level; i++ ) {	//For loop zodat alle ballen gelijk aan het level op het canvas worden geprint
		balls[i] = {						//standaard waarden voor een virus
			x:      canvas.width * (4/5),	//standaard waarden voor een virus
			y:      canvas.height / 2,	//standaard waarden voor een virus
			dx:     0,	//standaard waarden voor een virus
			dy:     0,	//standaard waarden voor een virus
			delta:  5,	//standaard waarden voor een virus
			max:    15,	//standaard waarden voor een virus
			radius: 30,	//standaard waarden voor een virus
			color:  "#EF0C47"	//standaard waarden voor een virus
		};
	}
}

	function checkBoundingboxCircle(x, y, radius, boxX1, boxX2, boxY1, boxY2) {	//Hier stelt hij de waarden van de collision detection in
		var x1 = x - radius;	//Waarden berekenen
		var x2 = x + radius;	//Waarden berekenen
		var y1 = y - radius;	//Waarden berekenen
		var y2 = y + radius;	//Waarden berekenen
		
		return (x1 < boxX2 && x2 > boxX1 && y1 < boxY2 && y2 > boxY1);	//De waarden waar hij aan moet voldoen om een botsing te merken
	}

	function moveBalls() {	//Functie die de collisionbox bepaalt en de virussen laat bewegen
		for(var i = 0; i < balls.length; i++) {	//loop om dit uit te voeren bij alle virussen in de array, hier worden ook de waardes bepaald van de virussen.
			var delta = balls[i].delta;		//Delta waarde bepaald van de virussen
			var x = balls[i].x;				//x waarde bepaald van de virussen	
			var y = balls[i].y;				//y waarde bepaald van de virussen
			var radius = balls[i].radius;	//Radius waarde bepaald van de virussen

			var dx = ((Math.random() * delta) - (delta / 2)); 	//Verandert dx random
			var dy = ((Math.random() * delta) - (delta / 2));	//Verandert dy random

			if(Math.abs(dx + balls[i].dx) > balls[i].max) { //snelheid beperken zodat de virussen niet door blijven versnellen
				dx *= -1;
			}
			if(Math.abs(dy + balls[i].dy) > balls[i].max) {	//snelheid beperken zodat de virussen niet door blijven versnellen
				dy *= -1;
			}
			
			balls[i].dx += dx;	//snelheid en richting
			balls[i].dy += dy;	//snelheid en richting
			
			// collision detection
			// scherm rand detectie
			if((x + balls[i].dx) < balls[i].radius || (x + balls[i].dx) > (canvas.width - radius)) {	//Als hij de rand aanraakt draait hij 180 graden
				balls[i].dx *= -1;																		//Als hij de rand aanraakt draait hij 180 graden
			}																		
			if((y + balls[i].dy) < balls[i].radius || (y + balls[i].dy) > (canvas.height - radius)) {	//Als hij de rand aanraakt draait hij 180 graden
				balls[i].dy *= -1;																		//Als hij de rand aanraakt draait hij 180 graden
			}
			
			// muren detectie
			for(var j = 0; j < walls.length; j++) {														//Gaat in de walls array na en pakt zo alle walls eruit.
				if(checkBoundingboxCircle(x + balls[i].dx, y + balls[i].dy, radius, walls[j].x1, walls[j].x2, walls[j].y1, walls[j].y2)) {	//Als hij een wall aanraakt draait hij 180 graden
					balls[i].dx *= -1;	//Als hij een wall aanraakt draait hij 180 graden
					balls[i].dy *= -1;	//Als hij een wall aanraakt draait hij 180 graden
				}
			}

			// beweeg bal
			balls[i].x += balls[i].dx;
			balls[i].y += balls[i].dy;
			

			

			// teken bal
			ctx.beginPath(); //drawing circle
			ctx.fillStyle = balls[i].color;	//Kleur van alle virussen
			ctx.arc(balls[i].x, balls[i].y, radius, 0, 2 * Math.PI, false);	//Circle waarden van alle virussen
			ctx.fill();	//Vult de virussen met de kleur
		}
}
	//--------------------------------PLAYER-------------------------

var dx = 8; //voor animeren beweging
var dy = 8;	//voor animeren beweging
var x = 150 // positie
var y = 100 // positie
var radius = 30	//Van middelpunt tot zijkant van de player
var xo = x	//onthoud ouden waarden
var yo = y	//onthoud ouden waarden
				
function checkBoundingboxCircle(x, y, radius, boxX1, boxX2, boxY1, boxY2) {	//Hier stelt hij de waarden van de collision detection in
	var x1 = x - radius;
	var x2 = x + radius;
	var y1 = y - radius;
	var y2 = y + radius;
	
	return (x1 < boxX2 && x2 > boxX1 && y1 < boxY2 && y2 > boxY1);	//De waarden waar hij aan moet voldoen om een botsing te merken
}	
window.onload = function() {	
	window.addEventListener('keydown', function(event)	//Event voor de keys te gebruiken
		{
			
			switch (event.keyCode)	// Hier in staan alle keys case codes zodat hij de pijltjes keys kan herkennen. Wanneer je op een key drukt verandert de status
			{						// dus naar true en gaat hij bewegen verderop in de draw functie.
					case 38: 
						keyStatus.up = true;
						break;
					
					case 40: //down
						keyStatus.down = true;
						break;
						
					case 37: //left
						keyStatus.left = true;
						break;
						
					case 39: //right
						keyStatus.right = true;
						break;
			}
		}, 
		true);
	window.addEventListener('keyup', function(event)	//Kijken of de key niet ingedrukt is en dat zal dus ook resulteren in geen beweging die richting.
		{
			
			switch (event.keyCode)
			{
					case 38: 
						keyStatus.up = false;
						break;
					
					case 40: //down
						keyStatus.down = false;
						break;
						
					case 37: //left
						keyStatus.left = false;
						break;
						
					case 39: //right
						keyStatus.right = false;
						break;
			}
		}, true);
}

						
				function drawYou()	//Deze functie is de main functie die jou uiteindelijk op het canvas gaat tekenen met alle waarden en testen die hiervoor zijn gelopen
				{ var test = true	//hier stel ik een var test op om de beweging te kunnen stoppen wanneer hij false word.
						// scherm rand detectie
						if((x) < radius || (x) > (canvas.width - radius)) {		//Als er een botsing komt dan test = false en gaat hij terug naar zijn begin positie en death++
							test = false
							death++;
						}
						if((y) < radius || (y) > (canvas.height - radius)) {	//Als er een botsing komt dan test = false en gaat hij terug naar zijn begin positie en death++
							test = false
							death++;
						}
						
						// muren detectie
						for(var j = 0; j < walls.length -1; j++) {	// Walls.length -1 want anders neemt hij de finish ook mee
						if(checkBoundingboxCircle(x, y, radius, walls[j].x1, walls[j].x2, walls[j].y1, walls[j].y2)) {	//Als er een botsing komt dan test = false en gaat hij terug naar zijn begin positie en death++
								test = false
								death++;
				}
			}
				for(var i = 0; i < balls.length; i++) {		//Gaat bij alle virussen na of er een botsing is of niet
				if(checkBoundingboxCircle(x, y, radius, balls[i].x, balls[i].x, balls[i].y, balls[i].y)) {	//Als er een botsing komt dan test = false en gaat hij terug naar zijn begin positie en death++
					test = false	
					death++;
				}
			}
	
			
						if(test === false){	//Hier word gecontroleerd of bij een van voorafgaande controles de var test is verandert naar false, als dat het geval is dan worden de begin x en y cordinaten
						//aangeroepen en zal je terug staan op je begin positie
							x = xo
							y = yo
						
				}
						ctx.beginPath();	//Hier word je uiteindelijk gemaakt
						ctx.fillStyle = "#24A3F5"	//Je kleurenstijl
						ctx.arc(x, y, 30, 0, 2 * Math.PI);	//Je circle waarden
						ctx.fill();	//Je kleur opvullen in het hele bolletje
				}				
			//--------------------------------------PLAYER--------------------------------------

function animate() { //Hier is where the magic happends. Alles wat vooraf ging word hier op het canvas getekend
	//bewegen animeren
    if(keyStatus.up) y -= dy;
	if(keyStatus.down) y += dy;
	if(keyStatus.left) x -= dx;
	if(keyStatus.right) x += dx;
	// blauwen muren detectie
						
						if(checkBoundingboxCircle(x, y, radius, walls[3].x1, walls[3].x2, walls[3].y1, walls[3].y2)) {	//De detectie of je de finish aanraakt
								level++;	//Als je de finish aanraakt kom je dus in het volgende level
								test = false
								generateBalls(level);	//Ballen worden opnieuw gegenereerd maar nu met 1 extra
								x = xo;	//Terug naar spawn point
								y = yo;
				}
				
	ctx.clearRect(0, 0, canvas.width, canvas.height) // wiping canvas
	drawWalls();	//Roept de functie aan
	drawLevel();	//Roept de functie aan
	drawDeaths();	//Roept de functie aan
	moveBalls();	//Roept de functie aan
	drawYou();		//Roept de functie aan

	
}