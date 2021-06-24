
var walls = [];	//Maakt een array aan waar alle waarden van de walls op de canvas in word gestort.

function generateWalls() {	//Functie die de walls genereert met de hieronder gestelde waarden
	var canvas = document.getElementById('canvas');	//canvas

	canvas.width = window.innerWidth ;	//canvas waarden
	canvas.height = window.innerHeight ;	//canvas waarden
	
	var innerWidth = window.innerWidth;	//maak een var aan om de positie van de muren op je scherm te gaan berekenen
	var innerHeight = window.innerHeight; 	//maak een var aan om de positie van de muren op je scherm te gaan berekenen
	walls = [];	//De walls array
	walls[0] = {		//Hier word de wall gemaakt die dus de array word ingestopt met de onderstaande x en y waarden voor een vierkant.
		x1: (innerWidth -19) / 3,
		x2: ((innerWidth -19) / 3) + (canvas.width/20),
		y1: (innerHeight -19) / 1.5,
		y2: ((innerHeight -19) / 1.5) + (canvas.height/2)
	};
	walls[1] = {		//Hier word de wall gemaakt die dus de array word ingestopt met de onderstaande x en y waarden voor een vierkant.
		x1: (innerWidth -19) / 4,
		x2: ((innerWidth -19) / 4) + (canvas.width/20),
		y1: (innerHeight -19) * 0,
		y2: ((innerHeight -19) * 0) + (canvas.height/4)
	};
	walls[2] = {		//Hier word de wall gemaakt die dus de array word ingestopt met de onderstaande x en y waarden voor een vierkant.
		x1: (innerWidth -19) / 1.8,
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),
		y1: (innerHeight -19) / 4,
		y2: ((innerHeight -19) / 4) + (canvas.height/2)
	};
	walls[3] = {		//Hier word de wall gemaakt die dus de array word ingestopt met de onderstaande x en y waarden voor een vierkant.
		x2: (innerWidth -19) ,	
		x1: ((innerWidth -19) / 1.1) + (canvas.width/20),
		y1: (innerHeight -19) / 3,
		y2: ((innerHeight -19) / 2.3) + (canvas.height/4)
	};
}

