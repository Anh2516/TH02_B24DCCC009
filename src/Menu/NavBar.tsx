import {Link} from "react-router-dom";
import "./NavBar.css";
export default function Navbar() {
  return (
    <div className="container-navbar">  
    <nav className="navbar">
      <Link to="/bai1">Bài 1: Thời tiết</Link>
      <Link to="/bai2">Bài 2: Thông tin sinh viên</Link>
      <Link to="/bai3">Bài 3: Đọc báo</Link>
    </nav>
    </div>
  );
}
