import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";
import ProductCardSkeleton from "@/components/Skeletons/ProductCardSkeleton";
import Test from "@/components/Test";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-[calc(100vh-370px)]">
      <Test></Test>
      {JSON.stringify(session)}
      <section>
        {/* home  */}
        <Banner></Banner>
      </section>
      <section>
        <div className="py-5">
          <h1 className="text-3xl font-bold text-secondary mb-3">
            Featured Products
          </h1>
          <Suspense fallback={<ProductCardSkeleton />}>
            <Products></Products>
          </Suspense>
        </div>
      </section>
    </div>
  );
}
