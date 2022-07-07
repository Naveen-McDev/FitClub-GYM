import React, { useState } from "react";

import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id="header">
      <img src={Logo} alt="brand-logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "8px",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={bars} alt="" style={{ width: "24px", height: "18px" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass='active'
              span={true}
              smooth={true}
              to= 'header'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
              to= 'programs'
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
              to= 'reasons'
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
              to= 'plans'
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
              to= 'testimonials'
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
