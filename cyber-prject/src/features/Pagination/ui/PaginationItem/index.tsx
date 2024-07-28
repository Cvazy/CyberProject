import { Link } from "react-router-dom";

interface PaginationItemProps {
  num: number;
  isActive: boolean;
}

export const PaginationItem = ({ num, isActive }: PaginationItemProps) => {
  return (
    <Link
      to={`/catalog?page=${num}`}
      className={`flex items-center justify-center min-w-8 min-h-8 rounded-md ${isActive ? "bg-black" : "bg-[#F6F6F6]"} hover:scale-110`}
    >
      <p
        className={`${isActive ? "text-white" : "text-black"} text-base text-center font-medium`}
      >
        {num}
      </p>
    </Link>
  );
};
