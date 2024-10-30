'use client';

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h2 className="text-2xl font-bold">エラーが発生しました</h2>
      <p className="text-gray-600">
        申し訳ありません。予期せぬエラーが発生しました。
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>もう一度試す</Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          ページを更新
        </Button>
      </div>
    </div>
  );
} 
