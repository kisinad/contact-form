var h1 = document.querySelector('h1');
h1.style.color = "red";
h1.style.textAlign="center";

var button = document.getElementById('button-id').addEventListener('click', buttonClick());

var buttonClick = () =>{
	document.querySelector('#text').style.backgroundColor = '#f4f4f4'; 
};


// // Function to modify the text content of the paragraph
// const changeText = () => {
//     const p = document.querySelector('p');

//     p.textContent = 'I changed because of an event listener.';
// }

// // Listen for click event
// const button = document.querySelector('#button');
// button.addEventListener('click', changeText);
