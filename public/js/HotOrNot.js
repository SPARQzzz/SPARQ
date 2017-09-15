var currentImage = 1;
function showDiv(which) {
   for(i = 0; i < 3; i++) {
      document.getElementById("image"+i).style.display="none";
   }
   //in the next 2 lines, you make sure which isn't lower than 1, and isn't greater than the number of images
   if(which < 1) which = 1;
   if(which > 3) which = 3;
   document.getElementById("image" + which).style.display = "block";
   currentImage = which;
} ;