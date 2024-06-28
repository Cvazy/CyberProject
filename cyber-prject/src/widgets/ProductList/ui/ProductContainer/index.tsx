import { ProductSchema } from "../../model";
import { ProductCard } from "../../../../entities";

interface ProductContainerTypes {
  productsData: ProductSchema[];
}

export const ProductContainer = ({ productsData }: ProductContainerTypes) => {
  return (
    <div className={"w-full"}>
      <div
        className={
          "grid grid-cols-2 gap-4 w-full md:grid-cols-3 lg:grid-cols-4"
        }
      >
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
