const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

interface SearchOptions {
  langRestrict?: string;
  orderBy?: string;
  filter?: string;
}

export async function searchBooks(query: string, page: number = 1, options: SearchOptions = {}) {
  const startIndex = (page - 1) * 10;
  const params = new URLSearchParams({
    q: query,
    startIndex: startIndex.toString(),
    maxResults: '10',
  });

  if (options.langRestrict) {
    params.append('langRestrict', options.langRestrict);
  }
  if (options.orderBy) {
    params.append('orderBy', options.orderBy);
  }
  if (options.filter) {
    params.append('filter', options.filter);
  }

  const response = await fetch(`${GOOGLE_BOOKS_API_URL}?${params.toString()}`);

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
