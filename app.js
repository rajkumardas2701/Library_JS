const myLibrary = [];

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

// Create a break line element
const br = document.createElement('br');

function addBookToLibrary() {
  // alert(`I'm in add book to library`);

  // Create a form synamically
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'submit.php');

  // Create an input element for Author
  const Au = document.createElement('input');
  Au.setAttribute('type', 'text');
  Au.setAttribute('name', 'Author');
  Au.setAttribute('placeholder', 'Author Name');

  // Create an input element for Title
  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('name', 'title');
  title.setAttribute('placeholder', 'Book Title');

  // Create an input element for pages
  const pages = document.createElement('input');
  pages.setAttribute('type', 'text');
  pages.setAttribute('name', 'pages');
  pages.setAttribute('placeholder', 'Enter no. pages');

  // Create an input element for read
  const read = document.createElement('input');
  read.setAttribute('type', 'radio');
  read.setAttribute('name', 'read');
  read.setAttribute('placeholder', 'Full Name');

  const unread = document.createElement('input');
  unread.setAttribute('type', 'radio');
  unread.setAttribute('name', 'unread');

  // create a submit button
  const s = document.createElement('input');
  s.setAttribute('type', 'submit');
  s.setAttribute('value', 'Submit');

  form.appendChild(Au);
  form.appendChild(br.cloneNode());

  form.appendChild(title);
  form.appendChild(br.cloneNode());

  form.appendChild(pages);
  form.appendChild(br.cloneNode());

  form.appendChild(read);
  form.appendChild(br.cloneNode());
  form.appendChild(unread);
  form.appendChild(br.cloneNode());

  // Append the submit button to the form
  form.appendChild(s);
  document.getElementsByTagName('body')[0].appendChild(form);

  // myLibrary.push();
  // render();
}

// addBookToLibrary('test book');
// addBookToLibrary('test1 book');
// addBookToLibrary('test2 book');

document.getElementById('new-book').addEventListener('click', addBookToLibrary);
