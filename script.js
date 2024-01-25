let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-Score");
const computerScore_span = document.getElementById("computer-Score");
const scoreBorad_div = document.querySelector(".Score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function covertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}


function win(userChoice, computerChoice) {
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
  userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML =  `${covertToWord(userChoice)} ${smallUserWord} beats ${covertToWord(computerChoice)} ${smallCompWord}, You Win!`
userChoice_div.classList.add('green-glow')
setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}



function lose(userChoice, computerChoice) {
    const smallUserWord ="user".fontsize(3).sub();
    const smallCompWord ="comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${covertToWord(userChoice)} ${smallUserWord} loses to ${covertToWord(computerChoice)} ${smallCompWord}, You Lost...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}


function draw(userChoice, computerChoice) {
      const smallUserWord ="user".fontsize(3).sub();
      const smallCompWord ="comp".fontsize(3).sub();
      const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML =  `${covertToWord(userChoice)} ${smallUserWord} equals ${covertToWord(computerChoice)} ${smallCompWord}, Its a Draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}













function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
      case "pr":
      case "sp":
win(userChoice, computerChoice)
      break;
    case "rp":
      case "ps":
      case "sr":
lose(userChoice, computerChoice)
break;
      case "rr":
      case "ss":
      case "pp":
draw(userChoice, computerChoice)
      break;
  }
}


function main() {
rock_div.addEventListener('click', () => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));
}

main()
