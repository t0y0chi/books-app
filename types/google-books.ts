export interface GoogleBooksResponse {
  kind: string;
  totalItems: number;
  items: BookItem[];
}

export interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
    language?: string;
    previewLink?: string;
    industryIdentifiers?: Array<{
      type: string;
      identifier: string;
    }>;
  };
} 
