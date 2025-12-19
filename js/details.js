import { getBooks } from "./getData.js";

const container = document.querySelector(".book-detail-box");

const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

async function showBookDetails() {
  const books = await getBooks();
  const book = books.find((b) => b.id === Number(bookId));

  if (!book) {
    container.innerHTML = "<p>Kitob topilmadi</p>";
    return;
  }

  container.innerHTML = `
    <div class="book-card detail">
      <img src="./img/istockphoto-475176444-612x612.jpg" alt="${book.title}" />
      <div class="book-content">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Genre:</strong> ${book.genre} "Unknown"</p>
        <p><strong>Description:</strong> ${
          book.description } "No description available."</p>
        <button onclick="window.history.back()">Go Back</button>
      </div>
    </div>
  `;
}

showBookDetails();
