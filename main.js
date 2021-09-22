let booklibrary = {};
// Отображение модалки
$(document).ready(function () {
  let modalBtn = document.getElementById("button-add");
  let modalWindow = document.getElementById("modal");
  let cancelModalBtn = document.getElementById("modal-hide");
  let saveModalBtn = document.getElementById("modal-save");

  modalBtn.addEventListener("click", function openModal() {
    modalWindow.style.display = "block";
  });

  cancelModalBtn.addEventListener("click", function cancelModal() {
    modalWindow.style.display = "none";
  });

  // Обработка формы
  saveModalBtn.addEventListener("click", function addBook() {
    let formData = $("form").serializeArray();
    // метод библиотеки для преобразовани формы в массив
    let newArray = [];

    for (key in formData) {
      newArray[formData[key]["name"]] = formData[key]["value"]; //использовать мар
    }
    let randomId = Math.round(Math.random() * 1000); //добавил уникальный айди для каждой книги
    booklibrary[randomId] = newArray;

    generateBook(randomId);
    console.log(booklibrary);
  });

  // Отрисовка библиотеки
  function generateBook(article) {
    let divList = document.createElement("div");
    divList.className = "book-list";

    let cover = document.createElement("div");
    cover.className = "book-list__img";
    cover.style.backgroundImage = `url(${booklibrary[article]["book-url"]})`;

    let desk = document.createElement("div");
    desk.className = "book-list-desk";

    let bookTittle = document.createElement("h2");
    bookTittle.className = "book-list__tittle";
    bookTittle.innerHTML = booklibrary[article]["book-name"];

    let bookAutor = document.createElement("h4");
    bookAutor.className = "book-list__subtittle";
    bookAutor.innerHTML = booklibrary[article]["book-autor"];

    let bookYear = document.createElement("span");
    bookYear.className = "book-list__year";
    bookYear.innerHTML = booklibrary[article]["book-year"];

    divList.appendChild(cover);
    divList.appendChild(desk);
    desk.appendChild(bookTittle);
    desk.appendChild(bookAutor);
    desk.appendChild(bookYear);

    $("book-list").append(divList);
  }
});
