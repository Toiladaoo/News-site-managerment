//lib
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store/store";
import "./index.css";

//import pages;
import App from "./App";
import Login from "./pages/Authentication/Login";
import Forget from "./pages/Authentication/Forget";
import Register from "./pages/Authentication/Register";
import Branch from "./pages/admin/branch/Branch";
import StatusButton from "./components/project/order/StatusButton";
import {
  URL_STAFF,
  URL_FORGET,
  URL_LOGIN,
  URL_REGISTER,
  URL_ORDER,
  URL_BRANCH,
  URL_VOUCHER,
  URL_VOUCHER_ADD,
  URL_PRODUCTTYPE,
  URL_CITY,
  URL_NEWS
} from "./utils/constraint";

import Customer from "./pages/admin/customer/Customer";
import AddCustomer from "./components/project/customer/AddCustomer";
import { StaffPage } from "./pages/admin/staff/StaffPage";
import { OrderPage } from "./pages/admin/order/OrderPage";
import VoucherPage from "./pages/admin/voucher/VoucherPage";
import AddVoucher from "./components/project/voucher/AddVoucher";
import ProductType from "./pages/admin/productTyppe/ProductType";
import CityPage from "./pages/admin/city/CityPage";
import News from "./pages/admin/news/NewsPage";
import NewsType from "./pages/admin/news/NewsTypePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <News />,
      },
      {
        path: URL_NEWS,
        element: <NewsType />,
      },
      
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
