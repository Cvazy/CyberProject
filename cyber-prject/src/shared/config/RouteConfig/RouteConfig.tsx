import { RouteProps } from "react-router-dom";
import {
  AboutPage,
  AuthPage,
  CartPage,
  CatalogPage,
  CheckoutPage,
  ContactPage,
  MainPage,
  OrderPage,
  ProductPage,
  LkPage,
} from "pages";

export enum AppRoutes {
  ABOUT = "about",
  CONTACT = "contacts",
  CART = "cart",
  CHECKOUT = "checkout",
  MAIN = "main",
  LOGIN = "login",
  REGISTER = "register",
  CATALOG = "catalog",
  PRODUCT = "product",
  ORDER = "order",
  PROFILE = "profile",
  WISHLIST = "wishlist",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
  [AppRoutes.CATALOG]: "/catalog",
  [AppRoutes.CHECKOUT]: "/checkout",
  [AppRoutes.PRODUCT]: "/product",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.ORDER]: "/order",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.WISHLIST]: "/wishlist",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.CONTACT]: "/contacts",
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

  [AppRoutes.PROFILE]: {
    path: RoutePaths.profile,
    element: <LkPage />,
  },

  [AppRoutes.WISHLIST]: {
    path: RoutePaths.wishlist,
    element: <LkPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },

  [AppRoutes.CONTACT]: {
    path: RoutePaths.contacts,
    element: <ContactPage />,
  },

  [AppRoutes.CHECKOUT]: {
    path: RoutePaths.checkout,
    element: <CheckoutPage />,
  },
};
