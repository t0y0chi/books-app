'use client';

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete('page'); // リセットページ
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 mb-6">
      <Select
        value={searchParams.get('langRestrict') || 'all'}
        onValueChange={(value) => updateFilter('langRestrict', value === 'all' ? null : value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="言語を選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">すべての言語</SelectItem>
          <SelectItem value="ja">日本語</SelectItem>
          <SelectItem value="en">英語</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={searchParams.get('orderBy') || 'relevance'}
        onValueChange={(value) => updateFilter('orderBy', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="並び順" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">関連度順</SelectItem>
          <SelectItem value="newest">新着順</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={() => {
          const currentFilter = searchParams.get('filter');
          updateFilter('filter', currentFilter === 'free-ebooks' ? null : 'free-ebooks');
        }}
        className={
          searchParams.get('filter') === 'free-ebooks'
            ? 'bg-primary text-primary-foreground'
            : ''
        }
      >
        無料の書籍のみ
      </Button>
    </div>
  );
} 
