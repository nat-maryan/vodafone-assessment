
import Form from './components/SecondSection/Form';
import styled from 'styled-components';
import GraphSliderContainer from './components/SecondSection/GraphSliderContainer';

const SecondSectionContainer = styled.div`
    display: flex;
    text-align: center;
    padding-top: 32px;
    flex-wrap: wrap;
    width: 80%;

    .content {
        width: 50%;
    }

    @media only screen and (max-width: 768px) {
        .content {
        width: 100%;
    }
}
`;

const SecondSection = ({ data }) => {
    const { buttonText, formLabels, formText, title, stats, graphText } = data;
    return (
        <SecondSectionContainer>
            <div className="content">
                <GraphSliderContainer title={title} stats={stats} graphText={graphText} />
            </div>
            <div className="content">
                <Form buttonText={buttonText} formLabels={formLabels} formText={formText} />
            </div>
        </SecondSectionContainer>
    )
}

export default SecondSection;