let button = document.getElementById('request');
button.addEventListener("click", function() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:8080/", true);
	xhr.onreadystatechange = function(){
		if (this.readyState === this.DONE) {
			if(this.status !== 200) {
				console.log("ОШИБКА!" + this.status);
			}else{
				console.log(this.responseText);
			}
		}
	};
	xhr.send();
})