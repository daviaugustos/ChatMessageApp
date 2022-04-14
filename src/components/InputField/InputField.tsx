import React from 'react'
import { Container, Input } from './InputField.styles'

interface InputFieldProps {
  onChangeTextValue: (text: string) => void
  value: string
  placeholder: string
}

const InputField: React.FC<InputFieldProps> = ({
  onChangeTextValue,
  value,
  placeholder,
}) => {
  return (
    <Container>
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={text => onChangeTextValue(text)}
      />
    </Container>
  )
}

export default InputField
