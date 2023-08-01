function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    if (this.read == true){
        var readStr = "read."
    }
    else{
        var readStr = "not read yet."
    }
    const str = this.title + " by " + this.author + " , " + this.pages + " pages, " + readStr
    return str
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)
console.log(theHobbit.info())