import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";
import SearchForm from "@/components/SearchForm";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">書籍検索</h1>
      <div className="max-w-2xl mx-auto">
        <SearchForm />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
