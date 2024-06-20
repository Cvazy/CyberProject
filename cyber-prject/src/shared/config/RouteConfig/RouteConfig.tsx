import { RouteProps } from "react-router-dom";
import {
  AuthPage,
  CartPage,
  CatalogPage,
  MainPage,
  OrderPage,
  ProductPage,
} from "pages";

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  REGISTER = "register",
  CATALOG = "catalog",
  PRODUCT = "product",
  CART = "cart",
  ORDER = "order",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
  [AppRoutes.CATALOG]: "/catalog",
  [AppRoutes.PRODUCT]: "/product",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.ORDER]: "/order",
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },

  [AppRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <AuthPage />,
  },

  [AppRoutes.REGISTER]: {
    path: RoutePaths.register,
    element: <AuthPage />,
  },

  [AppRoutes.CATALOG]: {
    path: RoutePaths.catalog,
    element: <CatalogPage />,
  },

  [AppRoutes.PRODUCT]: {
    path: RoutePaths.product,
    element: <ProductPage />,
  },

  [AppRoutes.CART]: {
    path: RoutePaths.cart,
    element: <CartPage />,
  },

  [AppRoutes.ORDER]: {
    path: RoutePaths.order,
    element: <OrderPage />,
  },
};
