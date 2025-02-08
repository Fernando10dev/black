var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width= "3100"
var height= "4000"

canvas.width = width;
canvas.height =height;

ctx.fillStyle="#f2f2f2"
ctx.fillRect(0,0,width,height)

function points(color,totalnum){
	
	ctx.beginPath()
	ctx.lineWidth = 0.5
	ctx.lineJoin="round"
	ctx.lineCap="round"
	for (var i = 0; i < totalnum; i++) {
	var x =  Math.floor((Math.random() * (1900-1200))+1200)
	var	y =Math.floor((Math.random() * (3000-1000))+1000)
	var	s = Math.floor((Math.random() * (3-1)+1))

	var valor = getvalor(x, y);

	ctx.save();
	ctx.translate(x, y);
	render(valor);
	ctx.restore();
	}

	function getvalor(x, y) {
	return (Math.sin(x * 0.005) + Math.sin(y *-0.001)) * Math.PI * -2
	}

	function render(valor) {
	ctx.rotate(valor);
	ctx.beginPath()
	ctx.strokeStyle="#262626"
	ctx.fillStyle=color
	ctx.arc(700,300,s,0,2*Math.PI)
	ctx.stroke()
	ctx.fill()
	
	
	}
}
//points("black",800000)
//points("black",500000)

function downloadImage() {
	const imageURL = canvas.toDataURL('image/png');
	const link = document.createElement('a');
	link.href = imageURL;
	link.download = 'BlackOnBlack';
	link.click();
}
window.addEventListener('keydown', (event) => {
	if (event.key.toLowerCase() === 's') {
		downloadImage();
	}
});

canvas.addEventListener('touchstart', () => {
	downloadImage();
});