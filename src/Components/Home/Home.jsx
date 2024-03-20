import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Matha from "../Header/Matha";

const Home = () => {
    return (
        <div className="text-center">
            <Matha></Matha>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;