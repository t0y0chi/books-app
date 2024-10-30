import { Card, CardContent } from "@/components/ui/card";
import { searchBooks } from "@/lib/google-books";
import Image from "next/image";
import Link from "next/link";
import { BookItem } from "@/types/google-books";
import { Pagination } from "./Pagination";
import { SearchFilters } from "./SearchFilters";

interface SearchResultsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SearchResults({ searchParams }: SearchResultsProps) {
  const query = searchParams.q as string;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const langRestrict = searchParams.langRestrict as string;
  const orderBy = searchParams.orderBy as string;
  const filter = searchParams.filter as string;

  if (!query) {
    return null;
  }

  try {
    const data = await searchBooks(query, page, { langRestrict, orderBy, filter });

    if (!data.items?.length) {
      return <p className="text-center">検索結果が見つかりませんでした。</p>;
    }

    return (
      <div>
        <SearchFilters />
        <div className="grid gap-4 md:grid-cols-2">
          {data.items.map((book: BookItem) => (
            <Card key={book.id}>
              <CardContent className="flex gap-4 p-4">
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <div className="flex-shrink-0">
                    <Image
                      src={book.volumeInfo.imageLinks.thumbnail.replace('http:', 'https:')}
                      alt={book.volumeInfo.title}
                      width={128}
                      height={192}
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h2 className="font-bold mb-2">
                    <Link href={`/books/${book.id}`} className="hover:underline">
                      {book.volumeInfo.title}
                    </Link>
                  </h2>
                  {book.volumeInfo.authors?.length && (
                    <p className="text-sm text-gray-600">
                      著者: {book.volumeInfo.authors.join(', ')}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Pagination totalItems={data.totalItems} />
      </div>
    );
  } catch (error) {
    return <p className="text-center text-red-500">エラーが発生しました。もう一度お試しください。</p>;
  }
} 
