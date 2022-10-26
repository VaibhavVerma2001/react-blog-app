import React, { useContext } from 'react';
import './header.css';
import headerImg from '../../img/header.jpg';
import UserContext from '../../context/UserContext';


function Header() {
  const context = useContext(UserContext);
  const { mode } = context;

  return (
    <>
      <div className={`header theme-${mode} container-fluid`} >
        <div className="headerTitles">
            <span className='headerTitlesm'>React & Node</span>
            <span className='headerTitlelg'>BLOG</span>
        </div>
        <img className="headerImg" src={headerImg} alt="Img"  />
      </div>
    </>
  )
}

export default Header;
