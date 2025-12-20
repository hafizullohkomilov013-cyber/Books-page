export async function getBooks() {
  try {
    const res = await fetch("http://localhost:5000/api/books");
    if (!res.ok) throw new Error("Backend ishlamayapti");
    const data = await res.json();
    return data.data;  
  } catch (error) {
    console.error(error);
    return [];
  }
}
