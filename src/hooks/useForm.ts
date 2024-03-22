import { useState, ChangeEvent } from "react"

interface UseFormProps {
  [key: string]: string;
}



export function useForm<T extends UseFormProps>(inputValues: T): any {
  const [formFields, setFormFields] = useState(inputValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return { formFields, handleChange, setFormFields }
}