$(document).ready(function() {
	function getRandomColor() {
		var characters = "0123456789ABCDEF".split("");
		var hexString = "#";
		for (var i = 0; i < 6; i++) {
			hexString += characters[Math.round(Math.random() * 15)];
		}
		return hexString;
	}

	var clickedTime;
	var newBoxTime;
	var reactionTime;
	Date.now();
	function newBox() {
		var time = Math.random() * 5000;
		setTimeout(function() {
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