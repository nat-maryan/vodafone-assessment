import styled from 'styled-components';

const SliderItemContainer = styled.div`
    height: 190px;

    .title {
        font-size: 32px;
        padding: 25px;
    }
`;

const SliderItem = ({title,subtile, image}) =>{
    return (
        <SliderItemContainer className="slider-item" style={{
            backgroundImage: `url(${image})`
          }}>
            <div className="title">{title}</div>
            <div className='subtitle'>{subtile}</div>
        </SliderItemContainer>
    )
}

export default SliderItem;