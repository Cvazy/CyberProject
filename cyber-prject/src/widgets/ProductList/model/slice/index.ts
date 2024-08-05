import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductList,
  FetchNewArrivalProducts,
  FetchBestsellerProducts,
  FetchFeaturedProducts,
  ProductSchema,
  FilterItem,
} from "../index";
import { FetchPaginationProducts } from "pages/CatalogPage/model";
import mergeFavoriteProducts from "../utils/mergeFavoriteProducts";

const initialProductListState: ProductList = {
  productsData: [],
  productFilters: undefined,
  isLoading: false,
  error: "",
  sorted: undefined,
  selectedFilterSettings: undefined,
  productsCount: 0,
};

export const ProductListSlice = createSlice({
  name: "ProductList",
  initialState: initialProductListState,
  reducers: {
    setFavoriteProduct(
      state,
      action: PayloadAction<{ productId: number; userId: number }>,
    ) {
      const { productId, userId } = action.payload;

      state.productsData = state.productsData.map((product) =>
        product.id === productId
          ? { ...product, favorite: !product.favorite }
          : product,
      );

      let favoriteProducts =
        JSON.parse(
          localStorage.getItem(`favoriteProducts-${userId}`) || "[]",
        ) || [];

      const changedProduct = state.productsData.find(
        (product) => product.id === productId,
      ) as ProductSchema;

      if (changedProduct?.favorite) {
        favoriteProducts.push(changedProduct);
      } else {
        favoriteProducts = favoriteProducts.filter(
          (product: ProductSchema) => product.id !== productId,
        );
      }

      localStorage.setItem(
        `favoriteProducts-${userId}`,
        JSON.stringify(favoriteProducts),
      );
    },

    setSortedValue(state, action: PayloadAction<string>) {
      state.sorted = action.payload;
    },

    setSortedProductList(
      state,
      action: PayloadAction<{
        sortedValue?: string;
        currentPage: string;
        userId: number;
        productsList: ProductSchema[];
        selectedFilterSettings: FilterItem[];
      }>,
    ) {
      const {
        sortedValue,
        currentPage,
        userId,
        productsList,
        selectedFilterSettings,
      } = action.payload;

      const limit = 9;
      let sortedProducts = [...productsList];

      const shortPropertyArrays = productsList
        .filter(({ shortProperties }) => {
          return !!(shortProperties && shortProperties[0].name);
        })
        .map(({ shortProperties }) => shortProperties);

      const filters: { [key: string]: Set<string> } = {};

      shortPropertyArrays.forEach((element) => {
        element?.forEach((item) => {
          if (!filters[item.name]) {
            filters[item.name] = new Set();
          }
          filters[item.name].add(item.value);
        });
      });

      state.productFilters = Object.keys(filters).map((title) => ({
        title,
        values: Array.from(filters[title]),
      }));

      if (sortedValue === "A-Z") {
        sortedProducts.sort((a: ProductSchema, b: ProductSchema) =>
          a.name.localeCompare(b.name),
        );
      } else if (sortedValue === "Z-A") {
        sortedProducts.sort((a: ProductSchema, b: ProductSchema) =>
          b.name.localeCompare(a.name),
        );
      }

      if (selectedFilterSettings.length) {
        sortedProducts = sortedProducts.filter((product) => {
          return product.shortProperties?.some((item) => {
            const productProperty = selectedFilterSettings.find(
              ({ title }) => title === item.name,
            );

            return !!(
              productProperty && productProperty.values.includes(item.value)
            );
          });
        });
      }

      state.productsCount = sortedProducts.length;

      const start = (+currentPage - 1) * limit;
      const paginatedProducts = sortedProducts.slice(start, start + limit);

      state.productsData = mergeFavoriteProducts(paginatedProducts, userId);
    },

    setFilterSettings(state, action) {
      const { title, values } = action.payload;
      const value = values[0];

      if (state.selectedFilterSettings) {
        const existingFilterIndex = state.selectedFilterSettings.findIndex(
          (filter) => filter.title === title,
        );

        if (existingFilterIndex !== -1) {
          const existingFilter =
            state.selectedFilterSettings[existingFilterIndex];
          const valueIndex = existingFilter.values.indexOf(value);

          if (valueIndex === -1) {
            state.selectedFilterSettings[existingFilterIndex] = {
              ...existingFilter,
              values: [...existingFilter.values, value],
            };
          } else {
            const updatedValues = existingFilter.values.filter(
              (v) => v !== value,
            );
            if (updatedValues.length > 0) {
              state.selectedFilterSettings[existingFilterIndex] = {
                ...existingFilter,
                values: updatedValues,
              };
            } else {
              state.selectedFilterSettings.splice(existingFilterIndex, 1);
            }
          }
        } else {
          state.selectedFilterSettings = [
            ...state.selectedFilterSettings,
            action.payload,
          ];
        }
      } else {
        state.selectedFilterSettings = [action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchNewArrivalProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchNewArrivalProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchNewArrivalProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      })

      .addCase(FetchBestsellerProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchBestsellerProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchBestsellerProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      })

      .addCase(FetchFeaturedProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchFeaturedProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchFeaturedProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An unknown error has occurred";
      })

      .addCase(FetchPaginationProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(FetchPaginationProducts.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchPaginationProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occurred while loading the goods";
      });
  },
});

export const { actions: ProductListActions } = ProductListSlice;
export const { reducer: ProductListReducer } = ProductListSlice;
