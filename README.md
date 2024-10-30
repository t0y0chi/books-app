# Book Search

Google Books APIを利用した書籍検索アプリケーション。

## 機能

- 書籍の検索（タイトル、著者名、ISBN）
- 検索結果のフィルタリング
  - 言語（日本語/英語）
  - 並び順（関連度/新着順）
  - 無料書籍のみ表示
- 書籍詳細情報の表示
- ダークモード対応
- レスポンシブデザイン

## 技術スタック

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Google Books API](https://developers.google.com/books)

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/t0y0chi/books-app.git
cd books-app

# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.localにGoogle Books APIキーを設定

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## 環境変数

| 変数名 | 説明 | 必須 |
|--------|------|------|
| NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY | Google Books APIキー | ✅ |

## デプロイ

このプロジェクトは [Vercel](https://vercel.com) にデプロイすることを推奨します。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fbooks-app)

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境の起動
npm start

# リントの実行
npm run lint
```
