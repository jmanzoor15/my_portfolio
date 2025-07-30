import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-2.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (item) => {
    setMenu(item);
    setDrawerOpen(false);
  };

  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="logo" className="logo" />

        <div className="hamburger" onClick={() => setDrawerOpen(!drawerOpen)}>
          {drawerOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        <ul className="nav-menu">
          {['home', 'about', 'services', 'mywork', 'contact'].map((item) => (
            <li key={item}>
              <AnchorLink className='anchor-link' href={`#${item}`} offset={50}>
                <p onClick={() => handleMenuClick(item)}>
                  {item === 'mywork' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1).replace('me', ' Me')}
                </p>
              </AnchorLink>
              {menu === item && <img src={underline} alt='' />}
            </li>
          ))}
        </ul>

        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with Me
          </AnchorLink>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul>
          {['home', 'about', 'services', 'mywork', 'contact'].map((item) => (
            <li key={item}>
              <AnchorLink className='anchor-link' href={`#${item}`} offset={50}>
                <p onClick={() => handleMenuClick(item)}>
                  {item === 'mywork' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1).replace('me', ' Me')}
                </p>
              </AnchorLink>
              {menu === item && <img src={underline} alt='' />}
            </li>
          ))}
          <li className="drawer-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              Connect with Me
            </AnchorLink>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {drawerOpen && <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />}
    </>
  );
};

export default Navbar;
