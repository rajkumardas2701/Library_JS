const myLibrary = [];

const bookForm = document.createElement('form');
bookForm.innerHTML = `
<label htmlFor="title">title</label>
<input type="text" name="title" id="title"/>
<label htmlFor="Author">Author</label>
<input type="text" name="Author" id="author"/>
<label htmlFor="Rating">Rating</label>
<input type="number" min="1" max="5" name="rating" id="rating"/>
<div class="is-read">
  <label htmlFor="isRead">Have you read it?</label>
  <input type="checkbox" name="isRead" id="isRead"/>
  </div>
<label htmlFor="pages">How many pages?</label>
<input type="number" min="1" max="10000" name="pages" id="pages"/>
<button type="submit">Add</button>
`;

function renderForm() {
  document.body.appendChild(bookForm);
}

const formButton = document.getElementById('new-book').addEventListener('click', renderForm);
document.body.insertAdjacentElement('beforeend', formButton);

// function Book() {

// }

function render() {
  let result = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    result += `<div class="container">
    <div class="mt-4 mb-5 p-5 h-25 border w-25 book-div" id="book-modal">
      <label for="title">
        ${myLibrary[i]}
    </label>
    </div>
  </div>`;
  }
  document.getElementById('book-list').innerHTML = result;
}

function addBookToLibrary(book) {


  myLibrary.push(book);
  render();
}

// addBookToLibrary('test book');
// addBookToLibrary('test1 book');
// addBookToLibrary('test2 book');

