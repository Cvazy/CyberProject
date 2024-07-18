import { Link } from "react-router-dom";
import { ProductSchema } from "../../../../widgets/ProductList/model";

export const SearchedElement = ({
  id,
  name,
  imageUrl,
  price,
}: ProductSchema) => {
  return (
    <Link to={`/product?id=${id}`} className={"w-full hover:opacity-60"}>
      <div className={"w-full p-2"}>
        <div className={"flex items-center gap-2 w-full"}>
          <img
            src={imageUrl}
            alt={name}
            className={"block w-10"}
            loading={"lazy"}
            draggable={"false"}
          />

          <div className={"flex items-start justify-between gap-4 w-full"}>
            <div className="flex flex-col items-start w-full">
              <p className="text-sm font-medium text-left text-black">{name}</p>

              <p className="text-black font-normal text-xs w-full overflow-hidden text-ellipsis text-nowrap whitespace-nowrap">
                #{id}
              </p>
            </div>

            <p className="text-sm font-medium text-right text-black">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
