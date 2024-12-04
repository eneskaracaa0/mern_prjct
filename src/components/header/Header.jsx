import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <div className="header">
      <div className="header_layout">
        <div className="header_layout_icon">
          <div className="header_layout_icon_circle"></div>
          <div className='header_layout_icon_css'>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="header_layout_info"></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header