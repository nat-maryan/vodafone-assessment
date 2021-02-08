import styled from 'styled-components';
import Select from 'react-select';

export const HeaderStyled = styled.header`
    width: 100%;
    background-color:rgb(64, 72,89);
    color: #fff;
    display: flex;
    padding: 42px 0;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    img {
        height: 20px;
        width: 20px;
    }

    .exit {
        position: absolute;
        left: 77%;
    }

    @media only screen and (max-width: 870px) {
        .exit, .search {
             display: none;
        }
    }

    ul{
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    li {
        display: inline-block;
        font-size: 15px;
        padding-right: 25px;
    }


    a{
        text-decoration: none;
        color: #fff;  
        opacity: 0.5;
        position: relative;
        }

    a.active{
        opacity: 1;
        color: #fff;   
    }  
        
    a.active:after {
        content:'•';
        color: green;
        position:absolute;
        left: 50%;
        transform: translate(-50%, 0);
        top: 22px;
    }
    
    a:hover, a:focus, a:active {
        text-decoration:none;
        color: inherit;
    }
`;

export const SelectStyled = styled(Select)`
    width: 10%;
    color: '#fff';

    @media only screen and (max-width: 870px) {
        display: none;
    }

    div {
        border: none;
    }

    input {
        color: #fff;
    }

    span {
        display: none;
    }

`;