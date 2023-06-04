//this shows the text that is hidden otherwise, in an accordion fashion
let que = document.getElementsByClassName("question_txt");
let i;

for(i=0; i<que.length; i++){
    que[i].addEventListener("click", function(){
      /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      let panel = this.nextElementSibling; //nextElementSibling takes the next element in the HTML
      let other_panel
      if (panel.style.display === "block") {//hides panel if clicked
        panel.style.display ="none";
      } else { //shows panel if clicked but closes the other panels that are opened
        panel.style.display = "block";

        //closes all the other panels
        for(j=0; j<que.length; j++){
          other_panel = que[j].nextElementSibling;
          if(this != que[j] && other_panel.style.display === "block"){
            que[j].classList.toggle("active");
            other_panel.style.display = "none";
          }
        }
      }
    });
}