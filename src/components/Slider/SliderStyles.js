import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position: relative;
`;

export const SliderContainer = styled.div`
    width: 100%;
    background-color:rgb(64, 72,89);
    color: #fff;
    margin:auto;
    position:relative;
    text-align: center;
`;

export const SliderBullets = styled.div`
    background-color: transparent;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, 0);

    .dot {
        cursor: pointer;
        height: 12px;
        width: 12px;
        margin: 0 3px;
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid #fff;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
        background-color: rgb(36, 152, 235);
    }
`;