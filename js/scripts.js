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

function playGame() {
	document.getElementById("start").style.display="none";
	document.getElementById("averageBox").style.display="none";
	document.getElementById("results").style.display="block";
	var clickTimes = [];
	var average;
	var clickedTime;
	var newBoxTime;
	var reactionTime;
	Date.now();

	function newBox() {
		var time = Math.random() * 5000;
		setTimeout(function() {
			var top = Math.random()*200;
			var left = Math.random() * 78;
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
		clickTimes.push(reactionTime);
		console.log(clickTimes);
		document.getElementById("reactionTime").innerHTML=reactionTime;
		this.style.display="none";
		newBox();
	};

	document.getElementById("getAverage").onclick=function() {
		document.getElementById("box").style.display="none";
		document.getElementById("averageBox").style.display="block";
		document.getElementById("results").style.display="none";
		average = 0;
		for (var i = 0; i < clickTimes.length; i++) {
			average+=clickTimes[i];
		}
		average = average/clickTimes.length;
		document.getElementById("average").innerHTML=average;
	}
 	newBox();
}