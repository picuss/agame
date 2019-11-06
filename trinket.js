function ID(a){
	var s = document.getElementById(a);
	return s;
}

function drawbox(canvas,x,y,w,h,angel,color){
	canvas.setTransform(1,0,0,1,0,0);
	canvas.translate(x, y);
	canvas.rotate(angel * Math.PI/180);
	var lc = canvas.fillStyle;
	canvas.fillStyle = color;
	canvas.fillRect( -.5*w, -.5*h, w, h);
	canvas.fillStyle = lc;
	canvas.setTransform(1,0,0,1,0,0);
}

function drawarc(canvas,x,y,r,angel,color){
	canvas.fillStyle = color;
	canvas.strokeStyle = color;
	canvas.fillStyle = color;
	canvas.arc(x, y, 50, 0, 2 * Math.PI);
}

function drawimage(canvas,img,x,y,angel){ // просто рисуем изображение
	canvas.setTransform(1,0,0,1,0,0);
	canvas.translate(x, y);
	canvas.rotate(angel * Math.PI/180);
	canvas.drawImage(img,-.5*img.naturalWidth, -.5*img.naturalHeight);
	canvas.setTransform(1,0,0,1,0,0);
}

function drawimage2(canvas,img,x,y,w,h,angel){ // с размером
	canvas.setTransform(1,0,0,1,0,0);
	canvas.translate(x, y);
	canvas.rotate(angel * Math.PI/180);
	canvas.drawImage(img,-.5*w, -.5*h,w,h);
	canvas.setTransform(1,0,0,1,0,0);
}

function drawline(canvas,x,y,x2,y2,color){ //просто линия
	canvas.beginPath();
	canvas.strokeStyle = color;
	canvas.moveTo(x,y);
	canvas.lineTo(x2,y2);
	canvas.stroke();
}

function MyCanvas(a){
	var s = document.getElementById(a).getContext("2d");
	return s;
}

function CreateCanvas(id,x,y){
	ID(id).innerHTML='<canvas id="c" width="'+x+'" height="'+y+'"></canvas>';
}

function Drvpolygon(canvas,p1x,p1y,p2x,p2y,p3x,p3y,p4x,p4y,color){
	var r=49,g=96,b=33;
	var clr;
	var lj = Math.round(((p2y - p1y + p3y - p4y) / 2));

	if (p2y>p1y){
		clr = "rgb("+(r+lj)+","+(g+Math.round(lj*1.2))+","+(b+Math.round(lj*1.5))+")";
	} else {
		clr = "rgb("+(r+Math.round(lj/4))+","+(g+Math.round(lj/4*1.2))+","+(b+Math.round(lj/4*1.5))+")";
	}

	canvas.fillStyle = clr;

	canvas.beginPath();
	canvas.moveTo(p1x, p1y);
	canvas.lineTo(p2x+1,p2y);
	canvas.lineTo(p3x+1,p3y+1);
	canvas.lineTo(p4x,p4y+1);

	canvas.closePath();
	canvas.fill();	
	canvas.strokeStyle = "#000";
/*
	
	canvas.strokeStyle = "#000";
	canvas.strokeText(1, p1x + 10, p1y);
	canvas.strokeText(2, p2x - 10, p2y);
	canvas.strokeText(3, p3x - 10, p3y);
	canvas.strokeText(4, p4x + 10, p4y);

*/

	//canvas.strokeText(clr, p1x + 10, p1y-80);
}