window.onload = function() {
   document.getElementsByTagName('body')[0].onkeydown = function(e) {
     e.preventDefault();
     e.stopPropagation();
     console.log("YGMAILINATOR: ", e);
   }
};