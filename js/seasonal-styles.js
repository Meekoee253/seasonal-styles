$("document").ready(function(){
     let counter = 0;
     $("div#myDiv p").each(function(){
          counter++;
          $(this).prepend(counter + "] ");
          //code goes here
     });

});

/*
     let myPTags = document.querySelectorAll("div#myDIv p");
     console.log(myPTags);
*/ 
     /*
     document.querySelector("div#myDiv").style.backgroundColor="yellow";

     document.querySelector("div#myDiv").innerHTML = "Heres some new text!";
*/