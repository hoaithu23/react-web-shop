import React from 'react'
import HeadTitle from '../components/HeadTitle'
import HSlider from '../components/HSlider'
import Section, {SectionTitle, SectionBody} from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/data/policy'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import productData from '../assets/data/products'
import ProductCard from '../components/ProductCard'
import banner from '../assets/images/banner.jpg'

/* data */
import SliderData from '../assets/data/slider'

const Home = () => {
  return (
    <HeadTitle title="Trang chủ">
        {/* start slider */}
        <HSlider 
            data={SliderData}
            control={true}
            auto={true}
            timeOut={4000}
        />
        {/* end slider */}

        {/* start policy section */}
        <Section>
            <SectionBody>
                <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
                >
                  {
                      policy.map((item, index) => <Link 
                      key={index} to="/policy">
                        <PolicyCard
                          name={item.name}
                          description={item.description}
                          icon={item.icon}
                        />
                      </Link>)
                  }
                </Grid>
            </SectionBody>
        </Section>
        {/* end policy section */}

        {/* start best selling section */}
        <section>
          <SectionTitle>
            Sản phẩm bán chạy nhất
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                  productData.getProducts(4).map((item, index)=>(
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
        </section>
        {/* end best selling section */}

        {/* start new arrivval section */}
        <section>
          <SectionTitle>
            Sản phẩm nổi bật
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                  productData.getProducts(4).map((item, index)=>(
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
        </section>
        {/* end new arrivval section */}

        {/* start banner section */}
        <Section>
              <SectionBody>
                  <Link to="/catalog">
                      <img src={banner} alt=""/>
                  </Link>
              </SectionBody>
        </Section>
        {/* end banner section */}
    </HeadTitle>
  )
}

export default Home
