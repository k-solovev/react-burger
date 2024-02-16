import { useState, ChangeEvent } from "react"

interface FormFields {
  [key: string]: string;
}

interface UseFormProps {
  [key: string]: string;
}

export function useForm<T extends UseFormProps>(inputValues: T) {
  const [formFields, setFormFields] = useState(inputValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return { formFields, handleChange, setFormFields }
}