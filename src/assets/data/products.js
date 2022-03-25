import product_1_image_01 from "../images/products/product_1(1).jpg"
import product_1_image_02 from "../images/products/product_1(2).jpg"

import product_2_image_01 from "../images/products/product_2(1).jpg"
import product_2_image_02 from "../images/products/product_2(2).jpg"

import product_3_image_01 from "../images/products/product_3(1).jpg"
import product_3_image_02 from "../images/products/product_3(2).jpg"

import product_4_image_01 from "../images/products/product_4(1).jpg"
import product_4_image_02 from "../images/products/product_4(2).jpg"

import product_5_image_01 from "../images/products/product_5(1).jpg"
import product_5_image_02 from "../images/products/product_5(2).jpg"

import product_6_image_01 from "../images/products/product_6(1).jpg"
import product_6_image_02 from "../images/products/product_6(2).jpg"

import product_7_image_01 from "../images/products/product_7(1).jpg"
import product_7_image_02 from "../images/products/product_7(2).jpg"

import product_8_image_01 from "../images/products/product_8(1).jpg"
import product_8_image_02 from "../images/products/product_8(2).jpg"

const products = [
    {
        title: "Chân váy 01",
        price: '230000',
        image01: product_1_image_01,
        image02: product_1_image_02,
        categorySlug: "chan-vay",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo thun 02",
        price: '230000',
        image01: product_2_image_01,
        image02: product_2_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo somi 01",
        price: '230000',
        image01: product_3_image_01,
        image02: product_3_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo somi 02",
        price: '230000',
        image01: product_4_image_01,
        image02: product_4_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo thun 01",
        price: '230000',
        image01: product_5_image_01,
        image02: product_5_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo thun 01",
        price: '230000',
        image01: product_6_image_01,
        image02: product_6_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo thun 01",
        price: '230000',
        image01: product_7_image_01,
        image02: product_7_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo thun 01",
        price: '230000',
        image01: product_8_image_01,
        image02: product_8_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-01",
        size: ["s", "m", "l", "xl"]
    }
]

const getAllProducts = ()=> products

const getProducts = (count)=>{
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData
