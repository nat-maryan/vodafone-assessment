import styled from 'styled-components';
import Eye from '../../../../assets/eye.png';

const ImageStyled = styled.div`
    width: 365px;
    height: 268px;
    margin: 15px 0 0;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   flex-direction: column;
   font-size: 16px;
   font-weight: bold;

    &.column {
        height: 550px;
    }
`;

const ImageContainer = ({image, className}) => {
    return (
        <ImageStyled className={className} style={{
            backgroundImage: `url(${image.img})`
          }}>
            <div>
                <img src={Eye} alt="eye"/>
            </div>
            <div>{image.title}</div>
            <div>______</div>

        </ImageStyled>
    )
}

export default ImageContainer;