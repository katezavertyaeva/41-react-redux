import { InputContainer, Label, InputElement, ErrorMessage } from "./styles";
import { InputProps } from "./types";

function Input({ name, placeholder, type = "text", label, value, onChange, error }: InputProps) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputElement
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default Input;
