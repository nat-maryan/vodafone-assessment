import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../ErrorComponent';

const Navigation = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(false);

    const getMenuItems = async () => {
        let menuItems = [];
        try {
            menuItems = await APIService.getMenuItems();
            setMenuItems(menuItems.data);
            console.log(menuItems);

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
        <header>
            <nav>
                <ul>
                    {map(menuItems, (item) => {
                        return (
                            <li>
                                <NavLink
                                    to={`/${item.title.replace(/\s/g, '')}/`}
                                    exact>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header >
    );
}

export default Navigation;