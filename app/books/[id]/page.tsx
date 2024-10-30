import { getBookById } from "@/lib/google-books";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookDetails } from "@/components/BookDetails";

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBookById(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-6">
          <Button variant="outline">← 検索結果に戻る</Button>
        </Link>
        <BookDetails book={book} />
      </div>
    </main>
  );
} 
