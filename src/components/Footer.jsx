import React from 'react'
import {Link} from 'react-router-dom'
import Grid from './Grid'

/* logo */
import logo from '../assets/images/logo.png'

const footerLinks = [
  {
    display: "Giới thiệu",
    path: "/about"
  },
  {
    display: "Về chúng tôi",
    path: "/about"
  },
  {
    display: "Tin tức",
    path: "/about"
  },
  {
    display: "Liên hệ",
    path: "/about"
  },
  {
    display: "Tuyển dụng",
    path: "/about"
  },
]

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about"
  },
  {
    display: "Chính sách bảo hành",
    path: "/about"
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about"
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={10}
        >
            <div>
                <div className='footer__title'>
                    Tổng đài hỗ trợ
                </div>
                <div className='footer__content'>
                    <p>
                        Liên hệ đặt hàng <strong>hoaithu230600@gmail.com</strong>
                    </p>
                    <p>
                        Thắc mắc đơn hàng <strong>hoaithu230600@gmail.com</strong>
                    </p>
                    <p>
                        Góp ý, khiếu nại <strong>hoaithu230600@gmail.com</strong>
                    </p>
                </div>
            </div>
            <div>
                <div className='footer__title'>
                    Về chúng tôi
                </div>
                <div className='footer__content'>
                    {
                      footerLinks.map((item, index)=>(
                        <p key={index}>
                            <Link to={item.path}>
                              {item.display}
                            </Link>
                        </p>
                      ))
                    }
                </div>
            </div>
            <div>
                <div className='footer__title'>
                    Chăm sóc khách hàng
                </div>
                <div className='footer__content'>
                    {
                      footerCustomerLinks.map((item, index)=>(
                        <p key={index}>
                            <Link to={item.path}>
                              {item.display}
                            </Link>
                        </p>
                      ))
                    }
                </div>
            </div>
            <div className='footer__about'>
              <p>
                <Link to="/">
                  <img src={logo} className="footer__logo" alt="" />
                </Link>
              </p>
              <p>
                  Chúng tôi là sinh viên của Trường Đại Công nghệ Tp.Hồ Chí Minh. Dự án này phục vụ cho đồ án môn học công nghệ thông tin. 
                  Trong dự án này chúng tôi có sử dụng những tài liệu thuộc trang web khác. 
                  Chúng tôi không chịu trách nhiệm về nội dung của trang web này.
              </p>
            </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer