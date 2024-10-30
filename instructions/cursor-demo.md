# 手順

1. PRD(Product Requirements Document)を作成
2. プロジェクトのセットアップ
3. Cursor Composerでフロントエンドの実装

## 1. PRD(Product Requirements Document)を作成

Claudeで下記のようなプロンプトを入力する。

```
書籍検索アプリを作成したい。prdを作成して。next 14(app router), tailwind, shadcn, Google Books APIを使いたい。
```

出力結果をコピーしてinstructions.mdに貼り付ける。

## 2. プロジェクトのセットアップ

### Next.js 14をインストール

```bash
npx create-next-app@14
```

```bash
cd books-app
npm run dev
```

instructionsディレクトリを作成し、その中にinstructions.mdを移動させる。

### shadcnをインストール

```bash
npx shadcn@latest init
```

### ファイル構成をinstructions.mdに記述

```bash
tree -L 2 -I "node_modules|.git"
.
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

## 3. Cursor Composerでフロントエンドの実装

`cmd + shift + i`でCursor Composerを開く。

下記のようなプロンプトを入力し実行。

```
@instructions.md をもとに書籍検索アプリを作成して。
まずは4.1 検索機能を作成して
```

```
次に4.2 書籍詳細表示を作成して
```

# 参考資料
- https://www.youtube.com/watch?v=2PjmPU07KNs
- https://www.cursor.com/
- https://ui.shadcn.com/
- https://developers.google.com/books/docs/v1/getting_started
