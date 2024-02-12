import { useState } from "react"

export function useForm(inputValues) {
  const [formFields, setFormFields] = useState(inputValues)

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return { formFields, handleChange, setFormFields }
}