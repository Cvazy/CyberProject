import SideArrow from "shared/assets/images/Icon/side_arrow.svg";
import { PaginationItem } from "./PaginationItem";
import { Link } from "react-router-dom";

interface PaginationProps {
  productsQnt: number;
  currentPage: string;
}

export const Pagination = ({ productsQnt, currentPage }: PaginationProps) => {
  const pagesQnt = Math.ceil(productsQnt / 9);

  return (
    <div className={"flex items-center gap-4 flex-nowrap"}>
      <Link
        to={`/catalog?page=${+currentPage - 1}`}
        className={"flex items-center justify-center hover:scale-110"}
      >
        <button
          type={"button"}
          disabled={currentPage === "1"}
          className={
            "bg-none border-none disabled:cursor-not-allowed disabled:opacity-50"
          }
        >
          <img
            src={SideArrow}
            className={"min-w-6 min-h-6 max-w-6 max-h-6"}
            alt={"Side arrow"}
            loading={"lazy"}
            draggable={"false"}
          />
        </button>
      </Link>

      <div className={"flex items-center gap-2 flex-nowrap"}>
        {Array.from({ length: pagesQnt }, (_, i) => i + 1).map((page) => (
          <PaginationItem
            key={page}
            num={page}
            isActive={+currentPage! === page}
          />
        ))}
      </div>

      <Link
        to={`/catalog?page=${+currentPage + 1}`}
        className={"flex items-center justify-center hover:scale-110"}
      >
        <button
          type={"button"}
          disabled={Math.ceil(productsQnt / 9) === +currentPage}
          className={
            "bg-none border-none disabled:cursor-not-allowed disabled:opacity-50"
          }
        >
          <img
            src={SideArrow}
            className={"min-w-6 min-h-6 max-w-6 max-h-6 rotate-180"}
            alt={"Side arrow"}
            loading={"lazy"}
            draggable={"false"}
          />
        </button>
      </Link>
    </div>
  );
};
