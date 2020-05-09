function Hangman (word){
    this.word = word;
    this.visibleWord =[];
    for(let i=0; i<word.length; i++){
        this.visibleWord.push("_");
    }
    this.errorsLeft = 6;
    this.wrongSymbols = [];
}
Hangman.guess = function(letter){
    let err = true;
    for(let i = 0; i<this.word.length; i++){
        if(letter.toLowerCase() === this.word[i].toLowerCase()){
            this.visibleWord[i] = this.word[i];
            err = false;
        }
    }
    if(err){
        this.errorsLeft--;
        this.wrongSymbols.push(letter);
        console.log(`wrong letter, errors left ${this.errorsLeft} | ${this.wrongSymbols}`);
        if(this.errorsLeft <= 0){
            console.log("You lose!");
        }
    }
    else{
        console.log(this.visibleWord.join(""));
        if(check.call(this)){
            console.log("You won!");
        }
    }
    function check(){
        for(let i = 0; i<this.visibleWord.length; i++){
            if(this.visibleWord[i] === "_"){
                return false;
            }
        }
        return true;
    }
}
Hangman.getGuessedString = function(){
    return this.visibleWord.join("");
}
Hangman.getErrorsLeft = function(){
    return this.errorsLeft;
}
Hangman.getWrongSymbols = function(){
    return this.wrongSymbols;
}
Hangman.getStatus = function(){
    return this.visibleWord.join("") + " | errors left " + this.errorsLeft;
}
Hangman.startAgain = function(word){
    this.word = word;
    this.visibleWord =[];
    for(let i=0; i<word.length; i++){
        this.visibleWord.push("_");
    }
    this.errorsLeft = 6;
    this.wrongSymbols = [];
}
module.exports = Hangman;
