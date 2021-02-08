import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../ErrorComponent';
import styled from 'styled-components';
import Select from 'react-select';

const HeaderStyled = styled.header`
    width: 100%;
    background-color:rgb(64, 72,89);
    color: #fff;
    display: flex;
    padding: 42px 0;
    justify-content: space-evenly;
    align-items: center;


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
`;

const SelectStyled = styled(Select)`
    width: 10%;
`;

const Navigation = () => {

    const options = [
        { label: 'Home', value: '/' },
        { label: 'Page 2', value: '/page2' }
    ];

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

    const constractSelectOptions = (items) => {

    }

    useEffect(() => {
        getMenuItems();
        constractSelectOptions(menuItems);
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
            <SelectStyled
                options={options}
                onChange={opt => console.log(opt.label, opt.value)}
            />
        </HeaderStyled >
    );
}

export default Navigation;