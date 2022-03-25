import React, {useRef, useEffect} from 'react'

/*logo*/
import logo from '../assets/images/logotext.png'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const mainNav = [
  {
    display: "Trang chủ",
    path: "/"
  },
  {
    display: "Sản phẩm",
    path: "/catalog"
  },
  {
    display: "Phụ kiện",
    path: "/accessories"
  },
  {
    display: "Liên hệ",
    path: "/contact"
  }
]

const Header = () => {
  const {pathname} = useLocation()
  const activeNav = mainNav.findIndex(e=>e.path === pathname)
  const headerRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('shrink')
      }
      else
      {
        headerRef.current.classList.remove('shrink')
      }
    })
    return () => {
      window.removeEventListener("scroll")
    };
  }, []);
  
  const menuLeft = useRef(null)

  const menuToggle = () => menuLeft.current.classList.toggle('active')

  return (
    <div className='header' ref={headerRef}>
        <div className='container'>
            <div className='header__logo'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className='header__menu'>
                <div className='header__menu__mobile-toggle' onClick={menuToggle}>
                    <i class='bx bx-menu' ></i>
                </div>
                <div className='header__menu__left' ref={menuLeft}>
                  <div className='header__menu__left__close' onClick={menuToggle}>
                      <i class='bx bxs-chevron-left-circle' ></i>
                  </div>
                  {
                    mainNav.map((item, index) => (
                      <div key={index} className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`} onClick={menuToggle}>
                          <Link to={item.path}>
                              <span>{item.display}</span>
                          </Link>
                      </div>
                    ))
                  }
                </div>
                <div className='header__menu__right'>
                    <div className='header__menu__item header__menu__right__item'>
                        <i class='bx bx-search-alt'></i>
                    </div>
                    <div className='header__menu__item header__menu__right__item'>
                        <Link to="/cart">
                            <i class='bx bxs-shopping-bags' ></i>
                        </Link>
                    </div>
                    <div className='header__menu__item header__menu__right__item'>
                        <i class='bx bxs-user' ></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header