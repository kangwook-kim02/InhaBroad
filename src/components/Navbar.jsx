import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = [
    {
      id: "about",
      label: "소개",
    },
    {
      id: "gallery",
      label: "갤러리",
    },
    {
      id: "join",
      label: "지원하기",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          인하브로드
        </div>

        {/* PC 메뉴 */}
        <ul className="nav-menu">
          {menuList.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id.toLowerCase()}
                smooth={true}
                duration={500}
                className="nav-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {isMenuOpen && (
        <div className="mobile-dropdown">
          {menuList.map((item) => (
            <Link
              key={item.id}
              to={item.id.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
              className="nav-item"
              style={{ display: "block", padding: "10px 0" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
