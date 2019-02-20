
window.onmousewheel = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

    document.getElementById("logo1").style.height = "30px";
    document.getElementById("logo1").style.width = "30px";
   }
   else if (document.body.scrollTop == 0){
    document.getElementById("logo1").style.height = "100px";
    document.getElementById("logo1").style.width = "100px";
   }
   }

   function prelaz(target, duration){
       var target = document.querySelector(target);
       var targetPosition = target.getBoundingClientRect().top;
       var startPosition = window.pageYOffset;
       var distance = targetPosition - startPosition;
       var startTime = null;

       function animation(currentTime){
           if(startTime == null) startTime = currentTime;
           var timeElapsed = currentTime - startTime;
           var run = ease(timeElapsed, startPosition, targetPosition, duration);
           window.scrollTo(1, run);
           if(timeElapsed < duration) requestAnimationFrame(animation);
           console.log(timeElapsed)
       }
       function ease(t, b, c, d){
           t /= d / 2;
           if(t < 1) return c/2 * t *t +b;
           t--;
           return -c /2 * (t *(t-2) - 1) + b;
       }
       requestAnimationFrame(animation);
   }

   var kontakt1 = document.querySelector(".kontakt1");
   var kontakt2 = document.querySelector(".kontakt2");
   var oMeni1 = document.querySelector(".oMeni1");
   var oMeni2 = document.querySelector(".oMeni2");
   var galerija1 = document.querySelector(".galerija1");
   var galerija2 = document.querySelector(".galerija2");
   var tomatisTerapija1 = document.querySelector(".tomatisTerapija1");
   var tomatisTerapija2 = document.querySelector(".tomatisTerapija2");

   kontakt1.addEventListener("click",function(){
       prelaz('.kontakt2',4000);
   });
   
oMeni1.addEventListener("click",function(){
    prelaz('.oMeni2',2000);
});

galerija1.addEventListener("click",function(){
    prelaz('.galerija2',2000);
});
tomatisTerapija1.addEventListener("click",function(){
    prelaz('.tomatisTerapija2',2000);
});



 
