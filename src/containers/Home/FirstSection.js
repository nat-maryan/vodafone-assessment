import styled from 'styled-components';
import ImageContainer from './components/FirstSection/ImageContainer';

const ImagesWrapper = styled.div`
    display: flex;
    width: 90%;
    align-items: start;
    justify-content: space-between;
    padding-top: 32px;

    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
    }
 
    .second-group {
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        justify-content: start;
    }

    @media only screen and (max-width: 1024px) {
        .second-group {
            justify-content: center;
        }
    }
`;

const FirstSection = ({ data }) => {
    const { images } = data;

    const renderImages = (imgData) => {
        let toBeRendered = [];
        for (let i = 1; i < imgData.length; i++) {
            toBeRendered.push(<ImageContainer key={i} image={imgData[i]} />);
        }
        return toBeRendered;
    }

    return (
        <ImagesWrapper>
            <div className="column-image">
                <ImageContainer image={images[0]} className="column" />
            </div>
            <div className="second-group">
                {renderImages(images)}
            </div>
        </ImagesWrapper>
    )
}

export default FirstSection;