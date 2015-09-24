$(document).ready(function() {
	function getRandomColor() {
		var characters = "0123456789ABCDEF".split("");
		var hexString = "#";
		for (var i = 0; i < 6; i++) {
			hexString += characters[Math.round(Math.random() * 15)];
		}
		return hexString;
	}

	function getShape() {
		var randomNumber = Math.round(Math.random() * 3);
		if (randomNumber == 2) {
			return "100%";
		} else {
			return "0";
		}
	}

	var clickedTime;
	var newBoxTime;
	var reactionTime;
	Date.now();
	function newBox() {
		var time = Math.random() * 5000;
		setTimeout(function() {
			var top = Math.random()*200;
			var left = Math.random() * 80;
			document.getElementById("box").style.top=top+"px";
			document.getElementById("box").style.left=left+"%";
			document.getElementById("box").style.backgroundColor=getRandomColor();
			document.getElementById("box").style.borderRadius=getShape();
			document.getElementById("box").style.display="block";
			newBoxTime = Date.now();
		}, time);
	}

	document.getElementById("box").onclick=function() {
		clickedTime = Date.now();
		reactionTime = (clickedTime - newBoxTime)/1000;
		document.getElementById("reactionTime").innerHTML=reactionTime;
		this.style.display="none";
		newBox();
	};
	newBox();

});