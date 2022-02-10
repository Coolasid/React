import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
      <div>
        <Link to="">Home</Link>
        <Link to="/about" style={{ margin: "0px 15px" }}>
          About
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users" style={{ margin: "0px 15px" }}>
          Users
        </Link>
      </div>
    );
}