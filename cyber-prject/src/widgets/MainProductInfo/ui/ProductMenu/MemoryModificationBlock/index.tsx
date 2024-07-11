import { Link } from "react-router-dom";

interface MemoryModificationBlockProps {
  productId: number;
  memoryValue: string;
  currentModification: string;
}

export const MemoryModificationBlock = ({
  productId,
  memoryValue,
  currentModification,
}: MemoryModificationBlockProps) => {
  return (
    <Link
      to={`/product?id=${productId}`}
      className={`${currentModification === memoryValue ? "bg-black" : ""} border border-solid border-black rounded-lg w-full hover:scale-105`}
    >
      <div className={"flex items-center justify-center py-4 px-6 w-full"}>
        <p
          className={`text-sm !leading-4 font-medium text-center ${currentModification === memoryValue ? "text-white" : "text-black"}`}
        >
          {memoryValue}
        </p>
      </div>
    </Link>
  );
};
