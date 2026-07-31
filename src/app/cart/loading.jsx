import CartCardSkeleton from "@/components/Skeletons/CartCardSkeleton";

const Loading = () => {
  return (
    <div className="py-10">
      <div className="h-10 w-40 bg-base-300 rounded animate-pulse mb-6"></div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-5">
          <CartCardSkeleton />
          <CartCardSkeleton />
          <CartCardSkeleton />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-base-100 border border-base-300 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="h-6 w-40 bg-base-300 rounded animate-pulse"></div>

              <div className="h-4 w-full bg-base-300 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-base-300 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-base-300 rounded animate-pulse"></div>

              <div className="h-12 w-full bg-base-300 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
