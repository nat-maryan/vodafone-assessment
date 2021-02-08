import { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../ErrorComponent';
import Search from '../../assets/search.png';
import Exit from '../../assets/exit.png';
import { HeaderStyled, SelectStyled } from './NavigationStyles';


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
                <div className="search" onClick={() => setShowSelect(true)}>
                    <img src={Search} alt="search" />
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
                <div className="exit" onClick={() => setShowSelect(false)}>
                    <img src={Exit} alt="exit" />
                </div>)}
        </HeaderStyled >
    );
}

export default withRouter(Navigation);