import styled from 'styled-components';

const InputContainer  = styled.div`
  display: block;
  padding: 10px 0;

  input {
    border-radius: none;
    border: none;
    padding: 10px;
    background-color: rgba(0,0,0, 0.03);
    width: 250px;
  }
`;
const FormHelperText = styled.p`
    color: red;
    font-size: 12px;
`;

const Input = ({ formLabel, value, name, onChange, error, touch, onFocusOut, valid }) => {
  return (
    <InputContainer>

      <input
        placeholder={formLabel}
        value={value}
        name={name}
        data-testid={name}
        onChange={onChange}
        onBlur={() => {
          onFocusOut();
        }
        }
      />

      {!!touch && !!error && !valid && (
        <FormHelperText data-testid={`error_${name}`}>{error}</FormHelperText>
      )}
    </InputContainer>
  )
}

export default Input;