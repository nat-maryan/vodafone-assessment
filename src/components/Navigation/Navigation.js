import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../ErrorComponent';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    width: 100%;
    background-color:rgb(64, 72,89);
    color: #fff;

    ul{
        margin: 0;
        padding: 42px 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    li {
        display: inline-block;
        font-size: 15px;
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
`;

const Navigation = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(false);

    const getMenuItems = async () => {
        let menuItems = [];
        try {
            menuItems = await APIService.getMenuItems();
            setMenuItems(menuItems.data);

        } catch {
            console.log('Could not retrieve Menu Items');
            setError(true);
        }
    }

    useEffect(() => {
        getMenuItems();
    }, []);

    if (error) {
        return (
            <ErrorComponent />
        )
    }
    return (
        <HeaderStyled>
            <nav>
                <ul>
                    {map(menuItems, (item, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={`${item.title === 'Home' ? '/' : `/${item.title.replace(/\s/g, '')}/`}`}
                                    exact>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </HeaderStyled >
    );
}

export default Navigation;