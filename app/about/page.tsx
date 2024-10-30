import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">About Book Search</h1>
          <p className="text-muted-foreground mb-8">
            このアプリケーションについて
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>概要</h2>
          <p>
            Book SearchはGoogle Books APIを利用した書籍検索アプリケーションです。
            膨大な書籍データベースから、タイトル、著者名、ISBNなどで書籍を検索できます。
          </p>

          <h2>主な機能</h2>
          <ul>
            <li>キーワードによる書籍検索</li>
            <li>言語フィルター</li>
            <li>並び順の変更</li>
            <li>無料書籍のフィルタリング</li>
            <li>書籍の詳細情報の表示</li>
            <li>ダークモード対応</li>
          </ul>

          <h2>技術スタック</h2>
          <ul>
            <li>Next.js 14 (App Router)</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>shadcn/ui</li>
            <li>Google Books API</li>
          </ul>

          <div className="flex justify-center gap-4 mt-8">
            <Link href="/">
              <Button>
                <BookOpen className="mr-2 h-4 w-4" />
                アプリを使ってみる
              </Button>
            </Link>
            <Link href="https://github.com/t0y0chi/books-app" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                ソースコードを見る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 
