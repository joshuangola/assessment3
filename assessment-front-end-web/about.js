console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let cat = document.querySelector('#cat');

cat.addEventListener('mouseover', () => {
	alert("You are purrfect!");
})