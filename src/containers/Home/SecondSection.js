
import Form from './components/Form';
import { Slider } from 'rsuite';
import "rsuite/dist/styles/rsuite-default.min.css";

const SecondSection = ({ data }) => {
    console.log(data);
    const { buttonText, formLabels, formText } = data;
    return (
        <>

            <Form buttonText={buttonText} formLabels={formLabels} formText={formText} />
            <div style={{width: '50%'}}>
                <Slider
                    progress
                    defaultValue={50}
                    onChange={value => {
                        console.log(value);
                    }}
                />
            </div>
        </>
    )
}

export default SecondSection;