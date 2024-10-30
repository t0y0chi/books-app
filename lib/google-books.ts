const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function searchBooks(query: string, page: number = 1) {
  const startIndex = (page - 1) * 10;
  const response = await fetch(
    `${GOOGLE_BOOKS_API_URL}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=10`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return response.json();
}

export async function getBookById(id: string) {
  const response = await fetch(`${GOOGLE_BOOKS_API_URL}/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch book details');
  }

  return response.json();
} 
