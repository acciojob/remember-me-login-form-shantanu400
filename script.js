//your JS code here. If required.
let save=document.getElementById('submit').addEventListener('click',function(){
	let user==document.getElementById('Username').value;
	let pass==document.getElementById('password').value;
	if((localStorage.getItem("Username")==user) && (localStorage.getItem("password")==pass)){
		document.getElementById('submit').innerHTML+=`
		<button type="submit" id="existing" value=" submit">Login as existing user</button>
		`;
		document.getElementById('existing').addEventListener('click',fuction(){
			alert('Logged in as');
		})
	}
	else{
		if(document.getElementById('checkbox').checked){
			localStorage.setItem("Username","user");
			localStorage.setItem("password","pass");
		
	}
	else{
		localStorage.removeItem("Username");
		localStorage.removeItem("password");
		
	}
	alert('Logged in as');

})
	}
	