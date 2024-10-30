import { Card, CardContent } from "@/components/ui/card";
import { searchBooks } from "@/lib/google-books";
import Image from "next/image";
import Link from "next/link";
import { BookItem } from "@/types/google-books";
import { Pagination } from "./Pagination";
import { Badge } from "@/components/ui/badge";

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
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">検索結果が見つかりませんでした。</p>
        </div>
      );
    }

    return (
      <div>
        <div className="grid gap-4 md:grid-cols-2">
          {data.items.map((book: BookItem) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/books/${book.id}`}>
                <CardContent className="flex gap-4 p-4">
                  {book.volumeInfo.imageLinks?.thumbnail ? (
                    <div className="flex-shrink-0">
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail.replace('http:', 'https:')}
                        alt={book.volumeInfo.title}
                        width={128}
                        height={192}
                        className="object-cover rounded-md shadow-sm"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-[128px] h-[192px] bg-muted flex items-center justify-center rounded-md">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                  <div className="flex-grow space-y-2">
                    <h2 className="font-bold line-clamp-2 hover:text-primary transition-colors">
                      {book.volumeInfo.title}
                    </h2>
                    {book.volumeInfo.authors?.length && (
                      <p className="text-sm text-muted-foreground">
                        {book.volumeInfo.authors.join(', ')}
                      </p>
                    )}
                    {book.volumeInfo.publishedDate && (
                      <p className="text-sm text-muted-foreground">
                        出版: {book.volumeInfo.publishedDate}
                      </p>
                    )}
                    {book.volumeInfo.categories?.length && (
                      <div className="flex gap-2 flex-wrap">
                        {book.volumeInfo.categories.slice(0, 2).map((category) => (
                          <Badge key={category} variant="secondary">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <Pagination totalItems={data.totalItems} />
      </div>
    );
  } catch (e) {
    console.error(e);
    return (
      <div className="text-center py-12">
        <p className="text-red-500">エラーが発生しました。もう一度お試しください。</p>
      </div>
    );
  }
}
