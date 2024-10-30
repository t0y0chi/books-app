import { BookItem } from "@/types/google-books";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookDetailsProps {
  book: BookItem;
}

export function BookDetails({ book }: BookDetailsProps) {
  const { volumeInfo } = book;
  const isbn = volumeInfo.industryIdentifiers?.find(
    (id) => id.type === "ISBN_13" || id.type === "ISBN_10"
  )?.identifier;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{volumeInfo.title}</CardTitle>
        {volumeInfo.authors && (
          <CardDescription>著者: {volumeInfo.authors.join(", ")}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-[250px_1fr] gap-6">
          <div>
            {volumeInfo.imageLinks?.thumbnail && (
              <Image
                src={volumeInfo.imageLinks.thumbnail.replace("http:", "https:")}
                alt={volumeInfo.title}
                width={250}
                height={375}
                className="w-full object-cover rounded-lg shadow-md"
              />
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">基本情報</h3>
              <dl className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                {volumeInfo.publisher && (
                  <>
                    <dt className="text-gray-600">出版社:</dt>
                    <dd>{volumeInfo.publisher}</dd>
                  </>
                )}
                {volumeInfo.publishedDate && (
                  <>
                    <dt className="text-gray-600">出版日:</dt>
                    <dd>{volumeInfo.publishedDate}</dd>
                  </>
                )}
                {volumeInfo.pageCount && (
                  <>
                    <dt className="text-gray-600">ページ数:</dt>
                    <dd>{volumeInfo.pageCount}ページ</dd>
                  </>
                )}
                {isbn && (
                  <>
                    <dt className="text-gray-600">ISBN:</dt>
                    <dd>{isbn}</dd>
                  </>
                )}
                {volumeInfo.categories && (
                  <>
                    <dt className="text-gray-600">カテゴリ:</dt>
                    <dd>{volumeInfo.categories.join(", ")}</dd>
                  </>
                )}
              </dl>
            </div>
            {volumeInfo.description && (
              <div>
                <h3 className="font-semibold mb-1">概要</h3>
                <p className="text-sm whitespace-pre-wrap">{volumeInfo.description}</p>
              </div>
            )}
            {volumeInfo.previewLink && (
              <div className="pt-4">
                <a
                  href={volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>プレビューを見る</Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
