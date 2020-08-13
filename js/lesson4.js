
window.onload = function(){
	var picture_elems = document.getElementsByClassName("list-pics");


	

	// for(var i = 0; i < picture_elems.length; i++){
	// 	picture_elems[i].addEventListener('click', function(){
	// 		var dogName = this.parentElement.getElementsByClassName('dog-name')[0];
	// 		var dogPrice = this.parentElement.getElementsByClassName('adopt-price')[0];
			
	// 		alert( "Dog Name:" + dogName.textContent + "\n" + "Dog Price:" + dogPrice.textContent + "\n" + "breed:breed");			
	// 	})
	// }

	var purchase_elems = document.getElementsByClassName("adopt-btn");

	for(var i = 0; i < purchase_elems.length; i++){
		purchase_elems[i].addEventListener('click', function(){
			// get price of selected dog
			var dogPrice_str = this.parentElement.parentElement.getElementsByClassName('adopt-price')[0].textContent;
			var dogPrice_int = parseFloat(dogPrice_str.substring(1));
			//get current total price	
			var curTotalPrice_str = document.getElementsByClassName('header-price')[0].textContent;
			var curTotalPrice_int = parseFloat(curTotalPrice_str.substring(1));
			//total price information update
			var totalPrice = dogPrice_int + curTotalPrice_int;
			document.getElementsByClassName('header-price')[0].innerHTML = "$" + totalPrice;

			alert("Total Price:"+ totalPrice);
		})
	}
}

function alertDogInfo(name, breed, adoptionFee) {
		let txt = 'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
			alert(txt);
}
