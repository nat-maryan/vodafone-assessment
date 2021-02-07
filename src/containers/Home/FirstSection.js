import map from 'lodash/map';
import styled from 'styled-components';
import ImageContainer from './components/ImageContainer';

const ImagesWrapper = styled.div`
    display: flex;
    width: 80%;
    align-items: start;
    justify-content: space-evenly;
 

    .second-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    justify-content: space-evenly;
    }
`;

const FirstSection = ({ data }) => {
    const { images } = data;

    const renderImages = (imgData) => {
        let toBeRendered = [];
        for (let i = 1; i < imgData.length; i++) {
            toBeRendered.push(<ImageContainer image={imgData[i]} />);

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