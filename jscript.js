let compNum = 0;
let playerWins = 0;
let compWins = 0;
let compTurn;
let playerTurn;

let compare = document.querySelector("#compare");
let final = document.querySelector("#final");
let comp = document.querySelector("#compChoice");

let computerPlay = num => {
	if (num == 1) {
		return "rock";
	} else if (num == 2) {
		return "paper";
	} else return "scissors";
};

const playRound = (playerTurn, compTurn) => {
	let playerTurn2 = playerTurn.toLowerCase();

	if (playerTurn2 == "rock" && compTurn == "scissors") {
		playerWins++;
		compare.innerHTML = `You win! ${playerTurn2} beats ${compTurn}`;
	} else if (playerTurn2 == "paper" && compTurn == "rock") {
		playerWins++;
		compare.innerHTML = `You win! ${playerTurn2} beats ${compTurn}`;
	} else if (playerTurn2 == "scissors" && compTurn == "paper") {
		compare.innerHTML = `You win! ${playerTurn2} beats ${compTurn}`;
	} else if (playerTurn2 == compTurn) {
		compare.innerHTML = "TIE!";
	} else {
		compare.innerHTML = `You Lose! ${compTurn} beats ${playerTurn2}`;
		compWins++;
	}

	comp.innerHTML = `The computer chose ${compTurn}.`;
	final.innerHTML = `Player: ${playerWins} Computer: ${compWins}`;
};

let game = e => {
	//	for (let i = 0; i < 5; i++) {
	let playerTurn = e.target.textContent;

	let compNum = Math.floor(Math.random() * 3) + 1;

	let compTurn = computerPlay(compNum);

	let result = playRound(playerTurn, compTurn);
};

const div = document.createElement("div");

while (playerWins < 5 || compWins < 5) {
	div.textContent = "Player: wins";
	const buttons = document.querySelectorAll("button");

	buttons.forEach(button => {
		button.addEventListener("click", game);
	});

	game();
}
