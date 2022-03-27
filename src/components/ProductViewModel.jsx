import React, { useEffect, useState } from 'react'
import ProductView from './ProductView'
import productData from '../assets/data/products'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/product-model/productModelSlice'

const ProductViewModel = ()=> {
    //const product = productData.getProductBySlug('ao-thun-08')
    const ProductSlug = useSelector((state)=> state.productModel.value)
    const dispatch = useDispatch()
    const [product, setproduct ]= useState(undefined);

    useEffect(()=> {
        setproduct(productData.getProductBySlug(ProductSlug))
    }, [ProductSlug])
  return (
    <div className={`product-view__model ${product === undefined ? '' : 'active'}`}>
        <div className='product-view__model__content'>
            <ProductView product={product}/>
            <div className='product-view__model__content__close'>
                <Button
                    size='sm'
                    onClick={()=> dispatch(remove())}
                >
                    Đóng
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ProductViewModel