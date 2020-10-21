const myLibrary = [];

const bookForm = document.createElement('form');
bookForm.innerHTML = `
<label htmlFor="title">Title: </label>
<input type="text" name="title" id="title"/><br>
<label htmlFor="Author">Author: </label>
<input type="text" name="Author" id="author"/><br>
<label htmlFor="Rating">Rating: </label>
<input type="number" min="1" max="5" name="rating" id="rating"/><br>
<div class="is-read">
  <label htmlFor="isRead">Have you read it?</label>
  <input type="checkbox" name="isRead" id="isRead"/>
  </div><br>
<label htmlFor="pages">How many pages?</label>
<input type="number" min="1" max="10000" name="pages" id="pages"/><br>
<button type="submit">Add</button>
`;

function renderForm() {
  document.body.appendChild(bookForm);
}

function removeForm() {
  document.body.removeChild(bookForm);
}

const formButton = document.getElementById('new-book');
formButton.addEventListener('click', renderForm);
// document.body.insertAdjacentElement('beforeend', formButton);

class Book {
  constructor(title, author, rating = 1, isRead, pages) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.isRead = isRead;
    this.pages = pages;
  }
}

function render() {
  let result = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    result += `<div class="container">
    <div class="mt-4 mb-5 p-5 h-25 border w-25 book-div" id="book-modal">
      <label for="title">
        Title: ${myLibrary[i].title}
      </label>
      <label for="author">
        Author: ${myLibrary[i].author}
      </label>
      <label for="rating">
        Rating: ${myLibrary[i].rating === '' ? 'None' : myLibrary[i].rating}
      </label>
      <label for="pages">
        Pages: ${myLibrary[i].pages}
      </label>
      <button class="btn btn-warning" onclick="readStatus(${myLibrary[i].isRead}, ${i})">${myLibrary[i].isRead ? 'Done Reading' : 'Didn\'t Read yet'}</button>
      <button class="btn btn-danger" onclick="deleteBook(${i})">Delete</button>
    </div>
  </div>`;
  }
  document.getElementById('book-list').innerHTML = result;
}
function readStatus(read, idx) {
  if (read === true) {
    myLibrary[idx].isRead = false;
    render();
    return false;
  }
  myLibrary[idx].isRead = true;
  render();
  return true;
}

function deleteBook(idx) {
  myLibrary.splice(idx, 1);
  render();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  // console.log(myLibrary);
  render();
}

function clearInput() {
  document.getElementById('title').value = ' ';
  document.getElementById('author').value = ' ';
  document.getElementById('rating').value = ' ';
  document.getElementById('isRead').checked = false;
  document.getElementById('pages').value = ' ';
}

function validateInput(bookElements) {
  let valid = true;
  bookElements.forEach(value => {
    if (value === '') {
      valid = false;
    }
  });

  if (valid === false) {
    alert('Title, Author and Pages can\'t be blank');
  }

  return valid;
}

function addNewBook(e) {
  // alert('Inside Add New Book function');
  e.preventDefault();
  const book = new Book(
    e.target.title.value,
    e.target.author.value,
    e.target.rating.value,
    e.target.isRead.checked,
    e.target.pages.value,
  );
  // console.log(book);

  if (validateInput([e.target.title.value, e.target.author.value, e.target.pages.value])) {
    addBookToLibrary(book);
  }
  clearInput();
  removeForm();
}

bookForm.addEventListener('submit', addNewBook);
// addBookToLibrary('test book');
// addBookToLibrary('test1 book');
// addBookToLibrary('test2 book');
// render();