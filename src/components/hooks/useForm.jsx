import { useState } from 'react'

export default (initialValues) => {
  const [values, setValues] = useState(initialValues)
  return [
    values,
    (evt) => {
      setValues({ ...values, [evt.target.name]: evt.target.value })
    },
  ]
}
