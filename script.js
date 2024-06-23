let save=document.getElementById('submit').addEventListener('click',function(){
	let user=document.getElementById('Username').value;
	let pass=document.getElementById('password').value;
	if((localStorage.getItem("Username")==user) && (localStorage.getItem("password")==pass)){
		document.getElementById('submit').insertAdjacentHTML('afterend', `<button type="submit" id="existing">Login as existing user</button>`);
		document.getElementById('existing').addEventListener('click',function(){
			alert('Logged in as'+ user);
		}
		)
	}
	else{
		if(document.getElementById('checkbox').checked){
			localStorage.setItem("Username",user);
			localStorage.setItem("password",pass);
		alert('Logged in as'+ user);
			}
			else{
				alert('Logged in as'+ user);
				localStorage.removeItem("Username");
				localStorage.removeItem("password");	
			}	
		}
}
	