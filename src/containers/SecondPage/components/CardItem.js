import styled from 'styled-components';
import icon1 from '../../../assets/icon1.png';
import icon2 from '../../../assets/icon2.png';
import icon3 from '../../../assets/icon3.png';


const CardContainer = styled.div`
    width: 310px;
    height: 320px;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    background-color: #ffffff;
    margin: 18px;
    text-align: center;
    padding: 0 34px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    &:hover{
        background-color: #1d2b37;
        cursor: pointer;
        color: #ffffff;
    }       

    .card-title {
        font-size: 18px;
        font-weight: 400;
    }

    .card-desc {
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
        line-height: 29px;
    }

    a{
        text-decoration:none;
        color: #0077cc;
        font-size: 16px;
        font-weight: 400;
    }
`;


const CardItem = ({ icon, title, description, link }) => {
    let img;
    switch (icon) {
        case 'icon1':
            img = icon1;
            break;
        case 'icon2':
            img = icon2;
            break;
        case 'icon3':
            img = icon3;
            break;
        default:
            img = icon1;

    }

    return (
        <CardContainer data-testid="card-item">
            <img src={img} alt={title} />
            <div className='card-title'>{title}</div>
            <div className='card-desc'>{description}</div>
            <a href="/">{`${link} >`}</a>
        </CardContainer>
    )
}

export default CardItem;