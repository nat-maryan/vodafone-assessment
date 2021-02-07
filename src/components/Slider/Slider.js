import styled from 'styled-components';
import APIService from './../../services/ApiService';
import { useEffect, useState } from 'react';
import map from 'lodash/map';
import ErrorComponent from './../ErrorComponent';
import SliderItem from './components/SliderItem';

const SliderWrapper = styled.div`
    position: relative;
`;

const SliderContainer = styled.div`
    width: 100%;
    background-color:rgb(64, 72,89);
    color: #fff;
    margin:auto;
    position:relative;
    text-align: center;
`;

const SliderBullets = styled.div`
    background-color: transparent;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, 0);

    .dot {
        cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    border-color: #fff;
    display: inline-block;
    transition: background-color 0.6s ease;
    }

    .active,
.dot:hover {
  background-color: rgb(36, 152, 235);
}

`;

const Slider = () => {
    const [sliderItems, setSliderItems] = useState([]);
    const [error, setError] = useState(false);
    const [sliderIndex, setSliderIndex] = useState(1);

    const getSlidertems = async () => {
        let sliderItems = [];
        try {
            sliderItems = await APIService.getSliderItems();
            setSliderItems(sliderItems.data);
            showSlides(sliderIndex);
            console.log(sliderItems);

        } catch {
            console.log('Could not retrieve Menu Items');
            setError(true);
        }
    }

    const currentSlide = (n) => {
        showSlides(n);
       
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slider-item");
        const dots = document.getElementsByClassName("dot");
     
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[n - 1].style.display = "block";
        dots[n - 1].className += " active";
        setSliderIndex(n);
      
    }


    useEffect(() => {

        getSlidertems();


    }, []);

    if (error) {
        return (
            <SliderContainer>
                <ErrorComponent />
            </SliderContainer>
        )
    }

    return (
        <SliderWrapper>
            <SliderContainer>
                {map(sliderItems, (item, index) => {
                    return (
                        <SliderItem
                            key={index}
                            image={item.image}
                            title={item.title}
                            subtile={item.subtitle}
                        />
                    )
                })}
            </SliderContainer>
            <SliderBullets>
                {map(sliderItems, (item, index) => {
                    return (
                        <span key={index} className="dot" onClick={()=>currentSlide(index+1)}></span>
                    )
                })}
            </SliderBullets>
        </SliderWrapper>
    )
}

export default Slider;