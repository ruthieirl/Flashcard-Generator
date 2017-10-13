var ClozeCard = function(text, cloze) {
	this.text = "text";
	this.cloze = "cloze";
	
	console.log(this.text)
	console.log(this.cloze)

	this.partial = this.text.replace(this.cloze, "__________");
	console.log(this.partial);
};

//if the cloze text is in the text, remove the cloze to get the partial

module.exports = ClozeCard;