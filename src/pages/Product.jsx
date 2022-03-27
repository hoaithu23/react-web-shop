import React from 'react'
import productData from '../assets/data/products'
import HeadTitle from '../components/HeadTitle'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

const Product = props => {
  const product = productData.getProductBySlug(props.match.params.slug)
  const relProducts = productData.getProducts(8)
  
  React.useEffect(()=>{
    window.scrollTo(0,0)
  }, [product])

  return (
    <HeadTitle title={product.title}>
        <Section>
          <SectionBody>
            <ProductView product={product}/>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>
            Tìm hiểu thêm
          </SectionTitle>
          <SectionBody>
              <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
              >
                {
                  relProducts.map((item, index)=>(
                    <ProductCard
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                    />
                  ))
                }
              </Grid>
          </SectionBody>
        </Section>
    </HeadTitle>
  )
}

export default Product