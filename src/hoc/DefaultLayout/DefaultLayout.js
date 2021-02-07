import Navigation from './../../components/Navigation';
import styled from 'styled-components';
import Slider from './../../components/Slider';

const MainStyled = styled.main`
     background: rgb(248,250,255);
  color: rgb(64, 72,89);
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
`;


const DefaultLayout = ({ children }) => {
    return (
        <MainStyled className="Content">
            <Navigation />
            <Slider />
            {children}
        </MainStyled>
    )
}

export default DefaultLayout;