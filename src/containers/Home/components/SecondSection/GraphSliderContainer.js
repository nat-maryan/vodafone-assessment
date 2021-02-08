import styled from 'styled-components';
import GraphSlider from './GraphSlider';
import map from 'lodash/map';

const GraphSliderWapper = styled.div`
    text-align: left;
    .title{
        color: rgb(36,152,235);
    }

    .subtitle{
        font-size: 28px;
        color: #071e57;
    }
`;

const GraphSliderContainer = ({ title, stats, graphText }) => {
    return (
        <GraphSliderWapper>
            <div className="title">{title}</div>
            <div className="subtitle">{graphText}</div>
            <div className="slider-container">
                {map(stats, (item, index) => {
                    return (
                       <GraphSlider amount={item.amount/10} title={item.title} key={index}/>
                    )
                })}
            </div>
        </GraphSliderWapper>
    )
}

export default GraphSliderContainer;