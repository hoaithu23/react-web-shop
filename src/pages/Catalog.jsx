import React from 'react'
import HeadTitle from '../components/HeadTitle'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/data/products'
import category from '../assets/data/category'
import CheckBox from '../components/CheckBox'
import colors from '../assets/data/product-color'

const Catalog = () => {
  return (
    <HeadTitle title='Sản phẩm'>
        <div className='catalog'>
            <div className='catalog__filter'>
              <div className='catalog__filter__widget'>
                  <div className='catalog__filter__widget__title'>
                      Danh mục sản phẩm
                  </div>
                  <div className='catalog__filter__widget__content'>
                      {
                        category.map((item, index) => (
                          <div className='catalog__filter__widget__content__item'>
                            <CheckBox
                              label={item.display}
                            />
                          </div>
                        ))
                      }
                  </div>
              </div>

              <div className='catalog__filter__widget'>
                  <div className='catalog__filter__widget__title'>
                      Màu sắc
                  </div>
                  <div className='catalog__filter__widget__content'>
                      {
                        colors.map((item, index) => (
                          <div className='catalog__filter__widget__content__item'>
                            <CheckBox
                              label={item.display}
                            />
                          </div>
                        ))
                      }
                  </div>
              </div>

              <div className='catalog__filter__widget'>
                  <div className='catalog__filter__widget__title'>
                      Kích cỡ
                  </div>
                  <div className='catalog__filter__widget__content'>
                      {
                        colors.map((item, index) => (
                          <div className='catalog__filter__widget__content__item'>
                            <CheckBox
                              label={item.display}
                            />
                          </div>
                        ))
                      }
                  </div>
              </div>
            </div>
            
            <div className='catalog__content'>
                <Grid
                  col={3}
                  mdCol={2}
                  smCol={1}
                  gap={20}
                >
                  {
                    productData.getAllProducts().map((item, index)=>(
                      <ProductCard
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.name}
                        price={Number(item.price)}
                        slug={item.slug}
                      />
                    ))
                  }
                </Grid>
            </div>
        </div>
    </HeadTitle>
  )
}

export default Catalog