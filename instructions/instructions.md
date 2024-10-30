# 書籍検索アプリケーション PRD (Product Requirements Document)

## 1. 概要
Google Books APIを利用した書籍検索アプリケーション。ユーザーが簡単に書籍を検索し、詳細情報を閲覧できるサービス。

## 2. 目的
- ユーザーが効率的に書籍を検索できる
- 書籍の詳細情報を分かりやすく表示する
- モバイルフレンドリーなレスポンシブデザイン
- 高速なページロードと快適なUX

## 3. 技術スタック
- フレームワーク: Next.js 14 (App Router)
- スタイリング: Tailwind CSS
- UIコンポーネント: shadcn/ui
- API: Google Books API
- デプロイ: Vercel (推奨)

## 4. 機能要件

### 4.1 検索機能
- キーワード検索
  - タイトル
  - 著者名
  - ISBN
- 検索結果の表示（ページネーション付き）
- 検索フィルター
  - 出版年
  - 言語
  - 無料書籍のみ表示

### 4.2 書籍詳細表示
- 基本情報
  - タイトル
  - 著者
  - 出版社
  - 出版日
  - ページ数
  - カテゴリ
- 表紙画像
- 説明文
- プレビューリンク（利用可能な場合）
- ISBNコード

### 4.3 UI/UX要件
- レスポンシブデザイン
  - モバイル（< 768px）
  - タブレット（768px - 1024px）
  - デスクトップ（> 1024px）
- ダークモード対応
- ローディング状態の表示
- エラーハンドリング
- 無限スクロールまたはページネーション

## 5. 非機能要件

### 5.1 パフォーマンス
- First Contentful Paint (FCP) < 1.5秒
- Time to Interactive (TTI) < 3.0秒
- 検索結果の表示 < 1.0秒

### 5.2 SEO対応
- 動的メタタグ生成
- OGP対応
- サイトマップ生成

### 5.3 アクセシビリティ
- WAI-ARIA対応
- キーボード操作対応
- スクリーンリーダー対応

## 6. 実装フェーズ

### Phase 1: 基本機能実装
1. プロジェクトセットアップ
2. 基本的な検索機能
3. 検索結果一覧表示
4. 書籍詳細ページ

### Phase 2: UI/UX改善
1. レスポンシブデザイン最適化
2. ダークモード実装
3. ローディング状態の改善
4. エラーハンドリング実装

## 7. ディレクトリ構造
```
├── README.md
├── app
│   ├── favicon.ico
│   ├── fonts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── lib
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 8. API設計

### 8.1 Google Books API
エンドポイント: `https://www.googleapis.com/books/v1/volumes`

主なクエリパラメータ:
- q: 検索クエリ
- startIndex: 開始位置
- maxResults: 取得件数
- langRestrict: 言語フィルター
- orderBy: ソート順

### 8.2 内部API Routes
- GET /api/search
  - クエリパラメータ:
    - q: 検索キーワード
    - page: ページ番号
    - filter: フィルター条件
- GET /api/book/[id]
  - パスパラメータ:
    - id: 書籍ID
