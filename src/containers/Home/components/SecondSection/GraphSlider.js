import { Slider } from 'rsuite';
import styled from 'styled-components';
import "rsuite/dist/styles/rsuite-default.min.css";

const SliderWrapper = styled.div`
    padding-top: 15px;
    .slider-title{
        padding-bottom: 12px;
        text-transform: uppercase;
    }
`;

const GraphSlider = ({amount, title, index}) => {
    return (
        <SliderWrapper>
    <div className="slider-title">{title}</div>
        <Slider
            progress
            min={0}
            max={100}
            defaultValue={amount}
            onChange={value => {
                console.log(value);
            }}
        />
        <span>{`${amount}%`}</span>
        </SliderWrapper>
    )
}

export default GraphSlider;