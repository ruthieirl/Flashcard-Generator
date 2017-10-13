//pull in required info
var BasicCard = require("./basic-card.js");
var ClozeCard = require("./close-card.js");
var inquirer = require("inquirer");

//create variables for answers
var correct = 0;
var wrong = 0;

//empty card array
var flashArr = [];


inquirer
	.prompt([
		type: "list",
		name: "action",
		message: "Choose one.",
		choices: [
			"create-basic-card",
			"create-cloze-card",
			"basic-card-quiz",
			"cloze-card-quiz",
			"all-card-quiz"
			]
	]).then(switch(choices){

		case "create-basic-card":
		cardB();
		break;

		case "create-cloze-card":
		cardC();
		break;

		case "basic-card-quiz":
		cardBQuiz();
		break;

		case "cloze-card-quiz":
		cardCQuiz();
		break;

		case "all-card-quiz":
		cardsQuiz();
		break;
	
		case "exit":
		exit();
		break;
	});
