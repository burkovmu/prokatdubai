export function Loading() {
  return (
    <div className="flex items-center justify-center w-full min-h-[400px]">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full border-4 border-accent-400/20 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full border-4 border-accent-400 rounded-full animate-spin border-t-transparent" />
        </div>
      </div>
    </div>
  );
} 