const myLibrary = [];

// function Book() {

// }

function addBookToLibrary(book) {
  myLibrary.push(book);
}

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

addBookToLibrary('test book');
addBookToLibrary('test1 book');
addBookToLibrary('test2 book');

render();
