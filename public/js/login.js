$(document).ready(function() {
  $( "#login-form" ).on( "submit", function( event ) {
    event.preventDefault();

    console.log( $( this ).serializeArray() );
    let data =$( this ).serializeArray() ;
    let obj ={
      email:data[0].value,
      password:data[1].value,
    };
    console.log(obj);

    var http = new XMLHttpRequest();
      http.open('POST',localStorage.getItem('url') +'login', true);
      http.setRequestHeader('Content-type', 'application/json');
      http.send(JSON.stringify(obj)); // Make sure to stringify

      http.onreadystatechange = function() {

     // console.log(http.responseText);
       
      if(http.status == 200) {
       
             var json = JSON.parse(http.responseText);
             console.log(http.responseText);
             //localStorage.setItem("token",json.Authorization);
             localStorage.setItem("Authorization",json.Authorization);

             const httpuser = new XMLHttpRequest();
             httpuser.open('GET', localStorage.getItem('url')+'rest/v1/identity', true);
             httpuser.setRequestHeader('Content-type', 'application/json');
             httpuser.setRequestHeader('Authorization',json.Authorization);
             httpuser.send();
             httpuser.onreadystatechange = function(){
             var jsonuser = JSON.parse(httpuser.responseText);
             console.log(jsonuser);
            // localStorage.setItem("user",JSON.stringify(jsonuser.data.user));
             localStorage.setItem("UserLog",JSON.stringify(jsonuser.data.user));
             localStorage.setItem("ROLE",JSON.stringify(jsonuser.data.user.role.role));
             localStorage.setItem("username",JSON.stringify(jsonuser.data.username));
             localStorage.setItem("date",JSON.stringify(jsonuser.data.date));
             localStorage.setItem("time",JSON.stringify(jsonuser.data.time));
            console.log("tu mama");
             window.location.href = "cotizador.html";
             }
            // $(".alertito").alert()
      }else{
        $.notify("Usuario o contraseña Incorrecta",{ autoHideDelay: 2500,  globalPosition: 'top center', hideAnimation: 'slideUp',showAnimation: 'slideDown',hideDuration: 200, gap: 2});
      }

      };
  });
 
});
