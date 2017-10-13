//pull in required info
var BasicCard = require("./basic-card.js");
var ClozeCard = require("./close-card.js");
var inquirer = require("inquirer");

//create variables for answers
var correct = 0;
var wrong = 0;

//empty card array
var flashArr = [];