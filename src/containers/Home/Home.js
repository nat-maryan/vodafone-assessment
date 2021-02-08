import { useEffect, useState } from 'react';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../../components/ErrorComponent';
import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

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
        opacity: 0.5;
        position: relative;
    }

    li.active {
        opacity: 1;
    }

    li.active:after {
       content:'•';
    color: rgb(36,152,235);
       position:absolute;
       left: 50%;
    transform: translate(-50%, 0);
    top: 16px;
    }
`;

const Home = () => {
    const [pageData, setPageData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState(1);

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

    const renderSection = (section, data) => {
        switch (section) {
            case 1:
                return (<FirstSection data={data} />);
            case 2:
                return (<SecondSection data={data} />);
            default:
                return (<FirstSection data={data} />);
        }
    }

    const handleSectionsClick = (section) => {
        return setActiveSection(section + 1);
    }

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
                                <li className={`${index === activeSection - 1 ? 'active' : ''}`} key={index} onClick={() => handleSectionsClick(index)}>
                                    <p>{`Section ${index + 1}`}</p>
                                </li>
                            )
                        })}
                    </SectionsNavBar>

                    {renderSection(activeSection, pageData[0].sections[activeSection - 1])}


                </>
            )}
        </HomeContainer>
    )
}

export default Home;