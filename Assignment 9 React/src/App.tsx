import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import CheckoutControlledPage from "./pages/CheckoutPages/CheckoutControlledPage";
import CheckoutRHFPage from "./pages/CheckoutPages/CheckoutRHFPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/checkout/controlled" replace />} />

            <Route path="/products" element={<ProductListingPage />} />

            <Route path="/home" element={<HomePage />} />

            <Route
                path="/checkout/controlled"
                element={<CheckoutControlledPage />}
            />

            <Route
                path="/checkout/React-Hook-Form"
                element={<CheckoutRHFPage />}
            />
        </Routes>
    );
}

export default App;
