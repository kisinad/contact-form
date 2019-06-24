
//Styles the H1
var h1 = document.querySelector("h1");
h1.style.color = "#900C3F";
h1.style.textAlign="center";


var allcontacts = [];

// Function stores variable on clicking save
function contact_function(ev) {
	// ev.preventDefautl();
	fname = document.querySelector("#fname").value;
	//alert(fname);
	sname = document.querySelector("#sname").value;
	tel = document.querySelector("#tel").value;
	email = document.querySelector("#email").value;
	address = document.querySelector("#address").value;
	//Submitted = "true";

	if (fname.length > 10 ) {
    	alert("The First name must have no more than 10 characters");  
    	Submitted = "false";
	}
	if (sname.length >10) {
    	alert("The Second name must have no more than 10 characters");  
    	Submitted = "false";
	}
	if (fname.length=="" || sname.length=="" || tel.length==""|| email.length==""||address=="") {
    	alert("Name field can not be empty!");  
    	Submitted = "false";
	}
	else{
		var contact = [fname,sname,tel,email,address];
		allcontacts.push(contact);
		console.log(allcontacts);
	}

	//alert("Saved!");
	//alert(array[0]);
	

}
//Function to search through saved contacts
function search_function(){
var phrase = document.querySelector("#search-id").value;
 for (var y=0; y<allcontacts.length; y++){
 	var contactarray = allcontacts[y];
 	if(contactarray[0].includes(phrase)){
 		console.log(contactarray);
 		document.getElementById("search").innerHTML = contactarray[0];
 	}
 }
}

 	
 //  contactFields.appendChild(div);
 //}
 // contactFields.style.display = "block";
 //  var div = document.createElement("div");
 //  div.innerHTML = fname.value;

// }

