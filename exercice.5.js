function exerciceIII() {	

	function timer() {
		let elem = document.querySelector("#timer");
		elem.innerText = (parseInt(elem.innerText) - 1) + "";
		if (parseInt(elem.innerText) <= 3) {
			elem.style.backgroundColor = "red";
		}
	}

	document.querySelector("#timer").innerText = "9";
	var setInt1 = setInterval(timer, 1000);
	setTimeout(function() {clearInterval(setInt1); alert("Temps écoulé!");} ,10000);

}

function exerciceIV() {

	function click(event) {
		let list = document.querySelectorAll(".reponse");
		for (let i = 0; i < list.length; i = i+1) {
			if (list[i] == event.target) {
				list[i].style.backgroundColor = "red";
			}
			else {
				list[i].style.backgroundColor = "grey"; 
			}
		}
	}

	function move(event) {
		let avatar = document.querySelector("img");
		event.target.innerText = "";
		event.target.appendChild(avatar);
		//console.log(event);
	}

	addEventListener("click", click);

	/*addEventListener("click", move);*/

}

function exerciceV() {


}

exerciceIII();
exerciceIV();
exerciceV();