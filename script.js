//this shows the text that is hidden otherwise, in an accordion fashion
let questions = document.getElementsByClassName("question_txt");
let i;

for(i=0; i<questions.length; i++){
    questions[i].addEventListener("click", function(){
      /* Toggle between adding and removing the "active" class, to highlight the button that controls the answer */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active answer */
      let answer = this.nextElementSibling; //nextElementSibling takes the next element in the HTML
      let other_answer;
      if (answer.style.display === "block") {//hides answer if clicked
        answer.style.display ="none";
      } else { //shows answer if clicked but closes the other answers that are opened
        answer.style.display = "block";

        //closes all the other answers
        for(j=0; j<questions.length; j++){
          other_answer = questions[j].nextElementSibling;
          if(this != questions[j] && other_answer.style.display === "block"){
            questions[j].classList.toggle("active");
            other_answer.style.display = "none";
          }
        }
      }
    });
}