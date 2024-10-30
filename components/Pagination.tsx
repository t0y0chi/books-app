'use client';

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
}

export function Pagination({ totalItems, itemsPerPage = 10 }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      <Button
        variant="outline"
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageURL(currentPage - 1))}
      >
        前へ
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNumber = i + 1;
          return (
            <Button
              key={pageNumber}
              variant={currentPage === pageNumber ? "default" : "outline"}
              onClick={() => router.push(createPageURL(pageNumber))}
            >
              {pageNumber}
            </Button>
          );
        })}
        {totalPages > 5 && <span>...</span>}
      </div>
      <Button
        variant="outline"
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageURL(currentPage + 1))}
      >
        次へ
      </Button>
    </div>
  );
} 
