import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";
import SearchForm from "@/components/SearchForm";
import { BookOpen } from "lucide-react";
import { SearchFilters } from "@/components/SearchFilters";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  const hasQuery = Boolean(searchParams.q);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {!hasQuery && (
          <div className="text-center mb-8">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Book Search</h1>
            <p className="text-muted-foreground mb-8">
              Google Books APIを使用して、膨大な書籍データベースから検索できます
            </p>
          </div>
        )}
        <SearchForm />
        {hasQuery && (
          <>
            <div className="mb-6">
              <SearchFilters />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchResults searchParams={searchParams} />
            </Suspense>
          </>
        )}
      </div>
    </main>
  );
}
