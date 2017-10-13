//This is what I thought was correct.
//var ClozeCard = function(text, cloze) {
	//this.text = "text";
	//this.cloze = "cloze";
	
	//console.log(this.text)
	//console.log(this.cloze)

	//partial is the text with the cloze replaced with a blank
	//this.message = this.text.replace(this.cloze, "__________");
	//console.log(this.message);
//};

//module.exports = ClozeCard;

//I was told that this is what my code should look like. 
//So confused. WHY???


    if (!(this instanceof ClozeCard)){
            return new ClozeCard (text, cloze);
        }
    
        this.full = text;
        this.cloze = cloze;
        this.part = " ";
        if (this.full.includes(this.cloze)) {
            this.part = this.full.replace(this.cloze, "...");
        }
        else {
            console.log("Whoops! Invalid Cloze - Try Again.")
        }
    }
module.exports = ClozeCard;