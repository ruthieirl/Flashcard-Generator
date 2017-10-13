var ClozeCard = function(text, cloze) {
	this.text = "text";
	this.cloze = "cloze";
	
	console.log(this.text)
	console.log(this.cloze)

	//partial is the text with the cloze replaced with a blank
	this.partial = this.text.replace(this.cloze, "__________");
	console.log(this.partial);
};

module.exports = ClozeCard;