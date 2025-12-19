import { getBooks } from "./getData.js";

const container = document.querySelector(".main-container"); 

async function init() {
  const books = await getBooks();
  UpdateUi(books);
}

export function UpdateUi(list) {
  container.innerHTML = "";

  list.forEach((book) => {
    container.innerHTML += `
      <div class="book-card" data-id="${book.id}">
        <img src="./img/istockphoto-475176444-612x612.jpg" alt="${
          book.title
        }" />
        <div class="book-content">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <div class="book-meta">
            <span> ${book.year} - year </span>
            <span>${book.genre} pages</span>
          </div>
          <div class="book-meta">
            <span class="badge">${book.genre ?? "Unknown"}</span>
          </div>
        </div>
      </div>
    `;
  });
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".book-card");
    if (!card) return;
    const bookId = card.getAttribute("data-id");
    window.location.href = `details.html?id=${bookId}`;
  });
}

document.addEventListener("DOMContentLoaded", init);
