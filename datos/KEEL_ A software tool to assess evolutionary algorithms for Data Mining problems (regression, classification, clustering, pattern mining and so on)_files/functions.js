<!--

  /**
  	This method is to avoid SPAM. It changes name+domain to a valid e-mail address
  */
  function cambiamail (buzon,dominio) {
    var res = "";
	var medio = '@';

    for (var n = 0; n < buzon.length; n++)
       res += String.fromCharCode(buzon.charCodeAt(n));
    if (res.indexOf('@') < 0)
       res = res + medio + dominio;

	location = "mail" + "to:" + res;
  }

  	/**
  		Makes an array of images
  	*/
    function MakeImageArray(n) {
      this.length = n;
      for (var i = 1; i<=n; i++) {
        this[i] = new Image();
      }
      return this
    }  

		function validar(){
			if(document.getElementById('login').value == ""){ 
				alert("You must introduce your login");
				document.getElementById('login').focus();
				return 0; 
			}
			if(document.getElementById('pass').value == ""){ 
				alert("You must introduce a password");
				document.getElementById('pass').focus();
				return 0; 
			}
			if(document.getElementById('confirm').value == ""){ 
				alert("You must confirm your password");
				document.getElementById('confirm').focus();
				return 0; 
			}
			if(document.getElementById('pass').value !=document.getElementById('confirm').value){ 
				alert("The password and the cofirmation are not equal");
				document.getElementById('confirm').focus();
				return 0; 
			}
			if(document.getElementById('name').value == ""){ 
				alert("You must introduce your name");
				document.getElementById('name').focus();
				return 0; 
			}
			if(document.getElementById('surname').value == ""){ 
				alert("You must introduce your surname");
				document.getElementById('surname').focus();
				return 0; 
			}
			if(document.getElementById('sign').value == ""){ 
				alert("You must introduce your signature");
				document.getElementById('sign').focus();
				return 0; 
			}
			if(document.getElementById('mail').value == ""){ 
				alert("You must introduce your mail address");
				document.getElementById('mail').focus();
				return 0; 
			}
			if(document.getElementById('type').value == ""){ 
				alert("You must introduce the kind of user you want to be");
				document.getElementById('type').focus();
				return 0; 
			}
			
			
			document.getElementById('form').submit(); 
		}    

	function mostrar(){
		if (document.getElementById('reference').value == 'article'){
			mostrarObjeto('area');
		}else{
			ocultarObjeto('area');
		}
	}
		
	function mostrarObjeto(obj) {
    	document.getElementById(obj).style.display = 'block';
	}

	function ocultarObjeto(obj) {
    	document.getElementById(obj).style.display = 'none';
	}				
      
// -->