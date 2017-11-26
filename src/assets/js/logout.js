
function logout()
{ console.log("entre");
    var http = new XMLHttpRequest();
    http.open('POST',  localStorage.getItem('url')+'rest/v1/logout', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
   http.send();
  
    http.onreadystatechange = function() {
       // console.log("on");
          if (http.readyState === 4) {
            var json = JSON.parse(http.responseText);
            console.log("sali");
            if (json.success == true) {
             // $.notify(""+json.message,{className: "success" , autoHideDelay: 2500,  globalPosition: 'top center', hideAnimation: 'slideUp',showAnimation: 'slideDown',hideDuration: 200, gap: 2});    
           //  localStorage.clear();
             window.location.href = "index.html";

            } else {
              $.notify(""+json.message,{ autoHideDelay: 2500,  globalPosition: 'top center', hideAnimation: 'slideUp',showAnimation: 'slideDown',hideDuration: 200, gap: 2});
              
            }
          }
        }

};