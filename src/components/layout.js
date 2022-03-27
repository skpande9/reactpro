import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const Layout = () => {
    return(
        <>
            <Navbar bg="primary">
                <Container>
                    <Link to={"/"} className="navbar-brand text-white">
                    Home
                    </Link>
                    <Link to={"/category/list"} className="navbar-brand text-white">
                    Categories
                    </Link>
                    <Link to={"/"} className="navbar-brand text-white">
                    Products
                    </Link>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Layout;

