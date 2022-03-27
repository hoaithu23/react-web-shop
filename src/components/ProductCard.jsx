import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Link } from 'react-router-dom'
import numbercommas from '../utils/numbercommas'
import { useDispatch } from 'react-redux'
import { set } from '../redux/product-model/productModelSlice'

const ProductCard = props => {
    const dispatch = useDispatch()
  return (
    <div className='product-card'>
        <Link to={`/catalog/${props.slug}`}>
            <div className='product-card__image'>
                <img src={props.img01} alt=""/>
                <img src={props.img02} alt=""/>
            </div>
            <h3 className='product-card__name'>{props.name}</h3>
            <div className='product-card__price'>
                {numbercommas(props.price)}
                <span className='product-card__price__old'>
                    <del>{numbercommas(500000)}</del>
                </span>
            </div>
        </Link>
        <div className='product-card__btn'>
            <Button
                size='sm'
                icon='bx bx-cart'
                animate={true}
                onClick={() => dispatch(set(props.slug))}
            >
                Chọn mua
            </Button>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard