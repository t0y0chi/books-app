import { Skeleton } from "@/components/ui/skeleton";

export default function BookLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-10 w-[120px] mb-6" />
        <div className="rounded-lg border p-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
          <div className="grid md:grid-cols-[250px_1fr] gap-6 mt-6">
            <Skeleton className="h-[375px] w-full" />
            <div className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
