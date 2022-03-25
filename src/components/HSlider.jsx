import React, {useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

const HSlider = props => {
    const data = props.data
    const [activeSlide, setActiveSlide] = useState(0);

    /* Slide */
    const nextSlide= useCallback(
        ()=>{
            const index=activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
        [activeSlide, data],
    )

    const prevSlide=()=>{
        const index=activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    /* Time */
    const timeOut = props.timeOut ? props.timeOut : 3000

    useEffect(()=>{
        if(props.auto){
            const slideAuto = setInterval(()=>{
                nextSlide()
            }, timeOut);
            return()=>{
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])
    
    return (
        <div className="slider">
            {
                data.map((item, index) => (
                    <HSliderItem key={index} item={item} active={index === activeSlide}/>
                ))
            }
            {
                props.control ? (
                    <div className='slider__control'>
                        <div className='slider__control__item' onClick={prevSlide}>
                            <i class='bx bxs-chevron-left-circle' ></i>
                        </div>
                        <div className='slider__control__item'>
                            <div className='index'>
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>
                        <div className='slider__control__item' onClick={nextSlide}>
                            <i class='bx bxs-chevron-right-circle' ></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

HSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HSliderItem = props => (
    <div className={`slider__item ${props.active ? 'active' : ''}`}>
        <div className='slider__item__info'>
            <div className={`slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className='slider__item__info__description'>
                <span>{props.item.description}</span>
            </div>
            <div className='slider__item__info__btn'>
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon="bx bxs-cart-alt"
                        animate={true}
                        size="sm"
                    >
                        Xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>
        <div className='slider__item__image'>
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default HSlider