const addModal = document.getElementById('add-modal');
const closeModal = document.getElementById('close-modal')
const submitModal = document.getElementById('submit-modal')
let myLibrary = [];

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
function addBookToLibrary(title,author,pages,read) {
    const book = new Book(title,author,pages,read);
    addBookCard(book);
    myLibrary.push(book)
    
}
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
   addModal.style.display = 'flex';
});

closeModal.addEventListener('click', () =>{
    const form = document.getElementById('modal-form');
    form.elements['title'].value = '';
    form.elements['author'].value = '';
    form.elements['pages'].value = '';
    form.elements['read'].checked = false;
    addModal.style.display = 'none';
});
submitModal.addEventListener('click',() =>{
    const form = document.getElementById('modal-form');
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    const read = form.elements['read'].checked;
    addBookToLibrary(title,author,pages,read);

    //close form;
    form.elements['title'].value = '';
    form.elements['author'].value = '';
    form.elements['pages'].value = '';
    form.elements['read'].checked = false;
    addModal.style.display = 'none';
})

function addBookCard (book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readButton = document.createElement('button')
    const remove = document.createElement('button')
    const booksGrid = document.getElementById('booksGrid')
    const buttonGroup = document.getElementById('button-group');
    bookCard.classList.add('book-card');
    remove.classList.add('button-group')
    remove.id = 'remove-button';
    readButton.classList.add('read-button')
    readButton.id = 'read-button2';
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " pages";
    remove.innerText = "Remove";
    if (book.read === true){
        readButton.classList.add('active');
        readButton.innerText = "Read";
    }
    else if(book.read === false){
        readButton.classList.add('inactive');
        readButton.innerText = "Read";
    }
    readButton.addEventListener('click', () =>{
        
        if (book.read == true){
            book.read = !book.read;
            readButton.classList.remove('active');
            readButton.classList.add('inactive');
        }
        else{
            book.read = !book.read;
            readButton.classList.remove('inactive');
            readButton.classList.add('active');
        }
        
    });
    remove.addEventListener('click', () =>{
        var book = myLibrary.find(books => books.title === title.textContent);
        myLibrary.splice(myLibrary.findIndex(book => book === book) , 1)
        remove.parentElement.style.display = 'none';

    })
    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(readButton);
    bookCard.append(remove);
    booksGrid.append(bookCard);
    
    
};