function drawWalls() {		//Functie die de walls gaat tekenen op de canvas en de levels gaat aanpassen
	if(level == 4){	//Als het level 4 is zal de middelste muur zich langzaam naar boven uitbreiden
walls[2].y1 -= 1;	//Animatie die word uitgevoerd
	}
if(level == 5) {		//Reset de waarden weer naar standaard
		walls[2] = {	//
		x1: (innerWidth -19) / 1.8,	//
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),	//
		y1: (innerHeight -19) / 4,	//
		y2: ((innerHeight -19) / 4) + (canvas.height/2)	//
	};
}
if(level == 6) {	//Als je bent aangekomen in level 6 zal de middelste wall sneller naar boven uitbreiden
	walls[2].y1 -= 3;	//Animatie die word uitgevoerd
}
if(level == 7) {	//Reset de waarden weer naar standaard
		walls[2] = {	//
		x1: (innerWidth -19) / 1.8,	//
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),	//
		y1: (innerHeight -19) / 4,	//
		y2: ((innerHeight -19) / 4) + (canvas.height/2)	//
	};
}
if(level == 9) {	//Als je bent aangekomen in level 9 zal de middelste wall sneller naar boven uitbreiden
	walls[2].y1 -= 3;	//Animatie die word uitgevoerd
}
if(level == 10) {	//Reset de waarden weer naar standaard
		walls[2] = {	//
		x1: (innerWidth -19) / 1.8,	//
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),	//
		y1: (innerHeight -19) / 4,	//
		y2: ((innerHeight -19) / 4) + (canvas.height/2)	//
	};
}
if(level == 11) {	//Als je bent aangekomen in level 11 zal de middelste wall erg langzaam naar boven uitbreiden
	walls[2].y1 -= 0.3;
}
if(level == 12) {	//Reset de waarden weer naar standaard
		walls[2] = {	//
		x1: (innerWidth -19) / 1.8,	//
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),	//
		y1: (innerHeight -19) / 4,	//
		y2: ((innerHeight -19) / 4) + (canvas.height/2)	//
	};
}
if(level == 13) {		//Als je bent aangekomen in level 13 zal de linksonder wall langzaam verdwijnen uit het canvas
	walls[0].y1 += 0.1;	//Animatie die word uitgevoerd
}
if(level == 14) {	//Reset de waarden weer naar standaard
		walls[0] = {	//
		x1: (innerWidth -19) / 3,	//
		x2: ((innerWidth -19) / 3) + (canvas.width/20),	//
		y1: (innerHeight -19) / 1.5,	//
		y2: ((innerHeight -19) / 1.5) + (canvas.height/2)	//
	};
	walls[1] = {	//
		x1: (innerWidth -19) / 4,	//
		x2: ((innerWidth -19) / 4) + (canvas.width/20),	//
		y1: (innerHeight -19) * 0,	//
		y2: ((innerHeight -19) * 0) + (canvas.height/4)	//
	};
		walls[2] = {	//
		x1: (innerWidth -19) / 1.8,	//
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),	//
		y1: (innerHeight -19) / 4,	//
		y2: ((innerHeight -19) / 4) + (canvas.height/2)	//
	};	
}
if(level == 15) {	//Als je bent aangekomen in level 15 zal de bovenste wall zich naar rechts uitbreiden. De middelste wall naar boven en de links onder wall zal verdwijnen
	walls[0].y1 += 0.5;	//Animatie die word uitgevoerd
	walls[0].y1 += 0.5;	//Animatie die word uitgevoerd
	walls[1].x2 += 0.5;	//Animatie die word uitgevoerd
	walls[2].y1 -= 0.5;	//Animatie die word uitgevoerd
	walls[2].y1 -= 0.5;	//Animatie die word uitgevoerd
}
if(level == 16) {	//Reset de waarden weer naar standaard
		walls[0] = {	//
		x1: (innerWidth -19) / 3,	//
		x2: ((innerWidth -19) / 3) + (canvas.width/20),	//
		y1: (innerHeight -19) / 1.5,	//
		y2: ((innerHeight -19) / 1.5) + (canvas.height/2)	//
	};
	walls[1] = {	//
		x1: (innerWidth -19) / 4,	//
		x2: ((innerWidth -19) / 4) + (canvas.width/20),	//
		y1: (innerHeight -19) * 0,	//
		y2: ((innerHeight -19) * 0) + (canvas.height/4)	//
	};
		walls[2] = {	//
		x1: (innerWidth -19) / 1.8,	//
		x2: ((innerWidth -19) / 1.8) + (canvas.width/20),	//
		y1: (innerHeight -19) / 4,	//
		y2: ((innerHeight -19) / 4) + (canvas.height/2)	//
	};
}
	



    for(var i = 0; i < walls.length; i++) {	//Hier word voor alle walls de waarden ingevuld
		ctx.beginPath();	//Tekenen op canvas
		ctx.fillStyle = "#2E2E2E"	//Vulstijl alle walls behalve finish (3)
		ctx.fillRect(walls[i].x1, walls[i].y1, walls[i].x2 - walls[i].x1, walls[i].y2 - walls[i].y1);	//Vierkant maken
		ctx.fillStyle = "#24A3F5"	//Vulstijl van finish
		ctx.fillRect(walls[3].x1, walls[3].y1, walls[3].x2 - walls[3].x1, walls[3].y2 - walls[3].y1);	//Vierkant maken
		
	}
}
//Niet meer relevant, was de responsive versie van de muurtjes maar dan niet in een array. (Oefenen)
/*function animateW() {

	var x = (innerWidth -19) /3// hoe groter hoe verder naar links
	var y = (innerHeight -19) /1.5 // hoe groter hoe verder naar boven
	var dx = x / 8
	var dy = y /1.1

	

	
		var x = (innerWidth -19) /4 // hoe groter hoe verder naar links
		var y = (innerHeight -19) * 0 // hoe groter hoe verder naar boven
		var dx = x / 6.5
		var dy = y + innerHeight / 4

		ctx.beginPath();
		ctx.fillStyle = "#595959"
		ctx.fillRect(x, y, dx, dy);
		
		
			var x = (innerWidth -19) /1.8 // hoe groter hoe verder naar links
			var y = (innerHeight -19) /4 // hoe groter hoe verder naar boven
			var dx = x / 14
			var dy = y * 2

			ctx.beginPath();
			ctx.fillStyle = "#595959"
			ctx.fillRect(x, y, dx, dy);
			
			
					var x = (innerWidth -19) /1.4 // hoe groter hoe verder naar links
					var y = (innerHeight -19) * 0// hoe groter hoe verder naar boven
					var dx = x / 18.5
					var dy = y + innerHeight / 3
					ctx.beginPath();
					ctx.fillStyle = "#595959"
					ctx.fillRect(x, y, dx, dy);
}
*/