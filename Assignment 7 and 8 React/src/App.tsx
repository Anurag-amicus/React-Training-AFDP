import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/products" replace />}
            />

            <Route
                path="/products"
                element={<ProductListingPage />}
            />

            <Route
                path="/home"
                element={<HomePage />}
            />
        </Routes>
    );
}

export default App;