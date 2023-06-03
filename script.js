//this shows the text that is hidden otherwise, in an accordion fashion
let que = document.getElementsByClassName("question_txt");
let i;

for(i=0; i<que.length; i++){
    que[i].addEventListener("click", function(){
      /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display ="none";
      } else {
        panel.style.display = "block";
      }
    });
}