
  function checkinf(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var date=document.getElementById("date").value;
    var first=document.getElementById("first").value;
    var last=document.getElementById("last").value;
    var checkbox=document.getElementById("checkbox");
    var H=/[A-Z]/;
    var h=/[a-z]/;
    var number=/[0-9]/;
    var mau = /^[a-zA-Z0-9]+@[a-z.]+\.[a-z.]{1,100}$/;
    if (first==''){
        document.getElementById("first").placeholder="First Name*"  
        document.getElementById("fi").innerHTML="Required";    
        document.getElementById("first").style.color="red";
        document.getElementById("first").style.borderColor="red";
    }else{
        document.getElementById("first").placeholder="First Name"  
        document.getElementById("fi").innerHTML="";      
        document.getElementById("first").style.color="black";
        document.getElementById("first").style.borderColor="black";
    };
    if (last==''){
        document.getElementById("last").placeholder="Last Name*"   
        document.getElementById("la").innerHTML="Required";     
        document.getElementById("last").style.color="red";
        document.getElementById("last").style.borderColor="red";
    }else{
        document.getElementById("last").placeholder="Last Name"  
        document.getElementById("la").innerHTML="";      
        document.getElementById("last").style.color="black";
        document.getElementById("last").style.borderColor="black"
    };
    
    if(email==''){
        document.getElementById("email").style.borderColor="red";
    }else{
        document.getElementById("email").style.borderColor="black"; 
    };
    if(pass==''){
        document.getElementById("pass").style.borderColor="red";
    }else{
        document.getElementById("pass").style.borderColor="black"; 
    };
    if(date==''){
        document.getElementById("date").style.borderColor="red";
    }else{
        document.getElementById("date").style.borderColor="black"; 
  };
  if (pass.length > 8 || pass.length<1){
    document.getElementById("pa").innerHTML="&#10005; Minimum of 8 characters";
    document.getElementById("pass").style.borderColor="red";
} else{
    document.getElementById("pa").innerText="";
    document.getElementById("pass").style.borderColor="black";
};
if ( H.test(pass) && h.test(pass) && number.test(pass)){
    document.getElementById("pas").innerText="";
    document.getElementById("pass").style.borderColor="black";
}else{
    document.getElementById("pas").innerHTML="&#10005; Uppercase,lowercase letters, and one number";
    document.getElementById("pass").style.borderColor="red";
};
if (mau.test(email)) {
    var Email=email.split("@");
    var kemail=Email[1].split(".");
    if(kemail.length>3){
        document.getElementById("TB").innerHTML="&#10005; Invallid email address";
        document.getElementById("email").style.borderColor="red";
    } else{
        document.getElementById("TB").innerText="";
        document.getElementById("email").style.borderColor="black";
    }
}
else {
    document.getElementById("TB").innerHTML="&#10005; Invallid email address";
    document.getElementById("email").style.borderColor="red";
};
if (checkbox.checked){
    document.getElementById("chkbox").innerHTML="";
} else {
    document.getElementById("chkbox").innerHTML="Required";
}
}
  function checkclick(){
    var button=document.getElementById("b1");
    var button1=document.getElementById("b2");
    var Clicked = button.classList.contains('clicked')
        if (Clicked) {
            button.classList.remove('clicked');
            button.classList.add('bu');
            button1.classList.add('clicked')
            button1.classList.remove('bu');
        } else {
            button1.classList.remove('clicked');
            button1.classList.add('bu');
            button.classList.remove('bu');
            button.classList.add('clicked');

           
        }
  }
  function checkeye() {
    var pass = document.getElementById("pass");
    var eye = document.getElementById("eye");
    
    eye.addEventListener('click', function() {
        if (pass.type === 'password') {
            pass.type = 'text';
            eye.src = './image/eyeopen.jpg'; 
        } else {
            pass.type = 'password';
            eye.src = './image/eyeclose.jpg'; 
        }
    });
}
  
   
