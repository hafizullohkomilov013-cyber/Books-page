let container = document.querySelector(".main-container");

export function UpdateUi(list) {
  container.innerHTML = "";
  console.log(list);    

  list.forEach((book, index) => {
    container.innerHTML += `
      <div class="book-card">
        <img 
          src="./img/istockphoto-475176444-612x612.jpg" 
          alt="${book.title}"
        />
        <div class="book-content">
          <div class ="year">
            <h3 class="book-title">${book.year} - year</h3>
            <h3 class="book-title">${book.title}</h3>
          <div/>
          <p class="book-author">${book.author}</p>

          <div class="book-meta">
            <span>⭐{ ${book.id} "N/A"}</span>
            <span>${book.pages ?? "?"} pages</span>
          </div>

          <div class="book-meta">
            <button class="badge">${book.genre ?? "Unknown"}</button>
          </div>
        </div>
      </div>
    `;
  });
}

