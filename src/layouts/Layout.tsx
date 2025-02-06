import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout() {
    return (
        <div className="container">
            <div className="content">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
            </div>
        </div>
    );
}
