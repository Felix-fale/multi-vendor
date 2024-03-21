import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  // Navigate,
  // useNavigate,
} from "react-router-dom";
// import loaderImg from "./assets/spinner.jpg";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  Homepage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  CheckoutPage,
  PaymentPage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useLayoutEffect } from "react";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import PretectedRoute from "./routes/ProtectedRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import { ShopDashboardPage, ShopHomePage } from "./routes/ShopRoutes";

function App() {
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  // part 1: 2:35m "User Activation with Frontent Implementation"
  //3:52:02 debut setup redux
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  // if (isSeller === true) {
  //   // navigate("/seller/${seller._id");
  //   return <Navigate to="/shop" replace />;
  // }

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* {loading ? (
        <div className="flex items-center justify-center h-screen">
          <img src={loaderImg} alt="Loading..." className="h-16 w-16" />
        </div>
      ) : ( */}
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route
            path="/profile"
            element={
              <PretectedRoute>
                <ProfilePage />
              </PretectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PretectedRoute>
                <CheckoutPage />
              </PretectedRoute>
            }
          />
          {/* Shop Routes */}
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
      {/* )} */}
    </>
  );
}

export default App;
