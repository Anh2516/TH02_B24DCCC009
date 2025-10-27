import {Link} from "react-router-dom";
import "./NavBar.css";
export default function Navbar() {
  return (
    <div className="container-navbar">  
    <nav className="navbar">
      <Link to="/bai1">Bài 1</Link>
      <Link to="/bai2">Bài 2</Link>
      <Link to="/bai3">Bài 3</Link>
    </nav>
    </div>
  );
}
