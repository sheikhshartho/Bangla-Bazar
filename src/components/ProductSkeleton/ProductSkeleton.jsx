import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="rounded-3xl shadow-sm overflow-hidden p-4">
      <Skeleton height={180} />
      <Skeleton height={25} style={{ marginTop: 12 }} width="80%" />
      <div className="flex justify-between items-center mt-4">
        <Skeleton height={20} width={60} />
        <Skeleton height={20} width={40} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
