
import Form from './components/Form';

const SecondSection = ({ data }) => {
    console.log(data);
    const { buttonText, formLabels, formText } = data;
    return (
        <>
        <Form buttonText={buttonText} formLabels={formLabels} formText={formText}/>
        </>
    )
}

export default SecondSection;