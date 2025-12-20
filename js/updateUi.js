let container = document.querySelector(".main-container");

export function UpdateUi(list) {
  container.innerHTML = "";   

  list.forEach((book) => {
    container.innerHTML += `
      <div class="book-card">
        <img 
          src="./img/istockphoto-475176444-612x612.jpg" 
          alt="${book.title}"
        />
        <div class="book-content">
          <div class ="year">
            <h2 class="book-title">${book.title}ddcdcdcdc - year</h2>
            <h3 class="book-title">${book.title}</h3>
          <div/>
          <p class="book-author">${book.author}</p>

          <div class="book-meta">
            
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

