import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;