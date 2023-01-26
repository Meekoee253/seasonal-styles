$("document").ready(function(){
     $('.seasons a').click(function(e){//find all a tags inside class of seasons
         e.preventDefault();//stop default submission
         var season = $(this).attr("href");//contents of href attribute of this element
         //alert(season);//

         season = season.toLowerCase();

          switch(season){

               case "spring":
                    $("#logo").attr("src","images/spring.gif");

                    $("html").css("background-color","#2B7129");
               break;
               case "summer":
                    $("#logo").attr("src","images/summer.gif");

                    $("html").css("background-color","#EBA52B");
               break;
               case "fall":
                    $("#logo").attr("src","images/fall.gif");

                    $("html").css("background-color","#A81124");
               break;
               case "winter":
                    $("#logo").attr("src","images/winter.gif");

                    $("html").css("background-color","#005393");
               break;
               case "default":
                    $("#logo").attr("src", "images/four-seasons.gif");
                    $("html").css("background-color","white");
                break;
               
               
               default: 
                    alert("You didnt hit a case!");
          }





     });
 });
 