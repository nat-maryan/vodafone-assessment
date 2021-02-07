import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const FormStyled = styled.form`
    width: 100%;
    text-align: center;
`;

const ButtonStyled = styled.button`
    border: none;
    padding: 10px;
    background-color:rgb(36,152,235);
    color: #fff;
    width: 100px;
`;

const Form = ({ buttonText, formLabels, formText }) => {
    const [phone, setPhone] = useState({
        value: '',
        error: true,
        notValidMessage: 'Not Valid',
        touch: ''
    });
    const [email, setEmail] = useState({
        value: '',
        error: true,
        notValidMessage: 'Not valid',
        touch: ''
    });

    const [password, setPassword] = useState({
        value: '',
        error: true,
        notValidMessage: 'Not valid',
        touch: ''
    });

    const formInputMessages = {
        phone: {
            required: 'This field is required',
            invalid: 'Phone number is invalid'
        },
        email: {
            required: 'This field is required',
            invalid: 'Email is invalid'
        },
        password: {
            required: 'This field is required',
            invalid: 'Password is invalid'
        }
    };


    const checkNameInputTouched = (value, input, setInput) => {
        if (value) {
            return setInput({
                ...input,
                touch: true
            });
        }
        return null;
    };

    const handleInputChange = (value, inputName, input, setInput) => {
        if (!value) {
            return setInput({
                ...input,
                value,
                error: true,
                notValidMessage: formInputMessages[inputName].required
            });
        }
        // if (inputName === 'name' && !validateMotherName(value)) {
        //     return setInput({
        //         ...input,
        //         value,
        //         error: true,
        //         notValidMessage: formInputMessages[inputName].invalid
        //     });
        // }

        // if (inputName === 'birthdate' && !validateBirthdate(value)) {
        //     return setInput({
        //         ...input,
        //         value,
        //         error: true,
        //         notValidMessage: formInputMessages[inputName].invalid
        //     });
        // }

        return setInput({
            ...input,
            value,
            error: false,
            notValidMessage: ''
        });
    };

    return (
        <>
            <div>{formText}</div>
            <p>We work with leaders, corporations and start ups worlwide. How can we help you?</p>
            <FormStyled>
                <Input
                    formLabel={formLabels[0]}
                    name="phone"
                    id="phone"
                    touch={phone.touch}
                    error={phone.error ? phone.notValidMessage : false}
                    value={phone.value}
                    onChange={(e) => {
                        handleInputChange(
                            e.target.value,
                            'phone',
                            phone,
                            setPhone
                        );
                    }}
                    onFocusOut={() =>
                        checkNameInputTouched(phone.value, phone, setPhone)
                    }
                />

                <Input
                    formLabel={formLabels[1]}
                    name="email"
                    id="email"
                    touch={email.touch}
                    error={email.error ? email.notValidMessage : false}
                    value={email.value}
                    onChange={(e) => {
                        handleInputChange(
                            e.target.value,
                            'email',
                            email,
                            setEmail
                        );
                    }}
                    onFocusOut={() =>
                        checkNameInputTouched(email.value, email, setEmail)
                    }
                />

                <Input
                    formLabel={formLabels[2]}
                    name="password"
                    id="password"
                    touch={password.touch}
                    error={password.error ? password.notValidMessage : false}
                    value={password.value}
                    onChange={(e) => {
                        handleInputChange(
                            e.target.value,
                            'password',
                            password,
                            setPassword
                        );
                    }}
                    onFocusOut={() =>
                        checkNameInputTouched(password.value, password, setPassword)
                    }
                />

                <ButtonStyled
                    id="submit"
                    data-testid="form_submit_btn"
                    type="submit"
                >{buttonText}</ButtonStyled>
            </FormStyled>
        </>

    )
}

export default Form;