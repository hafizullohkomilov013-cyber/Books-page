import { getBooks } from "./getData.js";
import { UpdateUi } from "./index.js";

let Input = document.getElementById("searchInput");

const books = await getBooks()

UpdateUi(books)

function search (query) {
    let filter = query.trim().toLowerCase();
    return books.filter(item => {
        return item.title.toLowerCase().includes(filter);
    })
}


Input.addEventListener("input", (e) => {
  let inputCountr = e.target.value
  let res = search(inputCountr)
  UpdateUi(res)
});