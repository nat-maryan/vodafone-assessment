import { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../ErrorComponent';
import styled from 'styled-components';
import Select from 'react-select';
import Search from '../../assets/search.png';
import Exit from '../../assets/exit.png';

const HeaderStyled = styled.header`
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
`;

const SelectStyled = styled(Select)`
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

const Navigation = ({ ...props }) => {

    const options = [
        { label: 'Home', value: '/' },
        { label: 'Page 2', value: '/page2' }
    ];

    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(false);
    const [showSelect, setShowSelect] = useState(false);

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


    const redirectTo = (path) => {
        const { history } = props;
        return history.push({ pathname: `${path}` })
    }

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
            {!showSelect && (
            <div className="search" onClick={()=> setShowSelect(true)}>
                <img src={Search} alt="search"/>
            </div>)}
           
            {showSelect && (
            
                <SelectStyled
                options={options}
                onChange={opt => redirectTo(opt.value)}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    border: 0,
                    colors: {
                        ...theme.colors,
                        text: 'black',
                        primary25: 'rgba(64,72,89, 0.5)',
                         primary: 'black',
                        neutral0: 'rgb(64,72,89)',
                        neutral80: '#fff',
                        neutral50: '#fff'
                    },
                })}
            />
            )}
            {showSelect && (
            <div className="exit" onClick={()=> setShowSelect(false)}>
                <img src={Exit} alt="exit"/>
            </div>)}
        </HeaderStyled >
    );
}

export default withRouter(Navigation);