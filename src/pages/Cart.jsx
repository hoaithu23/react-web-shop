import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import productData from '../assets/data/products'
import HeadTitle from '../components/HeadTitle'
import numbercommas from '../utils/numbercommas'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const cartItems = useSelector((state)=> state.cartItems.value)
  const [cartProducts, setcartProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(()=>{
    setcartProducts(productData.getCartItemsDetail(cartItems))
    setTotalProducts(cartItems.reduce((total, item)=> total + Number(item.quantity), 0))
    setTotalPrice(cartItems.reduce((total, item)=> total + (Number(item.quantity) * Number(item.price)), 0))
  }, [cartItems])
  return (
    <HeadTitle title='Giỏ hàng'>
      <div className='cart'>
        <div className='cart__info'>
            <div className='cart__info__txt'>
                <p>
                  Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                </p>
                <div className='cart__info__txt__price'>
                    <span>Thành tiền</span>
                    <span>{numbercommas(totalPrice)}</span>
                </div>
            </div>
            <div className='cart__info__btn'>
              <Button size="block">Đặt hàng</Button>
              <Link to="/catalog">
                <Button size="block">Tiếp tục mua hàng</Button>
              </Link>
            </div>
        </div>
        <div className='cart__list'>
          {
            cartProducts.map((item, index)=>(
              <CartItem item={item} key={index}/>
            ))
          }
        </div>
      </div>
    </HeadTitle>
  )
}

export default Cart