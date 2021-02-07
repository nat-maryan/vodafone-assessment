import { useEffect, useState } from 'react';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../../components/ErrorComponent';
import styled from 'styled-components';

const HomeContainer = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .page-title {
        color: #071e57;
        text-align: center;
font-size: 32px;
font-weight: 400;
    }

`;

const SectionsNavBar = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    li{
        text-decoration: none;
        display: inline-block;
        padding-right: 10px;
        cursor: pointer;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;


const Home = () => {
    const [pageData, setPageData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getPageData = async () => {
        let items = [];
        try {
            items = await APIService.getHomeSections();
            return items.data;

        } catch (e) {
            console.log('Could not retrieve Data');
            setError(true);
        }
    };

    useEffect(() => {
        let mounted = true;

        getPageData().then((data) => {
            if (mounted) {
                setPageData(data);
                setLoading(false);
            }
        });

        return function cleanup() {
            mounted = false
        }

    }, []);

    if (error) {
        return (
            <ErrorComponent />
        )
    }

    return (
        <HomeContainer>
            {loading && (<div> Loading..... </div>)}
            {!loading && (
                <>
                    <div className="page-title">
                        {pageData[0].description}
                    </div>
                    <SectionsNavBar>
                    {map(pageData[0].sections, (item, index) => {
                            return (
                                <li key={index}>
                                    <p>{`Section ${index+1}`}</p>
                                </li>
                            )
                        })}
                    </SectionsNavBar>

                </>
            )}
        </HomeContainer>
    )
}

export default Home;