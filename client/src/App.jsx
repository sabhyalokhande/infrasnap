import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

// Common Components
// import CustomCursor from "@/components/CustomCursor";
// import LoadingScreen from "@/components/LoadingScreen";

import CustomCursor from './Components/CustomCursor'
import LoadingScreen from './Sections/LoadingScreen'
// Layouts and Pages
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Settings from "@/routes/dashboard/Settings";
// import VideoLoader from "./Sections/VideoLoader";
import SignUp from "./Sections/SignUp";
import SignIn from "./Sections/SignIn";
// import SiteDailyReport from "./dump/SiteDailyReport";
import SiteDailyReport from "./routes/dashboard/SiteDailyReport";
import RawMaterial from "./dump/RawMaterial";
// import HeroSection from "./Sections/Hero2";
import HeroSection from "./Sections/HeroSection";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const router = createBrowserRouter([
        // Landing Website Routes
        {
            path: "/",
            element: <HeroSection />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        }, 
        // {
        //     path: "/form1",
        //     element: <SiteDailyReport />,
        // },
         {
            path: "/form2",
            element: <RawMaterial />,
        },
        // Dashboard Routes
        {
            path: "/dashboard",
            element: <Layout />,
            children: [
                { path: "page", index: true, element: <DashboardPage /> },
                { path: "analytics", element: <SiteDailyReport/>  },
                { path: "reports", element: <h1 className="title">Reports</h1> },
                { path: "customers", element: <h1 className="title">Customers</h1> },
                { path: "new-customer", element: <h1 className="title">New Customer</h1> },
                { path: "verified-customers", element: <h1 className="title">Verified Customers</h1> },
                { path: "products", element: <h1 className="title">Products</h1> },
                { path: "new-product", element: <h1 className="title">New Product</h1> },
                { path: "inventory", element: <h1 className="title">Inventory</h1> },
                { path: "settings", element: <Settings/> },
            ],
        },
    ]);

    return (
        <main>
            <CustomCursor />
            <ThemeProvider storageKey="theme">
                {isLoading ? (
                    <LoadingScreen onComplete={handleLoadingComplete} />
                ) : (
                    <RouterProvider router={router} />
                )}
            </ThemeProvider>
        </main>
    );
}

export default App;
