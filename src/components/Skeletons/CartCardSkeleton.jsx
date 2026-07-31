const CartCardSkeleton = () => {
  return (
    <div className="flex gap-5 p-5 border border-base-300 rounded-2xl animate-pulse">
      <div className="w-28 h-28 rounded-xl bg-base-300"></div>

      <div className="flex-1 space-y-3">
        <div className="h-6 w-2/3 rounded bg-base-300"></div>

        <div className="h-4 w-24 rounded bg-base-300"></div>

        <div className="flex justify-between items-center">
          <div className="h-10 w-32 rounded bg-base-300"></div>

          <div className="h-10 w-24 rounded bg-base-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CartCardSkeleton;
