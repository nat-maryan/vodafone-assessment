import { useEffect, useState } from 'react';
import map from 'lodash/map';
import APIService from './../../services/ApiService';
import ErrorComponent from '../../components/ErrorComponent';
import styled from 'styled-components';
import CardItem from './components/CardItem';

const PageContainer = styled.div`
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
padding-bottom: 100px;
    }

`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const SecondPage = () => {
    const [pageData, setPageData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getPageData = async () => {
        let items = [];
        try {
             items = await APIService.getSecondPageData();
            return items.data;

        } catch (e) {
            console.log('Could not retrieve Data');
             setError(true);
        }
    };

    useEffect(() => {
        let mounted = true;

        getPageData().then((data)=> {
            if(mounted){
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
        <PageContainer>
            {loading && (<div> Loading..... </div>)}
            {!loading &&
                (<>
                    <div className="page-title">
                        {pageData[0].description}
                    </div>
                    <CardsContainer>
                        {map(pageData[0].tiles, (item, index) => {
                            return (
                                <CardItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    link={item.link}
                                />
                            )
                        })}
                    </CardsContainer>
                </>
                )}

        </PageContainer>
    )
};

export default SecondPage;
